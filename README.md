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

Each folder is a self-contained Fakto project with its own `CLAUDE.md`, its own Claude Code
skills and a "For agents" section in its README. Work from inside the folder.

The skills live in each folder's hidden `.claude/` directory, so Claude Code loads them when
you start it there. They come from the npm package `@fakto/core`: `npm install` runs
`fakto skills`, which writes them there stamped with the package version, and every session
start refreshes them. They are committed so you can read them here; never edit them by hand.

| Skill | What it does | demo | boilerplate |
|---|---|---|---|
| `fakto` | the change workflow: a fact changed, retire, add, tag, stories, sync from a source file | [SKILL.md](demo/.claude/skills/fakto/SKILL.md) | [SKILL.md](boilerplate/.claude/skills/fakto/SKILL.md) |
| `fakto-canvas` | starts the live map and tells you where it runs; used at the start of every session | [SKILL.md](demo/.claude/skills/fakto-canvas/SKILL.md) | [SKILL.md](boilerplate/.claude/skills/fakto-canvas/SKILL.md) |

Hooks in each `.claude/settings.json`: at session start Claude is told to start the canvas;
after every edit `npx fakto check` runs.
