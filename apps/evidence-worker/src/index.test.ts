import { describe, expect, it } from "vitest";

import { inspectFoundationJob } from "./index.js";

describe("evidence worker foundation", () => {
  it("refuses a job without an immutable object version", () => {
    expect(inspectFoundationJob({ contractVersion: "1.0", jobId: "job:test" })).toMatchObject({
      status: "refused",
      reasonCode: "MISSING_IMMUTABLE_OBJECT_VERSION",
    });
  });

  it("does not pretend local infrastructure is connected", () => {
    expect(
      inspectFoundationJob({
        contractVersion: "1.0",
        jobId: "job:test",
        quarantineObjectVersionId: "synthetic-version",
      }),
    ).toMatchObject({ status: "refused", reasonCode: "WORKER_NOT_CONNECTED" });
  });
});
