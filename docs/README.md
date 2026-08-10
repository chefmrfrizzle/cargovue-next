# Documentation map

These documents are part of the product. A code change that contradicts them is a defect.

## Read in this order

1. `PRODUCT_CHARTER.md` — purpose, users, promises, exclusions.
2. `ARCHITECTURE.md` — trust zones, data movement, deployment shape.
3. `MIGRATION_LEDGER.md` — what the new product learned from the old work.
4. `SECURITY_MODEL.md` — threats, controls, and failure behavior.
5. `METHOD_GOVERNANCE.md` — why PCE usually refuses.
6. `DATA_CLASSIFICATION.md` — what may be stored where.
7. `TEST_STRATEGY.md` — how claims about software behavior are proven.
8. `DELIVERY_ROADMAP.md` — safe order of work.
9. `TRUST_CENTER_CHECKLIST.md` — evidence needed for institutional diligence.
10. `GITHUB_SECURITY_STATUS.md` — controls actually active on the current repository.
11. `GLOSSARY.md` — shared language.

Permanent, difficult-to-reverse decisions live in `decisions/`. Task-specific AI instructions live in
`prompts/`; prompts cannot override product or security policy.
