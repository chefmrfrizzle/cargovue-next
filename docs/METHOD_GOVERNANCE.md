# Method governance and PCE

## The simple explanation

PCE is like a laboratory instrument with a lock on it. Knowing how to write a formula is not the same
as being authorized to use that formula for a particular cargo, contract, location, unit basis, and
standard edition.

Therefore the safest PCE result is often a refusal that explains what is missing.

## Method profile

Every executable method profile must include:

- unique identifier and semantic version;
- human title and narrow purpose;
- authority type and reference metadata;
- standard/method edition and licensed-source review record;
- applicability scope and explicit exclusions;
- required input schema, units, bases, precision, and provenance;
- deterministic implementation digest;
- expected output schema and uncertainty treatment;
- reference cases, independent implementation review, and validation receipt;
- methodology owner and approving reviewers;
- activation time, expiry/review time, and supersession relationship;
- prohibited interpretations.

The repository stores references and implementation knowledge, not unauthorized copies of copyrighted
standards.

## Lifecycle

`draft -> source-reviewed -> implemented -> independently-validated -> active -> suspended -> retired`

Only `active` may execute. Every transition is an audit event. Activating a profile requires separate
methodology and software approvals.

## Refusal reasons

- unknown contract version;
- unknown or inactive method profile;
- method profile expired or superseded;
- missing licensed-source review;
- implementation digest differs from the validated digest;
- missing required input or provenance;
- unit, basis, precision, or control-volume mismatch;
- input outside the declared applicability range;
- missing uncertainty information where required;
- tenant or user lacks request authority;
- validation receipt missing or revoked.

Refusals are structured, testable outputs. They are not exceptions hidden in logs.

## Separation of calculation and interpretation

PCE may output deterministic values, intermediate steps, uncertainties, warnings, and citations to the
authorized profile. It may not state that a party is liable, a cargo is off-specification, an insurer
must pay, fraud occurred, a document is legally valid, or a laboratory/inspector is competent.

## Standards watchlist

Metadata must track the selected contractual edition rather than assume “latest” automatically. The
initial review list includes ISO 6578:2025, ISO 8943:2025, ISO 6976:2016, ISO 10976:2023, ISO/IEC
17025:2017, and ISO/IEC 17020:2026. Edition changes make affected profiles stale until reviewed; they
do not silently change past results.
