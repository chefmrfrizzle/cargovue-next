# Infrastructure guide

## Local development

`compose.yaml` starts PostgreSQL and MinIO. ClamAV is optional:

```powershell
docker compose up -d postgres minio
docker compose --profile hostile-file-scanning up -d clamav
```

Local credentials are intentionally obvious and must never be used outside a developer machine.

## Production target

- Vercel: public web, workspace web, portal web, and bounded orchestration functions.
- AWS: RDS/Aurora PostgreSQL, S3 Object Lock/KMS, SQS, isolated ECS/Fargate workers, backups,
  telemetry, and managed signing.
- Okta: workforce/customer identity, MFA policy, OIDC/PKCE, later SCIM.
- GitHub: private source, protected branches, CI, security scanning, release provenance.

Production infrastructure must be implemented as reviewed infrastructure-as-code after account,
region, legal entity, domain, retention, recovery, and first-counterparty requirements are known.
Placeholder Terraform would create false confidence, so it is intentionally not included in Gate 0.
