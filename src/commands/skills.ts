// XAIO skills — src/commands/skills.ts
import chalk from 'chalk';
const L = chalk.red('⚡');

export async function listSkills() { console.log(`${L} Installed skills: (none)`); console.log(chalk.dim("  Install with: xaio skills install <name>")); }
export async function installSkill(name: string) { console.log(`${L} Installing skill: ${chalk.bold(name)}...`); }
