# Architecture

## Simple mental model

CargoVue is a building with separate locked rooms. Information crosses a doorway only through a
versioned contract and a policy check. Sharing one code repository does not mean sharing one trust
boundary.

## Trust zones

| Zone             | Purpose                                              | May read                                                          | Must never read                                                  |
| ---------------- | ---------------------------------------------------- | ----------------------------------------------------------------- | ---------------------------------------------------------------- |
| Public web       | Company, learning, public verification               | Public content and submitted package bytes for local verification | Private matters, users, drafts                                   |
| Workspace web    | Analyst/reviewer interface                           | Tenant-scoped workspace projections                               | Other tenants, worker credentials, signing keys                  |
| API              | Authentication, authorization, policy, orchestration | Tenant-scoped operational records                                 | Raw secrets or unrestricted object storage                       |
| Evidence worker  | Scan and inspect hostile files                       | One short-lived quarantined object and job contract               | General database, signing keys, unrelated objects                |
| PCE              | Execute an approved deterministic method             | One versioned request and active method profile                   | Narrative conclusions, broad tenant data, signing keys           |
| Portal           | Counterparty access                                  | Approved release projection for its grant                         | Workspace drafts, unreleased annotations, originals not released |
| Offline verifier | Verify a portable package                            | Package supplied by the user and public trust anchors             | Production API or database                                       |

## Initial deployment

Use one private monorepo and three Vercel projects:

- `cargovue-public` deploys `apps/public-web`;
- `cargovue-workspace` deploys `apps/workspace-web` and calls the API;
- `cargovue-portal` deploys `apps/portal-web`.

The evidence plane is not Vercel-only:

- PostgreSQL on AWS RDS/Aurora with row-level security and tenant-aware repositories;
- S3 with versioning, Object Lock, KMS, restricted access points, and read-back verification;
- SQS for durable jobs;
- isolated ECS/Fargate tasks for hostile-file processing and PCE execution;
- CloudWatch/OpenTelemetry export for audit-safe operational telemetry;
- Okta OIDC Authorization Code with PKCE; SCIM when customer provisioning requires it.

Local Docker services are conveniences, not evidence that production controls exist.

## Core data model

The minimum evidence spine is:

- Tenant
- User and Service Principal
- Matter
- Actor
- Asset
- Source Record
- Source Version
- Evidence Locator
- Supply Chain Event
- Handoff
- Condition Observation
- Method Profile
- PCE Request and Outcome
- Gap
- Discrepancy
- Annotation
- Review Decision
- Release Candidate
- Release
- Portal Grant
- Audit Event

Every tenant-owned row carries a tenant identifier. Repository interfaces require a server-established
tenant context. The database also enforces row-level policies so one missed application filter is not
the only barrier.

## The four evidence chains

1. **Chain of custody** — who had the cargo, sample, file, or record and when.
2. **Chain of condition** — observations about state, environment, equipment, and quality.
3. **Chain of calculation** — inputs, units, methods, versions, intermediate steps, and result.
4. **Chain of authority** — who was allowed to collect, approve, calculate, release, or receive.

These are linked but not interchangeable. A strong file hash does not prove a laboratory method was
appropriate, and an accredited lab certificate does not prove the received file is unchanged.

## Intake flow

1. API creates a tenant-scoped upload intent with allowed size/type and short expiry.
2. Browser uploads directly to a quarantine bucket using the intent.
3. Object-created event creates a durable inspection job.
4. Isolated worker scans, identifies the real file type, extracts safe metadata, computes a digest,
   and performs object read-back.
5. API records the immutable source version and inspection outcome.
6. Unsafe or unsupported files remain quarantined; they are never silently promoted.
7. Extraction jobs receive immutable object identifiers, never arbitrary storage credentials.

## AI proposal flow

AI outputs a versioned proposal containing:

- model and prompt identifiers;
- source-version identifiers;
- exact evidence locators;
- structured proposed values;
- uncertainty or reason for abstention;
- creation time;
- no authority to approve itself.

A reviewer accepts, corrects, rejects, or defers the proposal. The original proposal and decision are
both preserved.

## PCE flow

The API validates a strict versioned request. PCE checks the method-profile identifier, status, scope,
units, required inputs, implementation digest, and authorization window. Unknown fields or versions
fail. Missing authority produces a structured refusal. PCE never turns its result into a causal,
contractual, legal, or insurance conclusion.

## Release flow

1. Select reviewed items into a release candidate.
2. Resolve or formally disposition required gaps and discrepancies.
3. Freeze the candidate and calculate its semantic manifest.
4. Run citations, tenant, authorization, malware, retention, and contract-version gates.
5. Sign using an isolated managed key only if every required gate passes.
6. Build a separate portal projection and portable verification package.
7. Append publication events to the audit chain.

The portal cannot query the workspace to “fill in” missing content.

## Why a modular monolith first

Business domains remain separate in code and contracts, but one API deployment is easier to operate
than many microservices. Hostile files, scientific execution, public content, portal content, and
offline verification remain separate because their trust boundaries justify the operational cost.

## Portability rules

- Domain code depends on interfaces, not Vercel or AWS SDKs.
- Contracts are versioned and contain no provider-specific URLs or credentials.
- Evidence digests and manifests use documented open formats.
- Offline verification must work after the hosted product is unavailable.
- Infrastructure provider decisions are recorded in ADRs, not hidden in application logic.
