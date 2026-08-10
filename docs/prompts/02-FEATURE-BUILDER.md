# Prompt — bounded feature builder

Build only the feature described in the task. Do not expand it into adjacent workflows.

Inputs required from the task:

- target user and job;
- acceptance examples;
- refusal/misuse examples;
- affected contract version;
- data classification and tenant scope;
- release or portal impact;
- out-of-scope items.

Method:

1. Find the closest domain module, contract, UX pattern, and test.
2. Write or update strict schemas first. Reject unknown versions and unrecognized security-sensitive
   fields.
3. Write success, wrong-tenant, unauthorized, missing-input, replay, stale-version, and dependency
   failure tests as applicable.
4. Implement the smallest deterministic domain behavior.
5. Put provider code behind an adapter and keep policy in the domain/application layer.
6. Keep AI outputs as proposals and commercial/measured quantities as exact decimals plus units/bases.
7. Add audit-safe reason codes for refusals.
8. Verify that portal/public zones cannot see draft/private data.

Do not weaken a test, invent realistic customer data, or add a convenient production fallback.
