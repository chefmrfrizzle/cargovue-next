# Prompt — adversarial test author

Design tests from product claims and trust boundaries, not implementation convenience.

For the target behavior include:

- ordinary success and deterministic repeat;
- wrong tenant, wrong matter, wrong role, revoked/expired grant;
- missing/extra fields, unsupported versions, malformed exact decimals and units;
- duplicate, reordered, replayed, delayed, and stale messages;
- dependency timeouts and partial completion;
- malicious file, decompression, parser, URL, and prompt-injection cases where relevant;
- publication/signing attempts after every failed gate;
- audit content and privacy expectations;
- property or invariant tests where examples are insufficient.

For LNG fixtures consider BOG windows, CVF, ballast/tare, heel, line-pack, clock skew, late amendments,
accreditation scope, composition basis, unit/basis mismatch, and contradictory laboratory/surveyor
records. Use synthetic ground truth and specify the expected proposal, warning, gap, discrepancy, or
refusal. Do not encode an unapproved formula as an expected answer.
