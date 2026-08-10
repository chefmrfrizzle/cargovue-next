# Product charter

Status: approved greenfield foundation  
Product: CargoVue Next  
Canonical PCE expansion: Physical Calculation Engine

## One-sentence promise

CargoVue turns fragmented LNG evidence into a traceable, human-reviewed release package that an
authorized counterparty can independently verify.

## The problem

An LNG matter may involve emails, spreadsheets, laboratory results, inspection reports, terminal
records, vessel records, contracts, photographs, calculations, and later corrections. The records may
use different timestamps, units, identifiers, names, and assumptions. Important conclusions become
hard to reproduce and even harder to explain to another institution.

## Primary users

- analyst assembling and reviewing evidence;
- senior reviewer approving or rejecting proposals;
- matter administrator controlling access, retention, and release;
- counterparty inspecting an approved release;
- independent verifier checking package integrity offline;
- methodology owner authorizing a narrowly defined PCE method profile.

## First closeable workflow

A retrospective synthetic LNG evidence qualification:

1. create a matter;
2. upload records directly to quarantine storage;
3. scan, hash, preserve, and read back the original bytes;
4. inventory and classify records;
5. propose extracted facts with exact locators;
6. normalize names, times, units, and identifiers without destroying originals;
7. build a deterministic chronology;
8. record contradictions, gaps, and methodology questions;
9. request a governed PCE result or receive an explicit refusal;
10. review and correct proposals;
11. freeze a release candidate;
12. sign and publish approved projections;
13. verify the package without trusting the live application.

## Product principles

### Evidence before narrative

The system shows the source, locator, transformation, and reviewer before presenting a polished
explanation.

### Refusal is a useful result

“Cannot calculate because the method profile is inactive” is safer and more informative than a number
created from an undocumented assumption.

### Human authority is explicit

The interface distinguishes original evidence, deterministic transformation, machine proposal, human
correction, human approval, and released fact.

### Releases carry their own proof

A release includes a manifest, hashes, contract versions, citations, review history, signature
metadata, and verification instructions.

### Institutional neutrality

CargoVue organizes and verifies evidence. It does not make legal, insurance, sanctions, liability,
fraud, causation, accreditation, or cargo-conformity determinations.

## Explicit non-goals for the first release

- live vessel telemetry;
- autonomous claim decisions;
- title transfer or electronic bill-of-lading control;
- universal LNG calculation library;
- public marketplace;
- automatic sanctions or fraud conclusions;
- real-time collaboration across unapproved jurisdictions;
- replacing laboratories, inspectors, surveyors, counsel, adjusters, or arbitrators.

## Success measures

Product measures:

- time from intake to review-ready evidence inventory;
- percentage of material statements with valid exact locators;
- reviewer correction and disagreement rates;
- number and age of unresolved material gaps;
- release verification success rate;
- time required for a counterparty to understand why a statement exists;
- PCE refusal precision and unauthorized-execution rate, which must remain zero.

Assurance measures:

- cross-tenant access test pass rate;
- restore drill success and measured recovery time;
- percentage of production changes with provenance and approval;
- security access-review completion;
- number of releases produced despite a failed gate, which must remain zero.

## Production-data gate

Real evidence is forbidden until all of the following are approved:

- named product and security owners;
- production threat model;
- tenant isolation and authorization test evidence;
- data-processing and retention terms;
- subprocessor and residency register;
- incident-response and restore drills;
- independent penetration test and remediation;
- managed identity, keys, secrets, logs, backups, and immutable storage;
- customer-approved pilot scope;
- written AI data-use and human-review policy.
