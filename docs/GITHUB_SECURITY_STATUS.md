# GitHub security status

Repository: `chefmrfrizzle/cargovue-next`  
Visibility: private  
Recorded: 2026-08-10

This page distinguishes controls that are active from controls that are merely configured in files or
planned. Update it whenever the repository moves to an organization or its plan changes.

## Active now

- clean repository and Git history created specifically for CargoVue Next;
- private visibility;
- personal bootstrap CODEOWNER `@chefmrfrizzle`;
- Actions default token permission set to read-only;
- Actions cannot approve pull requests;
- hosted CI workflow active and first run passed;
- Dependabot version updates configured;
- dependency vulnerability alerts enabled;
- automated security fixes enabled;
- squash merge only; branch deletion after merge enabled;
- CodeQL workflow present and being evaluated by GitHub;
- local/CI checks for formatting, types, unit tests, PCE refusals, and obvious legacy/secret material.

## Blocked by the current GitHub account/plan

GitHub returned HTTP 403 when enabling branch protection and required signed commits on this private
personal repository. Therefore the following are **not active**, even though the repository documents
and CODEOWNERS express the desired policy:

- required pull requests and approving review;
- enforced CODEOWNER review;
- required status checks on `main`;
- blocked force-push/deletion through branch protection;
- required signed commits.

Private vulnerability reporting returned HTTP 404 and is not confirmed active. Secret scanning and
push protection are also not confirmed active for this private personal repository.

## Required correction before collaborators or production

Move the repository into the CargoVue company GitHub organization on a plan that supports protected
private branches and the selected code/secret scanning controls. Then:

1. replace the personal CODEOWNER with named least-privilege teams;
2. protect `main` and enforce administrators;
3. require `javascript` and `pce-refusal-tests` plus approved security jobs;
4. require one approving review, stale-review dismissal, CODEOWNER review, last-push approval, and
   conversation resolution;
5. block deletion and force pushes;
6. require signed commits/tags or organization-approved artifact provenance;
7. enable private vulnerability reporting, secret scanning, push protection, CodeQL, and security
   update automation;
8. restrict Actions to approved/pinned actions and review workflow permissions;
9. record screenshots/API receipts in the institutional trust room.

Do not make the repository public merely to obtain free branch protection; its contents are intended
to remain private and proprietary.
