# Data classification and handling

## Classes

| Class               | Examples                                                                     | Git                     | Local development       | Production                 |
| ------------------- | ---------------------------------------------------------------------------- | ----------------------- | ----------------------- | -------------------------- |
| Public              | Approved website copy, public standards metadata                             | Allowed                 | Allowed                 | Public services            |
| Internal            | Architecture, synthetic fixtures, non-secret runbooks                        | Allowed in private repo | Allowed                 | Access controlled          |
| Confidential        | Customer identity, matter metadata, draft analysis                           | Forbidden               | Forbidden until gate    | Encrypted, tenant-scoped   |
| Restricted evidence | Original records, extracted content, lab/inspection material, release drafts | Forbidden               | Forbidden until gate    | Immutable custody controls |
| Restricted secrets  | Tokens, passwords, private/signing keys                                      | Forbidden               | Local secret store only | Managed secret/KMS/HSM     |

## Rules

- Classification follows the highest-sensitivity item in a collection.
- Redaction creates a derivative; it does not downgrade or replace the original automatically.
- Synthetic data must not reproduce an identifiable real matter.
- Logs and analytics may use opaque identifiers, not evidence contents.
- Support tools receive the minimum data needed and are recorded as subprocessors when applicable.
- Production exports require an approved purpose, recipient, scope, expiry, and audit record.

## Environment separation

- Development: synthetic-only, local or isolated cloud account.
- Test/preview: synthetic-only; pull-request deployments must not inherit production secrets.
- Qualification: controlled synthetic/adversarial corpus and approved closed-file protocol.
- Production: real data only after the production-data gate and customer agreement.

## Retention and deletion

Retention is policy- and matter-driven. Legal hold overrides ordinary destruction. Destruction is a
reviewed workflow with proof of scope and result. Immutable-retention settings cannot be shortened by
an ordinary administrator. Backup expiry and search indexes must be included in the disposition plan.
