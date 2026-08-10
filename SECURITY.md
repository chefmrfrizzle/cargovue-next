# Security policy

## Reporting a vulnerability

Do not open a public issue. Use GitHub private vulnerability reporting for the repository. If that is
unavailable, contact the security owner through the private channel listed in the organization trust
center.

Never send customer evidence, access tokens, passwords, signing material, or exploit payloads through
ordinary issue comments.

## Supported versions

Only the latest protected `main` branch and explicitly identified production release are supported.

## Initial response targets

- Critical report acknowledgement: one business day.
- High report acknowledgement: two business days.
- Lower-severity report acknowledgement: five business days.

These are response targets, not guaranteed remediation times. Remediation depends on risk, exposure,
available compensating controls, and required validation.

## Security invariants

- Tenant identity is established server-side and never accepted from an untrusted request field.
- Source evidence is immutable after successful intake and read-back verification.
- Release signing fails closed and uses managed KMS/HSM keys in production.
- Portal services read only approved release projections.
- Hostile files are processed in an isolated worker with no ambient production credentials.
- PCE executes only active, versioned, explicitly authorized method profiles.
- Security-relevant actions append to a tamper-evident audit chain.

See `docs/SECURITY_MODEL.md` for the threat model and `docs/TRUST_CENTER_CHECKLIST.md` for buyer-facing
assurance evidence.
