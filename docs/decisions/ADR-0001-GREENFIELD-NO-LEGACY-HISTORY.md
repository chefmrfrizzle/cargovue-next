# ADR-0001 — Greenfield repository with no legacy history

Status: accepted  
Date: 2026-08-10

## Context

Previous CargoVue/LNG repositories contain valuable behavior, tests, unsafe scientific assumptions,
contradictory naming, generated data, incomplete infrastructure, and very dirty worktrees. Copying the
repository or Git history would make the new trust boundary ambiguous.

## Decision

Create a new repository with no copied Git history or application source. Admit lessons only through
the migration ledger, new specifications, and independently written tests/implementation.

## Consequences

Useful behavior takes longer to re-specify, but every admitted behavior has an owner and rationale.
The old repositories remain read-only research inputs and are never build dependencies.
