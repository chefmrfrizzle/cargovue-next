"""Method authorization boundary. No scientific method ships in Gate 0."""

from __future__ import annotations

from dataclasses import dataclass
from typing import Literal, Mapping


@dataclass(frozen=True)
class EvaluationRequest:
    request_id: str
    method_profile_id: str
    method_profile_version: str
    expected_implementation_sha256: str
    inputs: Mapping[str, str]


@dataclass(frozen=True)
class MethodProfile:
    profile_id: str
    version: str
    status: Literal["draft", "active", "suspended", "retired"]
    implementation_sha256: str


def _refusal(request_id: str, reason_code: str, message: str) -> dict[str, str]:
    return {
        "contractVersion": "1.0",
        "requestId": request_id,
        "status": "refused",
        "reasonCode": reason_code,
        "message": message,
    }


def evaluate_request(
    request: EvaluationRequest,
    profiles: Mapping[str, MethodProfile],
) -> dict[str, str]:
    """Authorize a request or refuse it.

    Gate 0 contains no calculation implementations, so even an active placeholder profile is
    refused after authorization checks. Adding execution requires a separately reviewed ADR,
    licensed method source, implementation, and independent validation receipt.
    """

    profile = profiles.get(request.method_profile_id)
    if profile is None:
        return _refusal(request.request_id, "UNKNOWN_METHOD_PROFILE", "Method profile is unknown.")
    if profile.version != request.method_profile_version:
        return _refusal(
            request.request_id,
            "PROFILE_VERSION_MISMATCH",
            "Requested method profile version does not match the registry.",
        )
    if profile.status != "active":
        return _refusal(
            request.request_id,
            "INACTIVE_METHOD_PROFILE",
            f"Method profile status is {profile.status}.",
        )
    if profile.implementation_sha256 != request.expected_implementation_sha256:
        return _refusal(
            request.request_id,
            "IMPLEMENTATION_DIGEST_MISMATCH",
            "Implementation digest does not match the active profile.",
        )
    return _refusal(
        request.request_id,
        "MISSING_AUTHORIZATION",
        "Gate 0 contains no scientifically authorized calculation implementation.",
    )
