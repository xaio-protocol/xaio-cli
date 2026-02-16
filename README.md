# ⚡ XAIO — Personal AI Assistant powered by Grok

**XAIO** is a personal AI assistant you run on your own devices. Powered by **Grok** (xAI). Connect it to WhatsApp, Telegram, Discord, Slack, Signal, and more.

```
  ╔══════════════════════════════════════╗
  ║  ⚡  XAIO — Personal AI Assistant   ║
  ║     Powered by Grok · $XAIO         ║
  ╚══════════════════════════════════════╝
```

## Quick Install

```bash
npm install -g xaio
npx xaio onboard
```

**Requirements:** Node ≥ 22, Grok API key from [console.x.ai](https://console.x.ai)

## Quick Start

```bash
xaio onboard --install-daemon   # Setup wizard
xaio gateway                    # Start control plane
xaio agent -m "Hello ⚡"       # Talk to Grok
xaio channels login whatsapp    # Connect WhatsApp
xaio doctor                     # Health check
```

## Architecture

```
WhatsApp / Telegram / Discord / Slack / Signal / WebChat
               │
               ▼
┌───────────────────────────────┐
│         XAIO Gateway          │
│       (control plane)         │
│     ws://127.0.0.1:18789      │
└──────────────┬────────────────┘
               │
               ├─ Grok API (xAI)
               ├─ CLI (xaio …)
               ├─ WebChat UI
               └─ Device nodes
```

## Commands

| Command | Description |
|---------|-------------|
| `xaio onboard` | Interactive setup wizard |
| `xaio gateway` | Start the gateway |
| `xaio agent -m "..."` | Talk to XAIO |
| `xaio channels login <ch>` | Connect a channel |
| `xaio config --set key=val` | Edit config |
| `xaio doctor` | Diagnose issues |
| `xaio skills list` | List skills |
| `xaio update` | Update XAIO |

## Models

| Model | Best For |
|-------|----------|
| `grok-3` | Best reasoning (default) |
| `grok-3-mini` | Fast, lightweight |
| `grok-2` | Legacy, stable |

## Configuration

Config at `~/.xaio/xaio.json`:

```json
{
  "agent": { "model": "grok-3" },
  "gateway": { "port": 18789 },
  "grok": { "apiKey": "xai-YOUR-KEY" },
  "channels": {
    "whatsapp": { "enabled": true },
    "telegram": { "botToken": "123:ABC" },
    "discord": { "token": "bot-token" },
    "webchat": { "enabled": true }
  }
}
```

## Ecosystem

- **[xaio](https://github.com/xaio-protocol/xaio)** — CLI + Gateway
- **[XaioHub](https://github.com/xaio-protocol/xaio-hub)** — Skill registry
- **[nix-xaio](https://github.com/xaio-protocol/nix-xaio)** — Nix flake

## $XAIO

**$XAIO** — 1B total supply on Solana

Contract: [`4qHkV14MAqHqM5eEX9YzeTNhdGnzDeWQYj8kXpQUxaio`](https://solscan.io/token/4qHkV14MAqHqM5eEX9YzeTNhdGnzDeWQYj8kXpQUxaio)

---

Built with ⚡ by the XAIO community · [xaio.sh](https://xaio.sh)
