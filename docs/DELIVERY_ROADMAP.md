# Delivery roadmap

The roadmap uses gates instead of optimistic dates. A gate finishes when its evidence exists.

## Gate 0 — greenfield foundation

Deliverables:

- new private repository and clean Git history;
- product charter, architecture, migration ledger, security model, ADRs, and prompts;
- workspace layout, CI, dependency/security automation, synthetic-only rule;
- runnable application shells;
- canonical JSON/audit-chain algorithm and tests;
- strict PCE method registry with refusal tests.

Exit: `npm run verify` passes and no old source or secrets entered the repository.

## Gate 1 — trust foundation

Deliverables:

- Okta authentication and server-side tenant context;
- PostgreSQL tenancy and RLS;
- immutable intake intents, direct uploads, quarantine, scan, digest, read-back;
- durable jobs, idempotency, audit chain, telemetry;
- backup/restore and key-management runbooks.

Exit: cross-tenant, hostile-file, retry, restore, and custody tests pass in a production-like account.

## Gate 2 — first closeable evidence slice

Deliverables:

- matter and evidence inventory;
- exact locators and proposal-only extraction;
- normalization and deterministic chronology;
- gaps, discrepancies, annotations, and review;
- PCE request/refusal integration;
- frozen release, portal projection, signed package, offline verification.

Exit: a synthetic matter travels from upload to independently verified release with no manual database
edits.

## Gate 3 — qualification laboratory

Deliverables:

- separated `lngdocs` generator source and versioned corpus registry;
- adversarial LNG suites and hard negatives;
- counterfactual integrity tests;
- reviewer performance and disagreement measurements;
- model/prompt activation registry and rollback.

Exit: agreed accuracy, citation, abstention, correction, bias, and workload thresholds are met.

## Gate 4 — institutional assurance

Deliverables:

- completed threat model and OWASP ASVS Level 2 assessment;
- independent penetration test and remediation;
- incident, restore, key rotation, legal hold, destruction, and continuity exercises;
- data-flow, residency, subprocessor, privacy, AI data-use, and secure-development records;
- buyer trust room with sample signed package.

Exit: security/product owners approve a narrowly scoped closed-file pilot.

## Gate 5 — design-partner pilot

Deliverables:

- one counterpart, one jurisdiction/data region, one retrospective workflow;
- contractual roles, success measures, support/escalation, and deletion/retention rules;
- monitored pilot with human review and no autonomous conclusions;
- post-pilot evidence and risk review.

Exit: both sides accept the measured results and residual risks.

## Gate 6 — production and assurance program

Deliverables:

- production launch approval and change governance;
- SOC 2 evidence collection, Type I then operating-period Type II;
- ISO/IEC 27001 ISMS program when commercially justified;
- ISO/IEC 27701, ISO/IEC 42001, or ISO 22301 based on actual data and buyer needs;
- qualified method profiles added independently of product feature pressure.

## Later Mac roadmap

1. Offline Evidence Capsule verifier.
2. Accreditation and Method Passport.
3. Temporal Evidence Twin with dependency/staleness explanation.
4. Assurance Compiler producing OSCAL-aligned buyer evidence.
5. Counterfactual Integrity Harness.
6. Standards Delta Radar.
7. Controlled electronic-trade-document bridge.

The Mac application is a verification and field-work companion, not a copy of the hosted production
database.
