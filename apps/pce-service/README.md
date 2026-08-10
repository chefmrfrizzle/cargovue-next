# PCE service

PCE means **Physical Calculation Engine**.

This Gate 0 service contains a real authorization/refusal boundary and zero scientific formulas. Every
request is refused unless a future active method profile passes its source, scope, version,
implementation-digest, validation, and authorization checks. Even an active placeholder is refused
because no calculation implementation has been independently authorized.

Run locally:

```powershell
python -m pip install -e ".[dev]"
uvicorn cargovue_pce.main:app --reload --port 3200
python -m pytest -q
```
