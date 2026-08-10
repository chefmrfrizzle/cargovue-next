$ErrorActionPreference = "Stop"

Write-Host "Preparing CargoVue Next local development..."

if (-not (Test-Path -LiteralPath ".env")) {
    Copy-Item -LiteralPath ".env.example" -Destination ".env"
    Write-Host "Created .env from safe local examples."
}

npm install
if (-not (Test-Path -LiteralPath ".venv")) {
    python -m venv .venv
}
$env:Path = "$(Resolve-Path '.venv\Scripts');$env:Path"
python -m pip install -e "apps/pce-service[dev]"
docker compose up -d postgres minio
npm run verify

Write-Host "Foundation ready. Run npm run dev:public or npm run dev:workspace."
