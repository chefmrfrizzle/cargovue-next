$ErrorActionPreference = "Stop"

$nodeMajor = [int]((node --version).TrimStart("v").Split(".")[0])
if ($nodeMajor -ne 24) {
    throw "Node 24 is required; found $(node --version)."
}

node --version
npm --version
python --version
git --version
docker --version
