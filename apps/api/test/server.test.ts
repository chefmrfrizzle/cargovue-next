import { afterEach, describe, expect, it } from "vitest";

import { buildServer } from "../src/server.js";

const servers: ReturnType<typeof buildServer>[] = [];

afterEach(async () => {
  await Promise.all(servers.splice(0).map((server) => server.close()));
});

describe("foundation API", () => {
  it("reports synthetic-only status", async () => {
    const server = buildServer();
    servers.push(server);
    const response = await server.inject({ method: "GET", url: "/health" });
    expect(response.statusCode).toBe(200);
    expect(response.json()).toMatchObject({ productionDataAllowed: false, status: "ok" });
  });

  it("makes disabled capabilities explicit", async () => {
    const server = buildServer();
    servers.push(server);
    const response = await server.inject({ method: "GET", url: "/v1/foundation/boundaries" });
    expect(response.json().disabledCapabilities).toContain("release-signing");
    expect(response.json().disabledCapabilities).toContain("scientific-calculation");
  });
});
