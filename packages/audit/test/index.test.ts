import { describe, expect, it } from "vitest";

import { appendAuditEvent, canonicalJson, semanticHash } from "../src/index.js";

describe("canonical JSON", () => {
  it("sorts object keys recursively", () => {
    expect(canonicalJson({ z: 1, a: { y: 2, b: 3 } })).toBe('{"a":{"b":3,"y":2},"z":1}');
  });

  it("produces the same semantic hash for different key order", () => {
    expect(semanticHash({ b: 2, a: 1 })).toBe(semanticHash({ a: 1, b: 2 }));
  });

  it("rejects values JSON would silently erase", () => {
    expect(() => canonicalJson({ missing: undefined })).toThrow("UNDEFINED_VALUE");
  });
});

describe("audit chain", () => {
  it("changes the hash when the prior chain changes", () => {
    const event = { action: "MATTER_CREATED", actorId: "user:test", tenantId: "tenant:test" };
    const first = appendAuditEvent(null, event);
    const second = appendAuditEvent(first.eventHash, event);
    expect(first.eventHash).not.toBe(second.eventHash);
    expect(second.previousHash).toBe(first.eventHash);
  });

  it("rejects malformed previous hashes", () => {
    expect(() => appendAuditEvent("not-a-hash", { action: "TEST" })).toThrow(
      "INVALID_PREVIOUS_HASH",
    );
  });
});
