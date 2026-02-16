// XAIO daemon — src/daemon.ts
import { platform } from 'os';
import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { execSync } from 'child_process';
import { XAIO_DIR } from './config.js';

export async function installDaemon(port: number): Promise<void> {
  const os = platform();

  if (os === 'darwin') {
    await installLaunchd(port);
  } else if (os === 'linux') {
    await installSystemd(port);
  } else {
    throw new Error(`Daemon install not supported on ${os}. Use: xaio gateway --daemon`);
  }
}

async function installLaunchd(port: number) {
  const xaioPath = execSync('which xaio || echo xaio', { encoding: 'utf-8' }).trim();
  const plistPath = join(process.env.HOME || '~', 'Library/LaunchAgents/ai.xaio.gateway.plist');

  const plist = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Label</key><string>ai.xaio.gateway</string>
  <key>ProgramArguments</key>
  <array>
    <string>${xaioPath}</string>
    <string>gateway</string>
    <string>--port</string>
    <string>${port}</string>
  </array>
  <key>RunAtLoad</key><true/>
  <key>KeepAlive</key><true/>
  <key>StandardOutPath</key><string>${XAIO_DIR}/gateway.log</string>
  <key>StandardErrorPath</key><string>${XAIO_DIR}/gateway.err.log</string>
</dict>
</plist>`;

  const dir = dirname(plistPath);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  writeFileSync(plistPath, plist);
  execSync(`launchctl load -w "${plistPath}"`);
}

async function installSystemd(port: number) {
  const xaioPath = execSync('which xaio || echo xaio', { encoding: 'utf-8' }).trim();
  const unitDir = join(process.env.HOME || '~', '.config/systemd/user');
  const unitPath = join(unitDir, 'xaio-gateway.service');

  const unit = `[Unit]
Description=XAIO Gateway
After=network.target

[Service]
ExecStart=${xaioPath} gateway --port ${port}
Restart=always
RestartSec=5

[Install]
WantedBy=default.target
`;

  if (!existsSync(unitDir)) mkdirSync(unitDir, { recursive: true });
  writeFileSync(unitPath, unit);
  execSync('systemctl --user daemon-reload');
  execSync('systemctl --user enable xaio-gateway');
  execSync('systemctl --user start xaio-gateway');
}
