// XAIO doctor — src/commands/doctor.ts
import chalk from 'chalk';
const L = chalk.red('⚡');

import { existsSync } from "fs";
import { CONFIG_PATH, XAIO_DIR, loadConfig } from "../config.js";
export async function doctor() { console.log(`${L} XAIO Doctor`); console.log(); const checks = [ ["XAIO directory", existsSync(XAIO_DIR)], ["Config file", existsSync(CONFIG_PATH)], ["Node >= 22", parseInt(process.versions.node) >= 22], ["Grok API key", !!loadConfig().grok?.apiKey], ]; for (const [name, ok] of checks) { console.log(`  ${ok ? chalk.green("✓") : chalk.red("✗")} ${name}`); } console.log(); }
