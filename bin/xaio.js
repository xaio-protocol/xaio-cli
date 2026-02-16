#!/usr/bin/env node

// XAIO — Personal AI assistant powered by Grok
// https://xaio.sh | $XAIO

import('../dist/cli.js').catch(() => {
  // If dist doesn't exist, try tsx for dev
  import('tsx/esm').then(() => import('../src/cli.ts')).catch((e) => {
    console.error('XAIO: build first with `npm run build` or install tsx');
    process.exit(1);
  });
});
