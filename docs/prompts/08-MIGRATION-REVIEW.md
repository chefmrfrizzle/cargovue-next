# Prompt — legacy lesson admission

Evaluate one old behavior or algorithm without copying its code.

Inputs:

- exact legacy path and symbol/document;
- old tests or fixtures;
- claimed user/assurance value;
- hidden thresholds, standards, data, dependencies, and side effects;
- proposed new trust boundary.

Process:

1. Describe the problem independently of the old implementation.
2. Separate domain invariant, policy choice, UI choice, provider adapter, and scientific claim.
3. Identify unsafe assumptions and whether authority is missing.
4. Choose `accept-as-behavior`, `rewrite`, `defer`, `quarantine`, or `reject`.
5. Define a new strict contract, refusal behavior, synthetic fixtures, and tests.
6. Update the migration ledger and create an ADR if the choice is hard to reverse.

The output may quote only small identifiers or behavior descriptions needed for provenance. It must not
paste or mechanically translate legacy source.
