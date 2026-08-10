# ADR-0003 — Vercel control plane and AWS evidence plane

Status: accepted  
Date: 2026-08-10

## Context

Vercel is suitable for web delivery and bounded orchestration but is not the complete evidence-custody
platform. CargoVue needs immutable objects, durable jobs, isolated workers, managed keys, database
recovery, and auditable retention.

## Decision

Deploy web surfaces through new projects in the existing Vercel team. Use AWS for production
PostgreSQL, object custody, queues, hostile workers, PCE workers, backups, telemetry, and signing.

## Consequences

There are two cloud control planes and a shared-responsibility model to operate. Provider details stay
behind adapters so the evidence format and domain behavior remain portable.
