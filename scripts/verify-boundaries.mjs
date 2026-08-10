import { readdir, readFile, stat } from "node:fs/promises";
import { extname, join, relative } from "node:path";
import process from "node:process";
import { fileURLToPath, URL } from "node:url";

const root = join(fileURLToPath(new URL("..", import.meta.url)));
const requiredFiles = [
  "AGENTS.md",
  "START_HERE.md",
  "docs/PRODUCT_CHARTER.md",
  "docs/REPOSITORY_CHARTER.md",
  "docs/ARCHITECTURE.md",
  "docs/MIGRATION_LEDGER.md",
  "docs/SECURITY_MODEL.md",
  "docs/METHOD_GOVERNANCE.md",
  "docs/prompts/01-REPOSITORY-STEWARD.md",
  "docs/prompts/08-MIGRATION-REVIEW.md",
];

const forbiddenExtensions = new Set([".key", ".p12", ".pfx", ".pem"]);
const forbiddenSourceMarkers = [
  "C:\\G\\LNG",
  "C:\\Bogdanoff\\pce_complete",
  "C:\\Gas\\cargovue-workspace",
  "C:\\lngdocs",
];
const sourceRoots = ["apps", "packages"];
const ignoredDirectories = new Set([".git", ".next", ".venv", "dist", "node_modules"]);

async function walk(directory) {
  const paths = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (ignoredDirectories.has(entry.name)) continue;
    const fullPath = join(directory, entry.name);
    if (entry.isDirectory()) paths.push(...(await walk(fullPath)));
    else paths.push(fullPath);
  }
  return paths;
}

const failures = [];

for (const required of requiredFiles) {
  try {
    await stat(join(root, required));
  } catch {
    failures.push(`MISSING_REQUIRED_FILE:${required}`);
  }
}

const allFiles = await walk(root);
for (const file of allFiles) {
  const repositoryPath = relative(root, file).replaceAll("\\", "/");
  const extension = extname(file).toLowerCase();
  if (forbiddenExtensions.has(extension)) failures.push(`FORBIDDEN_KEY_MATERIAL:${repositoryPath}`);
  if (repositoryPath === ".env" || repositoryPath.startsWith("evidence/")) {
    failures.push(`FORBIDDEN_LOCAL_DATA:${repositoryPath}`);
  }
}

for (const sourceRoot of sourceRoots) {
  for (const file of await walk(join(root, sourceRoot))) {
    if (!new Set([".js", ".jsx", ".mjs", ".py", ".ts", ".tsx"]).has(extname(file))) continue;
    const content = await readFile(file, "utf8");
    for (const marker of forbiddenSourceMarkers) {
      if (content.includes(marker)) {
        failures.push(`LEGACY_PATH_IN_SOURCE:${relative(root, file)}:${marker}`);
      }
    }
  }
}

if (failures.length > 0) {
  process.stderr.write(`${failures.join("\n")}\n`);
  process.exitCode = 1;
} else {
  process.stdout.write(
    "Boundary verification passed: required governance exists and no obvious legacy/source secret material was found.\n",
  );
}
