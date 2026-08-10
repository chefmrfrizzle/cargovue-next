# ADR-0002 — Modular monolith with isolated risk zones

Status: accepted  
Date: 2026-08-10

## Context

Many business microservices would increase deployment, identity, tracing, and incident complexity
before product-market fit. Hostile files, scientific execution, portal publication, and offline
verification nevertheless have materially different risk profiles.

## Decision

Use one modular orchestration API with explicit domain packages. Deploy hostile evidence processing,
PCE execution, public web, portal, and offline verification as isolated trust zones communicating via
strict contracts.

## Consequences

Development and operations remain understandable while the high-risk boundaries stay enforceable.
Domain modules may become services later only with measured scaling or isolation need.
