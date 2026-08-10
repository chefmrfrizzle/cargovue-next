# Security model

## What we protect

- original evidence bytes and provenance;
- tenant and user identities;
- draft analysis, annotations, gaps, and reviewer decisions;
- method profiles and calculation inputs/outputs;
- release packages and portal grants;
- audit history, encryption keys, signing keys, and operational logs;
- availability and recoverability of the evidence service.

## Main threat actors and failures

- malicious outsider attempting account or service compromise;
- user trying to access another tenant;
- authorized user exceeding their matter or release authority;
- compromised document containing malware or an extraction exploit;
- prompt injection inside an uploaded record;
- model hallucination or confident unsupported statement;
- developer accidentally committing secrets or real evidence;
- stolen worker credential used to enumerate storage;
- database administrator or service modifying history;
- supply-chain dependency or CI compromise;
- signing operation performed despite a failed release gate;
- scientifically invalid method presented as an approved result;
- ransomware, cloud outage, deletion, region failure, or lost keys.

## Control families

### Identity and access

- Okta OIDC Authorization Code with PKCE;
- short sessions, MFA policy, server-side tenant context;
- least-privilege roles and matter-level authorization;
- SCIM joiner/mover/leaver automation when required;
- quarterly access reviews and emergency-access logging;
- service identities separated from people and from each other.

### Tenant isolation

- tenant identifier on every tenant-owned record;
- row-level security in PostgreSQL;
- repositories require a typed tenant context;
- object keys and access points are tenant-scoped;
- negative and randomized cross-tenant tests;
- portal release stores are separate from workspace stores.

### Evidence custody

- direct upload to quarantine through short-lived, single-object intents;
- digest at intake plus server-side read-back digest;
- object versioning, retention, Object Lock, encryption, and access logs;
- scan and real-type identification before promotion;
- append-only custody events;
- originals never overwritten by normalized or redacted derivatives.

### Hostile processing

- isolated ephemeral worker;
- no inbound public network;
- constrained CPU, memory, time, and output size;
- read access to one job object and write access to one result prefix;
- no signing key, general database, or ambient tenant access;
- archive recursion, decompression, parser, and prompt-injection limits.

### AI governance

- AI reads immutable source versions and emits proposals only;
- exact citations required for material statements;
- model, prompt, parameters, input set, output, and reviewer recorded;
- tenant data excluded from provider training by contract and configuration;
- evaluation, counterfactual, abstention, and red-team gates before activation;
- retrieval content is untrusted data, never system instruction.

### Scientific governance

- strict PCE request schema with exact decimals and explicit units/bases;
- active method profile required;
- implementation digest tied to validation evidence;
- unknown field/version/method fails closed;
- calculations separated from interpretations;
- expired, superseded, incomplete, or unlicensed method profiles refuse execution.

### Release and signing

- four-eyes approval for material releases;
- frozen manifest before signing;
- signing service receives only the digest and approved release identity;
- KMS/HSM keys inaccessible to users, agents, and general app runtime;
- signature, certificate chain, timestamp, and revocation information packaged for verification;
- any failed citation, authorization, retention, malware, or integrity gate blocks release.

### Software supply chain

- protected `main`, CODEOWNERS, required checks, signed commits/tags;
- dependency review, Dependabot, CodeQL, secret scanning and push protection;
- pinned lockfiles and reviewed GitHub Actions;
- SBOM and artifact provenance attached to releases;
- separate production deployment approval and rollback procedure.

### Resilience

- encrypted backups and point-in-time recovery;
- documented RTO/RPO by service tier;
- restore drills into a separate account/environment;
- object, database, identity, key, queue, and DNS failure exercises;
- legal hold and deletion workflows tested without weakening immutable originals.

## Logging rules

Log security-relevant identifiers, actor, tenant, action, result, reason code, policy version, request
identifier, and time. Do not log document contents, extracted text, tokens, passwords, private keys,
full object URLs, or unnecessary personal data.

## Minimum release threat-model review

Before real evidence:

- create data-flow diagrams with trust boundaries;
- complete STRIDE-style analysis and abuse cases;
- verify OWASP ASVS Level 2 controls;
- run an independent penetration test;
- remediate critical/high findings or document approved compensating controls;
- complete tenant escape, worker escape, prompt injection, release bypass, signing misuse, restore,
  and key-loss exercises.

## Residual-risk rule

Security language must distinguish implemented, tested, independently assessed, certified, planned,
and not applicable. A cloud provider’s certification does not automatically certify CargoVue.
