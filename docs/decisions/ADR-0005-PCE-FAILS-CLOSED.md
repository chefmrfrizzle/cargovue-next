# ADR-0005 — PCE fails closed without an active method profile

Status: accepted  
Date: 2026-08-10

## Context

Legacy experiments contain useful structure alongside illustrative formulas, tables, constants, and
tolerances. Software correctness alone cannot establish scientific or contractual authority.

## Decision

PCE executes only when a strict request references an active, validated, in-scope method profile whose
implementation digest matches the approved digest. Every other request returns a structured refusal.

## Consequences

The initial PCE has no authorized calculations. This is an intentional safety feature. Method
qualification progresses independently of product feature pressure.
