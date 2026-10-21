# Fakto demo

Keep docs, code, a website and decks in line with the facts they state. One record per fact,
every line that states it points back at it, and when it changes Claude rewrites every
dependent while a live map shows it happening.

| Folder | What it is |
|---|---|
| [`demo/`](demo/README.md) | Tostr, the first smart toaster: a complete example to play with |
| [`boilerplate/`](boilerplate/README.md) | an empty starter for your own facts |

## Try it

Needs Node 20+ and [Claude Code](https://claude.com/claude-code).

```bash
git clone https://github.com/filrak/fakto-demo-aitechleaders && cd fakto-demo-aitechleaders/demo
npm install
claude
```

Claude starts the canvas and tells you where it runs (usually http://localhost:4848). Then
ask it things like "browning levels are 9 now, propagate", or work through
[`demo/scenarios`](demo/scenarios/README.md).

## For agents

Each folder is a self-contained Fakto project with its own `CLAUDE.md`, skills
(`.claude/skills/fakto` for changes, `.claude/skills/fakto-canvas` for the live map) and
an "For agents" section in its README. Work from inside the folder.
