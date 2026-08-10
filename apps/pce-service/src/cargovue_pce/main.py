from fastapi import FastAPI
from pydantic import BaseModel, ConfigDict, Field

from .registry import EvaluationRequest, evaluate_request


class EvaluationBody(BaseModel):
    model_config = ConfigDict(extra="forbid")

    request_id: str = Field(min_length=1, max_length=160)
    method_profile_id: str = Field(min_length=1, max_length=160)
    method_profile_version: str = Field(min_length=1, max_length=64)
    expected_implementation_sha256: str = Field(pattern=r"^[a-f0-9]{64}$")
    inputs: dict[str, str]


app = FastAPI(title="CargoVue PCE", version="0.1.0")


@app.get("/health")
def health() -> dict[str, object]:
    return {"service": "cargovue-pce", "status": "ok", "activeMethodProfiles": 0}


@app.post("/v1/evaluate")
def evaluate(body: EvaluationBody) -> dict[str, str]:
    request = EvaluationRequest(
        request_id=body.request_id,
        method_profile_id=body.method_profile_id,
        method_profile_version=body.method_profile_version,
        expected_implementation_sha256=body.expected_implementation_sha256,
        inputs=body.inputs,
    )
    return evaluate_request(request, profiles={})
