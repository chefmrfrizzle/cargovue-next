# Prompt — release-candidate review

Review a frozen release candidate without adding new content to it.

Check:

- correct tenant, matter, candidate, and recipient grant;
- every released statement points to an immutable source version and exact locator;
- proposals have authorized human dispositions;
- material corrections and disagreements are visible;
- required gaps/discrepancies are resolved or explicitly dispositioned by policy;
- PCE outputs reference active method-profile and implementation digests;
- redactions and derivatives do not replace originals;
- retention, legal hold, malware, and authorization gates pass;
- manifest recomputation matches the frozen digest;
- package contains contract versions and verifier requirements;
- portal projection contains no draft or non-released fields.

Return `approve-for-signing-review` or `refuse`. A refusal contains machine-readable reason codes and
human-readable remediation. This prompt cannot sign, publish, or override a failed gate.
