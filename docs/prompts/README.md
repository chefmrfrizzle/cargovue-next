# Layered prompt system

The old approach used one enormous prompt that mixed product rules, architecture, coding tasks, and
temporary instructions. That becomes stale and contradictory.

Use this stack instead:

1. `AGENTS.md` — permanent rules and authority boundaries.
2. Product/architecture/security docs — normal sources of truth.
3. Relevant ADRs — durable decisions.
4. One small task prompt from this directory.
5. The issue/acceptance criteria for the specific job.

Prompts do not authorize science, release, accreditation, legal conclusions, or access to real data.

## Prompt selection

| Job                                | Prompt                      |
| ---------------------------------- | --------------------------- |
| Orient or govern a repository task | `01-REPOSITORY-STEWARD.md`  |
| Implement a bounded feature        | `02-FEATURE-BUILDER.md`     |
| Propose facts from evidence        | `03-EVIDENCE-EXTRACTION.md` |
| Review code/design for security    | `04-SECURITY-REVIEW.md`     |
| Review a potential PCE method      | `05-PCE-METHOD-REVIEW.md`   |
| Review a release candidate         | `06-RELEASE-REVIEW.md`      |
| Design adversarial tests           | `07-TEST-AUTHOR.md`         |
| Consider a legacy lesson           | `08-MIGRATION-REVIEW.md`    |

## Required task context

Every task should supply:

- user and problem;
- allowed files/services;
- acceptance and refusal behavior;
- data classification;
- trust boundaries;
- required tests;
- explicitly out-of-scope work.

If required context is missing and a safe assumption would materially change authority, data handling,
scientific behavior, or release behavior, stop and ask for the missing decision.
