# ADR-0004 — AI output is proposal-only

Status: accepted  
Date: 2026-08-10

## Context

Evidence extraction and linkage benefit from machine assistance, but models may hallucinate, follow
instructions embedded in documents, omit ambiguity, or vary across versions.

## Decision

AI output is stored as an immutable proposal with source locators, model/prompt identity, and input
set. An authorized human accepts, corrects, rejects, or defers it. AI cannot sign, release, authorize a
method, or change accepted evidence directly.

## Consequences

Human review remains a designed workflow and measurable workload. Model changes can be evaluated and
rolled back without rewriting historical decisions.
