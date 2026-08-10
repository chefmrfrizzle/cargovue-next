# Prompt — security review

Review the proposed change as an adversarial institutional security engineer.

Inspect:

- identity establishment and server-side tenant context;
- authorization at object, matter, action, and release levels;
- PostgreSQL RLS and object-store isolation;
- untrusted files, parsers, archives, URLs, and prompt injection;
- secrets, signing keys, logs, analytics, and error messages;
- replay, idempotency, race conditions, stale approvals, and duplicate jobs;
- portal/public/workspace data-flow violations;
- PCE method bypass or implementation-digest mismatch;
- release/signing fail-open behavior;
- dependency, CI, artifact, deployment, backup, and recovery risks.

For each actionable finding provide severity, exact file/line, exploit or failure path, affected asset,
and smallest safe remediation. Distinguish demonstrated defects from defense-in-depth suggestions. Do
not claim a control is implemented merely because a document describes it.
