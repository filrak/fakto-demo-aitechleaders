# Company facts, kept in line by Fakto

This repo holds your facts (prices, limits, names, versions, the stories you tell) and the
files that state them. When a fact changes, Fakto finds every line that cites it and Claude
rewrites them, while a live map in your browser shows it happening.

## Start

```bash
git clone <this repo> && cd <it>
npm install
claude                 # Claude Code, in this folder
```

Claude starts the canvas on its own (the `fakto-canvas` skill) and tells you the address,
usually http://localhost:4848. Keep it open next to the terminal.

1. Put your files in `website/`, `docs/` and `marketing/` (any text format: md, html, yaml,
   ts…). Change the folders in `fakto.config.json` if yours differ.
2. Ask Claude: "find the facts in these files". It proposes the facts stated in more than one
   place as drafts and anchors the lines. Make the ones you agree with live (in the canvas or
   by asking).
3. Edit `house-rules.md` so rewrites sound like you.
4. From now on, change a fact (in the canvas, or ask Claude) and let it propagate.

## For agents

How this repo works, in the order you need it.

**The pieces.**

| Path | What it is |
|---|---|
| `facts/*.yaml` | the truth: one record per fact, grouped by topic |
| `website/`, `docs/`, `marketing/` | materials: every line that states a fact carries `fact:<id>` |
| `fakto.config.json` | which folders are facts and materials; `houseRules`; `renders` |
| `house-rules.md` | voice and wording rules; read before rewriting anything |
| `.claude/skills/fakto` | the propagate workflow (cases A to F); use it for every change |
| `.claude/skills/fakto-canvas` | starts the live map; use it at the start of every session |

**A fact record.**

```yaml
- id: plan-pro-price            # kebab-case, unique
  value: "$49"                  # the exact text every citing line must contain
  statement: "The Pro plan costs $49 a month."
  status: live                  # live | draft | retired
  updated: 2026-01-01           # bump whenever value or statement changes
```

**An anchored file.** `reviewed: YYYY-MM-DD` in the first 12 lines; `fact:<id>` in a comment
on each line that states a fact (`<!-- fact:id -->`, `// fact:id`, `# fact:id`).
`lifecycle: snapshot` freezes a file; `fact:id@date` cites a past value.

**Commands.**

```bash
npx fakto check           # the gate: 0 errors or you are not done
npx fakto stale           # files a fact change left behind, with the exact lines
npx fakto show <id|file>  # one fact and every line that cites it, or what a file draws on
npx fakto graph           # the whole map
npx fakto touch <file>    # stamp a file as reviewed after you rewrote it
npx fakto sync            # facts and docs that follow a source file
npx fakto canvas          # the live map (the fakto-canvas skill runs this)
```

**The loop for any change.** Change the record, bump `updated`, `npx fakto stale`, rewrite
each listed line in that file's own voice, `npx fakto touch` the files, `npx fakto check`
green. The `fakto` skill has the details and the edge cases (retiring, new facts, stories,
source files).

**Never.** State a number or claim with no record. Edit a snapshot. Edit a fenced example
by hand. Leave the check red.

## CI

`.github/workflows/fakto.yml` fails a pull request when any line contradicts its fact.
