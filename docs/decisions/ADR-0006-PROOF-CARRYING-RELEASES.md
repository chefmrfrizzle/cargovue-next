# ADR-0006 — Releases carry their verification material

Status: accepted  
Date: 2026-08-10

## Context

A counterparty should not need continuing access to CargoVue or blind trust in its database to confirm
what was released and whether the package changed.

## Decision

Every release is frozen before signing and includes a deterministic manifest, object digests, contract
versions, exact citations, review/authorization summaries, signature metadata, and offline verification
instructions. The offline verifier does not call production services.

## Consequences

Release compatibility and long-term verification become product requirements. Portal content is a
projection of a frozen release rather than a live workspace view.
