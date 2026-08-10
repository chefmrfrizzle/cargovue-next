# Start here — explained simply

Imagine CargoVue is a very careful digital evidence room.

A normal file-sharing app says, “Here are some documents.” CargoVue needs to say much more:

- who supplied each document;
- whether the bytes changed;
- where each extracted statement came from;
- what was reviewed by a person;
- which information is missing or contradictory;
- which calculation method was authorized;
- exactly what a counterparty was allowed to see; and
- whether the final package can still be verified years later.

## The six main pieces

1. **Public website** — the shop window. It contains no private cases.
2. **Workspace** — the locked office where analysts and reviewers work.
3. **Portal** — a separate viewing room for information someone deliberately released.
4. **API** — the receptionist and rule checker. It decides which requests may proceed.
5. **Evidence worker** — the protective workshop that opens risky files away from the main app.
6. **PCE** — the calculator room. Its default answer is “no” unless an approved method profile says
   exactly what calculation is allowed.

Separating these pieces is like keeping the public lobby, records room, laboratory, and visitor room
behind different doors. A mistake in one room should not unlock all the others.

## What “greenfield” means

We are not copying an old house and repainting it. We are using the old inspection reports to design
a new house. Useful ideas and tests may enter through the migration ledger. Old source files, Git
history, formulas, thresholds, secrets, and generated evidence do not.

## Your first setup commands

Open PowerShell in this folder and run:

```powershell
Copy-Item .env.example .env
npm install
python -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install -e "apps/pce-service[dev]"
docker compose up -d postgres minio
npm run verify
```

What they mean:

- Command 1 creates local settings from a safe example.
- Command 2 downloads the JavaScript tools listed in `package.json`.
- Commands 3 and 4 create and enter a private Python toolbox for this repository.
- Command 5 installs the PCE refusal service and its tests into that private toolbox.
- Command 6 starts a local database and pretend object vault.
- Command 7 checks formatting, types, tests, prompts, boundaries, and PCE refusals.

## What not to do

- Do not put passwords, private keys, customer files, or real cargo evidence in Git.
- Do not copy a formula from an old repository.
- Do not describe AI output as a fact until a human has reviewed it.
- Do not let the portal query the private workspace database.
- Do not sign or publish a package if a required check failed.
- Do not say CargoVue is accredited because a laboratory or inspector is accredited.

## How a feature gets built

Every feature follows the same small loop:

1. Describe the user problem.
2. Name the trust boundary it touches.
3. Write acceptance and refusal tests.
4. Make the smallest implementation.
5. Review the result with synthetic data.
6. Record any permanent decision in an ADR.

If you get lost, return to `docs/PRODUCT_CHARTER.md`: it is the answer to “why are we building
this?”
