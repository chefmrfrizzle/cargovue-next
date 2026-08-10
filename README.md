# CargoVue Next

CargoVue Next is a greenfield, proof-carrying LNG evidence workspace.

It helps people assemble records, understand chronology, identify contradictions and missing
evidence, review machine proposals, and release a package that another party can verify. It does
not decide claims, certify cargoes, replace surveyors, give legal advice, or invent scientific
methods.

## Start here

If you are new to software, read [START_HERE.md](START_HERE.md). It explains the repository in
plain language and gives you exact commands.

If you are changing the system, read these files in order:

1. [AGENTS.md](AGENTS.md) — rules that code and AI assistants cannot break.
2. [Product charter](docs/PRODUCT_CHARTER.md) — what the product is and is not.
3. [Architecture](docs/ARCHITECTURE.md) — how the pieces are separated.
4. [Migration ledger](docs/MIGRATION_LEDGER.md) — lessons accepted or rejected from the old work.
5. [Security model](docs/SECURITY_MODEL.md) — threats and controls.
6. [Delivery roadmap](docs/DELIVERY_ROADMAP.md) — the safe build order.

## Repository map

```text
apps/
  public-web/       Public product and learning pages; never reads private matters
  workspace-web/    Authenticated analyst and reviewer workspace
  portal-web/       Counterparty view of explicitly released records only
  api/              Policy and orchestration API
  evidence-worker/  Isolated hostile-file processing boundary
  pce-service/      Governed Physical Calculation Engine; refuses unauthorized methods

packages/
  contracts/        Versioned messages shared between trust zones
  domain/           Small deterministic state machines and invariants
  audit/            Canonical JSON and tamper-evident hash chaining
  test-fixtures/    Synthetic-only examples

docs/               Product, security, architecture, decisions, and prompts
infra/              Local and production infrastructure guidance
```

## Requirements

- Node.js 24 LTS
- npm 11 or newer
- Python 3.11 or newer
- Docker Desktop for local PostgreSQL and object storage

## First run

```powershell
Copy-Item .env.example .env
npm install
python -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install -e "apps/pce-service[dev]"
docker compose up -d postgres minio
npm run verify
```

Run an application:

```powershell
npm run dev:public
npm run dev:workspace
npm run dev:portal
npm run dev:api
```

The applications use different ports so they can run together.

## Current maturity

This is the Phase 0 foundation. It includes runnable shells, governed contracts, a real audit-hash
algorithm, a PCE refusal boundary, tests, CI, and the complete documentation system. It is not yet
approved for real counterpart evidence or scientific results. See the roadmap for the exact gates.

## Non-negotiable rule

Passing tests does not make a methodology scientifically authorized or a deployment institutionally
approved. Those are separate decisions with separate evidence.
