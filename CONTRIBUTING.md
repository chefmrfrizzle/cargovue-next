# Contributing

## Before you start

1. Read `AGENTS.md`.
2. Open or link a feature/bug issue.
3. State the affected trust boundaries and refusal behavior.
4. Use synthetic fixtures only.

## Branch and review rules

- Branch from protected `main`.
- Use a short branch name such as `feature/intake-manifest`.
- Keep pull requests small enough to review carefully.
- Require at least one owner review; security, PCE, and release changes require the relevant owner.
- Merge only after required checks pass.
- Do not bypass branch protection for convenience.

## Definition of done

- The behavior has acceptance and refusal tests.
- Types, schemas, and API contracts are explicit.
- Cross-tenant and unauthorized cases are tested where applicable.
- Logs contain identifiers and outcomes, not secret or document contents.
- Documentation and ADRs match the implementation.
- `npm run verify` passes.

## Commit messages

Use a plain imperative summary, for example:

```text
Add fail-closed method profile validation
```

Signed commits and signed release tags should be enabled when the GitHub organization is configured.
