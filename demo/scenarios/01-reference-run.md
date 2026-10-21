# Scenario 1 — reference run (headless Claude Code, 2026-10-21)

Prompt: "Hardware ships 9 levels and a 75-second cycle; I already changed the facts in facts/hardware.yaml. Propagate autonomously: apply every edit without asking, stamp the files with npx fakto touch, run npx fakto render, and finish with npx fakto check green. Use the fakto skill."

Setup: a fresh copy of this example with the two hardware facts already changed (what Save in the canvas does).

Result: 16 lines across 10 files rewritten (both website pages, docs, SDK code and schema, both decks, box copy), the slides in `out/investor-deck.html` rebuilt, the frozen launch post untouched, `fakto check` green, in 88 seconds. `01-reference.patch` holds all of it, the fact change included: on a clean tree, `patch -p1 < scenarios/01-reference.patch` if the live demo misbehaves.

## What the agent reported

Propagation is done and the check is green.

**What changed.** Two hardware facts moved: browning levels went from 7 to 9, and the level-4 cycle went from 90 to 75 seconds. I rewrote every anchored line that stated them, 16 lines across 10 files:

- `website/index.html` and `website/pricing.html`
- `docs/getting-started.md` and `docs/api-reference.md`
- `sdk/README.md`, `sdk/openapi.yaml` (schema maximum) and `sdk/src/config.ts` (MAX_LEVEL and CYCLE_SECONDS_AT_LEVEL_4)
- `pitch/investor-deck.md`, `marketing/box-copy.md` and `marketing/sales-deck.md`

The quickstart example and its copy in the docs use level 4, which is still valid, so they were left alone. The frozen launch post was not touched.

**Housekeeping.** All ten files are stamped reviewed 2026-10-21. The touch also moved the API reference's source hash, since it draws on the edited OpenAPI section. The investor deck was re-rendered to `out/investor-deck.html`.

**Result.** `npx fakto check` reports 0 errors and 0 warnings. The canvas at http://localhost:4849 shows the updated map. Nothing is committed yet.
