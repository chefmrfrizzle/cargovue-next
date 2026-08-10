import { describe, expect, it } from "vitest";

import { canTransitionRelease, requireReleaseTransition } from "./index.js";

describe("release state machine", () => {
  it("allows review-ready to freeze", () => {
    expect(canTransitionRelease("review-ready", "frozen")).toBe(true);
  });

  it("refuses signing a draft", () => {
    expect(() => requireReleaseTransition("draft", "signed")).toThrow(
      "RELEASE_TRANSITION_REFUSED:draft->signed",
    );
  });

  it("never reopens a revoked release", () => {
    expect(canTransitionRelease("revoked", "draft")).toBe(false);
  });
});
