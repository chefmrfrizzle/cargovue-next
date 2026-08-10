import { createHash } from "node:crypto";

type JsonPrimitive = null | boolean | number | string;
export type JsonValue = JsonPrimitive | JsonValue[] | { [key: string]: JsonValue };

function normalize(value: unknown, path: string): JsonValue {
  if (value === null || typeof value === "boolean" || typeof value === "string") {
    return value;
  }

  if (typeof value === "number") {
    if (!Number.isFinite(value)) {
      throw new TypeError(`NON_FINITE_NUMBER:${path}`);
    }
    return Object.is(value, -0) ? 0 : value;
  }

  if (Array.isArray(value)) {
    return value.map((item, index) => normalize(item, `${path}[${index}]`));
  }

  if (typeof value === "object") {
    const prototype = Object.getPrototypeOf(value);
    if (prototype !== Object.prototype && prototype !== null) {
      throw new TypeError(`NON_JSON_OBJECT:${path}`);
    }

    const input = value as Record<string, unknown>;
    const output: Record<string, JsonValue> = {};
    for (const key of Object.keys(input).sort()) {
      const child = input[key];
      if (child === undefined) {
        throw new TypeError(`UNDEFINED_VALUE:${path}.${key}`);
      }
      output[key] = normalize(child, `${path}.${key}`);
    }
    return output;
  }

  throw new TypeError(`UNSUPPORTED_JSON_VALUE:${path}`);
}

export function canonicalJson(value: unknown): string {
  return JSON.stringify(normalize(value, "$"));
}

export function sha256Hex(value: string | Uint8Array): string {
  return createHash("sha256").update(value).digest("hex");
}

export function semanticHash(value: unknown): string {
  return sha256Hex(canonicalJson(value));
}

export interface AuditLink {
  canonicalEvent: string;
  eventHash: string;
  previousHash: string | null;
}

export function appendAuditEvent(previousHash: string | null, event: unknown): AuditLink {
  if (previousHash !== null && !/^[a-f0-9]{64}$/.test(previousHash)) {
    throw new TypeError("INVALID_PREVIOUS_HASH");
  }
  const canonicalEvent = canonicalJson(event);
  const eventHash = semanticHash({ event: JSON.parse(canonicalEvent), previousHash });
  return { canonicalEvent, eventHash, previousHash };
}
