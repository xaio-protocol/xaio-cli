// XAIO update — src/commands/update.ts
import chalk from 'chalk';
const L = chalk.red('⚡');

export async function update(opts: any) { console.log(`${L} Checking for updates (${opts.channel})...`); console.log(chalk.dim("  npm update -g xaio")); }
