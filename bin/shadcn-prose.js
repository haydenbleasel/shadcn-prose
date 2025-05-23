#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const COMPONENTS_JSON = path.join(process.cwd(), "components.json");
const SOURCE_CSS = path.join(__dirname, "..", "website", "app", "prose.css");

function exitWithError(msg) {
  console.error(msg);
  process.exit(1);
}

// 1. Locate components.json in the root
if (!fs.existsSync(COMPONENTS_JSON)) {
  exitWithError("components.json not found in project root!");
}

// 2. Read and parse components.json
let components;
try {
  components = JSON.parse(fs.readFileSync(COMPONENTS_JSON, "utf8"));
} catch (err) {
  exitWithError("Error parsing components.json: " + err.message);
}

// 3. Find the "tailwind" object
const tailwind = components["tailwind"];
if (!tailwind) {
  exitWithError('No "tailwind" object found in components.json!');
}

// 4. Find the css key (path to CSS file)
const cssPath = tailwind["css"];
if (!cssPath) {
  exitWithError('No "css" key found inside "tailwind" object!');
}

const resolvedCssPath = path.resolve(process.cwd(), cssPath);

if (!fs.existsSync(resolvedCssPath)) {
  exitWithError(`CSS file not found at path: ${resolvedCssPath}`);
}

// 5. Read source CSS file, remove the first line, prepend a comment
if (!fs.existsSync(SOURCE_CSS)) {
  exitWithError("Source CSS file not found: " + SOURCE_CSS);
}

let sourceCssContent = fs.readFileSync(SOURCE_CSS, "utf8");
let lines = sourceCssContent.split(/\r?\n/);

// Remove the first line as we don't need to re-import tailwind
lines.shift();

const cssToAppend = `
/* Appended by shadcn-prose */
${lines.join("\n")}
`;

// 6. Append to the destination CSS file
fs.appendFileSync(resolvedCssPath, cssToAppend, "utf8");

console.log("Successfully appended CSS to:", cssPath);
