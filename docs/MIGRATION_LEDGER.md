# Corrected migration ledger

Status: governing source-admission record  
Rule: nothing enters CargoVue Next merely because it existed before.

## Why this ledger exists

The old work contains excellent lessons and dangerous shortcuts side by side. This ledger separates
behavior worth preserving from code and assumptions that must stay behind. It also corrects the prior
rebuild audit, which did not include `C:\G\LNG` or `C:\Bogdanoff\pce_complete`.

## Source register

| Source                                                    | What it contains                                                         | Verification snapshot                                        | Role now                                             |
| --------------------------------------------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------ | ---------------------------------------------------- |
| `C:\Gas\cargovue-workspace`                               | Current modular workspace, security and evidence domains                 | 138 tests passed on 2026-08-10                               | Primary behavioral reference                         |
| `C:\G\LNG`                                                | Large legacy LNG application and extensive domain experiments            | 707 passed, 18 skipped on 2026-08-10                         | Research and test-pattern reference only             |
| `C:\Bogdanoff\pce_complete`                               | Standalone PCE methodology, units, provenance, and scientific quarantine | 239 passed, 37 skipped on 2026-08-10                         | Method-governance reference only                     |
| `C:\lngdocs`                                              | Deterministic synthetic document generation and ground truth             | Large generated corpus; source and tests only are candidates | Separate evaluation laboratory                       |
| `C:\LNG`                                                  | Quarantine boundary and rebuild authority pointer                        | Contains legacy quarantine                                   | Archive/control reference                            |
| `C:\ChefLNG\lng-world`                                    | Public education and publication ideas                                   | Not a private evidence system                                | Copy and visual research only                        |
| `C:\Gas\cargovue-public-site`                             | Public-site experiments                                                  | Separate frontend starter                                    | Visual/copy research only                            |
| `C:\Gas\deliverables\cargovue-mac-rebuild-kit-2026-08-10` | Earlier architecture and prompt package                                  | Useful but incomplete source audit                           | Research input, superseded where this ledger differs |

Passing tests demonstrate expected software behavior only. They do not authorize formulas, make the
old storage model production-ready, or establish compliance.

## Accepted concepts — rewrite from specification

| Concept                        | Source lesson                                                                                                    | New admission requirement                                               |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| Evidence spine                 | Matter, actor, asset, source, event, handoff, condition, method, gap, discrepancy, annotation, manifest, release | New schemas, tenant rules, misuse tests                                 |
| Four evidence chains           | Custody, condition, calculation, authority                                                                       | Explicit links and separate strength indicators                         |
| Deterministic chronology       | Stable ordering and replay are explainable                                                                       | New tie-break rules and golden fixtures                                 |
| Strict PCE contracts           | Unknown versions/fields must not be silently accepted                                                            | Versioned schema and refusal tests                                      |
| Proposal-only AI               | Model output must not mutate accepted truth directly                                                             | Review decision object and correction history                           |
| Gaps and discrepancies         | Absence and conflict are first-class                                                                             | Lifecycle, ownership, materiality rationale, release impact             |
| Release firewall               | Only reviewed projections reach counterpart portal                                                               | Separate storage/query path and grants                                  |
| Portable signed package        | Counterparty should not have to trust the live database                                                          | Open manifest, signature metadata, offline verifier                     |
| Red-team fixture families      | BOG, CVF, clock skew, ballast/tare, line-pack, late reports, accreditation gaps, basis mismatches                | Synthetic ground truth and expected refusal/alert behavior              |
| Method authorization lifecycle | Science needs authority, scope, version, reviewer, and expiry                                                    | Active profile plus implementation digest and validation receipt        |
| Units boundary                 | Quantities need unit, basis, precision, and provenance                                                           | Exact-decimal serialized quantities; no implicit conversion             |
| Deterministic synthetic corpus | Repeatable evaluation and hard negatives are valuable                                                            | Generator source in a separate tool; generated corpus excluded from Git |

## Rejected or quarantined

| Item                                                                     | Decision   | Reason                                                                                 |
| ------------------------------------------------------------------------ | ---------- | -------------------------------------------------------------------------------------- |
| Copying old application source                                           | Reject     | Preserves hidden coupling, debt, and contradictory boundaries                          |
| Copying Git history                                                      | Reject     | New repository needs a clean trust and authorship boundary                             |
| In-memory production repositories                                        | Reject     | No durability, RLS, backup, retention, or institutional evidence                       |
| Hard-coded severity thresholds                                           | Quarantine | Must be policy-owned, explained, versioned, and validated                              |
| Illustrative 0.5% or “Japan baseline” tolerances                         | Reject     | Not an authorized universal LNG rule                                                   |
| Old ISO 6578:2017-dependent science                                      | Quarantine | Edition withdrawn and replaced; implementation requires licensed current method review |
| Illustrative lookup tables and constants                                 | Reject     | Cannot authorize physical results                                                      |
| Silent v1-to-v2 contract upgrades                                        | Reject     | Damages reproducibility and may alter meaning                                          |
| Formula implementation hidden in UI or prompt                            | Reject     | Science belongs in governed PCE code and profiles                                      |
| Live connectors in the first product                                     | Defer      | Expands credentials, availability, privacy, and normalization risk too early           |
| Autonomous claim, liability, sanctions, fraud, or conformity conclusions | Reject     | Outside product authority and unsafe                                                   |
| Portal reads from workspace database                                     | Reject     | Breaks the publication firewall                                                        |
| Generated PDFs/JSON in Git                                               | Reject     | Size, provenance, privacy, and review problems                                         |
| Real customer evidence in development                                    | Reject     | Production-data gate is not satisfied                                                  |

## Admission process for any additional old behavior

1. Write the user or assurance problem without naming the old function/class.
2. Cite the exact old source and tests as research evidence.
3. Identify hidden assumptions, standards, thresholds, data, and side effects.
4. Classify it as accept, rewrite, defer, quarantine, or reject.
5. Write a provider-neutral contract and refusal behavior.
6. Create new synthetic fixtures and tests.
7. Implement from the new specification without copying source.
8. Record reviewer, date, and supporting ADR.

## Naming decisions

- CargoVue Next is the working greenfield repository name.
- PCE means **Physical Calculation Engine** everywhere.
- “Evidence twin” describes an evidence dependency model, not a physical simulation or source of
  truth.
- “Verified” means the stated verification checks passed; it does not mean legally true, conforming,
  accredited, insured, or scientifically correct beyond the authorized method scope.

## Items still requiring named expert review

- licensed implementation review for ISO 6578:2025, ISO 8943:2025, ISO 6976:2016, ISO 10976:2023,
  and any contractually selected method;
- LNG metrology and uncertainty validation;
- P&I, legal, insurance, sanctions, and electronic-trade-document wording;
- retention schedules by jurisdiction and contract;
- first counterpart data residency and subprocessor requirements;
- evidence package signature and long-term timestamp profile.
