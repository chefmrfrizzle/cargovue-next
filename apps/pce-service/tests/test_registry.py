from cargovue_pce.registry import EvaluationRequest, MethodProfile, evaluate_request


VALID_DIGEST = "a" * 64


def request(**changes: str) -> EvaluationRequest:
    values = {
        "request_id": "request:synthetic-1",
        "method_profile_id": "method:not-authorized",
        "method_profile_version": "1.0.0",
        "expected_implementation_sha256": VALID_DIGEST,
        "inputs": {},
    }
    values.update(changes)
    return EvaluationRequest(**values)


def test_unknown_method_is_refused() -> None:
    outcome = evaluate_request(request(), profiles={})
    assert outcome["status"] == "refused"
    assert outcome["reasonCode"] == "UNKNOWN_METHOD_PROFILE"


def test_draft_method_is_refused() -> None:
    profile = MethodProfile("method:not-authorized", "1.0.0", "draft", VALID_DIGEST)
    outcome = evaluate_request(request(), profiles={profile.profile_id: profile})
    assert outcome["reasonCode"] == "INACTIVE_METHOD_PROFILE"


def test_digest_mismatch_is_refused() -> None:
    profile = MethodProfile("method:not-authorized", "1.0.0", "active", "b" * 64)
    outcome = evaluate_request(request(), profiles={profile.profile_id: profile})
    assert outcome["reasonCode"] == "IMPLEMENTATION_DIGEST_MISMATCH"


def test_even_active_placeholder_cannot_calculate() -> None:
    profile = MethodProfile("method:not-authorized", "1.0.0", "active", VALID_DIGEST)
    outcome = evaluate_request(request(), profiles={profile.profile_id: profile})
    assert outcome["reasonCode"] == "MISSING_AUTHORIZATION"
