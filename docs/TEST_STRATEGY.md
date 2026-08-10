# Test strategy

## What tests prove

Tests prove that the software behaved as specified for the tested inputs. They do not prove legal
validity, scientific authorization, accreditation, insurance coverage, or production security by
themselves.

## Test layers

1. **Contract tests** — strict versions, required fields, rejected unknowns, serialization stability.
2. **Domain tests** — legal state transitions, deterministic ordering, release and gap invariants.
3. **Property tests** — canonicalization, idempotence, tenant separation, monotonic audit chains.
4. **Adapter tests** — PostgreSQL RLS, object-store retention, queue retries, identity validation.
5. **Integration tests** — intake through review and release using synthetic records.
6. **Security tests** — cross-tenant access, malicious files, prompt injection, SSRF, broken grants,
   replay, release bypass, signing misuse.
7. **PCE qualification** — licensed reference cases, independent results, boundaries, units,
   uncertainty, implementation digest, and refusals.
8. **Resilience tests** — restore, replay, duplicate messages, region/service failure, lost dependency.
9. **Offline verification** — package verification without API/database access.
10. **Human evaluation** — reviewer correction, disagreement, abstention, workload, and explanation.

## Required cases for every feature

- normal success;
- missing required input;
- unauthorized actor;
- wrong tenant;
- duplicate/replayed request;
- stale version;
- unsupported contract version;
- dependency failure;
- audit and privacy behavior;
- deterministic repeat.

## LNG adversarial fixture families

- boil-off-gas records that do not align with event windows;
- cargo-volume-factor or volume-correction inconsistencies;
- time-zone and clock-skew conflicts;
- ballast, heel, tare, or line-pack ambiguity;
- late surveyor or laboratory reports;
- missing or inapplicable accreditation scope;
- composition, temperature, pressure, density, or energy basis mismatch;
- duplicated, amended, superseded, or partially redacted records;
- visually plausible document with incorrect machine-readable ground truth.

## Test-data rule

All committed fixtures are synthetic, small, deterministic, documented, and licensed for repository
use. Large generated corpora live in versioned object storage with a manifest, generator version, seed,
and digest.

## Promotion gates

- Pull request: formatting, types, unit/contract tests, boundary scan, dependency review.
- Main: integration, security, package build, SBOM, provenance.
- Qualification: adversarial corpus, PCE validation, tenant escape, restore, and human evaluation.
- Production: approved change, artifact attestation, deployment policy, smoke checks, rollback readiness.
