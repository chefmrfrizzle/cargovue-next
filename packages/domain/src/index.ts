export const releaseStates = [
  "draft",
  "review-ready",
  "frozen",
  "approved",
  "signed",
  "published",
  "revoked",
] as const;

export type ReleaseState = (typeof releaseStates)[number];

const transitions: Readonly<Record<ReleaseState, readonly ReleaseState[]>> = {
  draft: ["review-ready"],
  "review-ready": ["draft", "frozen"],
  frozen: ["draft", "approved"],
  approved: ["draft", "signed"],
  signed: ["published"],
  published: ["revoked"],
  revoked: [],
};

export function canTransitionRelease(from: ReleaseState, to: ReleaseState): boolean {
  return transitions[from].includes(to);
}

export function requireReleaseTransition(from: ReleaseState, to: ReleaseState): void {
  if (!canTransitionRelease(from, to)) {
    throw new Error(`RELEASE_TRANSITION_REFUSED:${from}->${to}`);
  }
}
