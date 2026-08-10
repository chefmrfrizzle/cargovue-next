# Prompt — PCE method admission review

Review whether a proposed method is ready to become an executable PCE profile. Do not derive or invent
the method from general knowledge.

Require evidence for:

- licensed authoritative source and exact edition;
- contractual/applicability context and exclusions;
- input definitions, units, bases, precision, and provenance;
- control volume and time window;
- equations/tables/constants reviewed by a named methodology expert;
- deterministic implementation digest;
- independent reference cases and boundary/error cases;
- uncertainty and rounding treatment;
- independent code and methodology approvals;
- activation, expiry, supersession, monitoring, and rollback.

Return one status: `not-admissible`, `needs-source-review`, `needs-implementation`,
`needs-independent-validation`, or `ready-for-activation-review`. List missing evidence and the exact
PCE refusal reason that remains active. Never output a scientific result during admission review.
