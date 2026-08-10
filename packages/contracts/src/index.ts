import { z } from "zod";

export const ContractVersionSchema = z.literal("1.0");

export const IdentifierSchema = z
  .string()
  .min(1)
  .max(160)
  .regex(/^[a-zA-Z0-9][a-zA-Z0-9._:-]*$/);

export const Sha256Schema = z.string().regex(/^[a-f0-9]{64}$/);

export const ExactQuantitySchema = z.strictObject({
  decimal: z.string().regex(/^-?(0|[1-9]\d*)(\.\d+)?$/),
  unit: z.string().min(1).max(64),
  basis: z.string().min(1).max(160).optional(),
  precision: z.number().int().min(0).max(30).optional(),
});

const PdfLocatorSchema = z.strictObject({
  kind: z.literal("pdf-region"),
  page: z.number().int().positive(),
  x: z.number().min(0),
  y: z.number().min(0),
  width: z.number().positive(),
  height: z.number().positive(),
});

const SpreadsheetLocatorSchema = z.strictObject({
  kind: z.literal("spreadsheet-range"),
  sheet: z.string().min(1),
  range: z.string().regex(/^[A-Z]+[1-9]\d*(:[A-Z]+[1-9]\d*)?$/),
});

const MediaLocatorSchema = z.strictObject({
  kind: z.literal("media-time-range"),
  startMilliseconds: z.number().int().min(0),
  endMilliseconds: z.number().int().positive(),
});

export const EvidenceLocatorSchema = z.discriminatedUnion("kind", [
  PdfLocatorSchema,
  SpreadsheetLocatorSchema,
  MediaLocatorSchema,
]);

export const PceRequestSchema = z.strictObject({
  contractVersion: ContractVersionSchema,
  requestId: IdentifierSchema,
  tenantId: IdentifierSchema,
  matterId: IdentifierSchema,
  methodProfileId: IdentifierSchema,
  methodProfileVersion: z.string().min(1).max(64),
  expectedImplementationSha256: Sha256Schema,
  inputs: z.record(z.string(), ExactQuantitySchema),
  requestedAt: z.string().datetime({ offset: true }),
});

const PceRefusalSchema = z.strictObject({
  contractVersion: ContractVersionSchema,
  requestId: IdentifierSchema,
  status: z.literal("refused"),
  reasonCode: z.enum([
    "UNKNOWN_METHOD_PROFILE",
    "INACTIVE_METHOD_PROFILE",
    "IMPLEMENTATION_DIGEST_MISMATCH",
    "PROFILE_VERSION_MISMATCH",
    "MISSING_AUTHORIZATION",
    "INPUT_OUT_OF_SCOPE",
  ]),
  message: z.string().min(1).max(500),
});

const PceSuccessSchema = z.strictObject({
  contractVersion: ContractVersionSchema,
  requestId: IdentifierSchema,
  status: z.literal("completed"),
  methodProfileId: IdentifierSchema,
  methodProfileVersion: z.string().min(1).max(64),
  implementationSha256: Sha256Schema,
  outputs: z.record(z.string(), ExactQuantitySchema),
});

export const PceOutcomeSchema = z.discriminatedUnion("status", [
  PceRefusalSchema,
  PceSuccessSchema,
]);

export type ExactQuantity = z.infer<typeof ExactQuantitySchema>;
export type EvidenceLocator = z.infer<typeof EvidenceLocatorSchema>;
export type PceRequest = z.infer<typeof PceRequestSchema>;
export type PceOutcome = z.infer<typeof PceOutcomeSchema>;
