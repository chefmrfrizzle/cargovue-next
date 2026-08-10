# Repository charter

## Purpose

This repository is the only place where the new CargoVue product is built. It starts with a clean Git
history and accepts lessons from older work only through the migration ledger.

## What belongs here

- source code for the public, workspace, portal, API, evidence worker, PCE boundary, and verifier;
- small versioned contracts and deterministic domain algorithms;
- synthetic fixtures small enough for code review;
- tests, documentation, decision records, prompts, and infrastructure-as-code;
- evidence that a build artifact came from reviewed source.

## What belongs elsewhere

- generated LNG corpora and benchmark outputs;
- licensed standards documents;
- customer or counterpart evidence;
- production secrets and private/signing keys;
- operational database exports and logs;
- old repositories and their Git histories;
- legal, insurance, metrology, or accreditation working papers that lack redistribution rights.

## Ownership

Before production work, replace placeholder CODEOWNERS with named GitHub teams for:

- product/domain;
- application/security;
- evidence custody;
- methodology/PCE;
- release/signing;
- cloud/operations.

No person approves their own production release or PCE method activation alone.

## Main-branch rules

- private repository;
- no direct pushes;
- at least one approving owner, with additional specialist owner for security/PCE/release changes;
- CI, CodeQL, dependency review, secret scanning, and conversation resolution required;
- linear or merge-commit policy selected once and applied consistently;
- signed release tags and artifact provenance;
- emergency bypass restricted, time-bounded, alerted, and reviewed afterward.

## Versioning

- product packages use semantic versions;
- external contracts version independently and reject unsupported versions;
- method profiles version independently from PCE service code;
- prompts/models are immutable identifiers after use in a reviewed proposal;
- a historical release always references the versions that produced it.

## Definition of trustworthy progress

A feature is not “done” because the screen appears. It is done when its contract, success case,
refusal cases, cross-boundary tests, audit behavior, privacy behavior, documentation, and recovery
effects are understood and verified.

## Foundation exit criteria

- all files listed in the root repository map exist;
- `npm run verify` passes on a clean checkout;
- no legacy application source or old Git history is present;
- no secret or real evidence is present;
- current GitHub owners and production account decisions are documented before deployment;
- the repository still refuses production evidence, release signing, and scientific calculations.
