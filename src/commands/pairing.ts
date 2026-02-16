// XAIO pairing — src/commands/pairing.ts
import chalk from 'chalk';
const L = chalk.red('⚡');

export async function approvePairing(channel: string, code: string) { console.log(`${L} Approving pairing: ${channel} / ${code}`); }
export async function listPairings() { console.log(`${L} No pending pairing requests.`); }
