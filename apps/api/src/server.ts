import Fastify, { type FastifyInstance } from "fastify";

export function buildServer(): FastifyInstance {
  const server = Fastify({
    logger: {
      redact: ["req.headers.authorization", "req.headers.cookie"],
    },
    requestIdHeader: "x-request-id",
  });

  server.get("/health", async () => ({
    service: "cargovue-api",
    status: "ok",
    productionDataAllowed: false,
  }));

  server.get("/v1/foundation/boundaries", async () => ({
    contractVersion: "1.0",
    mode: "synthetic-only",
    zones: ["public", "workspace", "api", "evidence-worker", "pce", "portal", "verifier"],
    disabledCapabilities: [
      "production-evidence-intake",
      "scientific-calculation",
      "release-signing",
    ],
  }));

  return server;
}

async function start(): Promise<void> {
  const port = Number(process.env.PORT ?? "3100");
  const server = buildServer();
  try {
    await server.listen({ host: "127.0.0.1", port });
  } catch (error) {
    server.log.error(error);
    process.exitCode = 1;
  }
}

if (process.env.NODE_ENV !== "test") {
  await start();
}
