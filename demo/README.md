# Tostr — the first smart toaster (demo repo)

A fake company used to show one idea: **when a fact changes, everything that
depends on it should follow, and most of that can be automated.**

The mechanism is [Fakto](../../README.md), installed here as the `fakto` package; it
knows nothing about toasters.
Everything else here is Tostr: a toaster you can talk to, with a personality, and a
programmable API, which gives us facts that live in five very different places at
once.

```
facts/        the truth: one YAML record per fact (price, levels, wake word, endpoint, the raise…)
              and per story (story.yaml: narratives every channel tells in its own words)
website/      landing page + pricing (HTML)    ─┐
docs/         manual, personalities, API ref    │  artifacts: every line that
sdk/          TypeScript client + OpenAPI       │  states a fact carries a
pitch/        the seed investor deck            │  fact:<id> anchor
marketing/    deck notes, box copy, changelog, a frozen launch post ─┘
out/          generated: the investor deck as slides (npx fakto render), never edited
scenarios/    the live demos
```

## Run it

```bash
git clone <this repo> && cd <it>/demo     # or wherever this folder lives
npm install
claude                                    # Claude Code, in this folder
```

Claude starts the canvas on its own (the `fakto-canvas` skill) and tells you the address,
usually http://localhost:4848. Keep it next to the terminal: it draws every fact and every
file that cites it, and every change lands there within a second. Edit a fact in the canvas
and your local Claude CLI propagates it while you watch; or ask Claude in the terminal.

Then try the scenarios in [`scenarios/`](scenarios/README.md), for example "browning levels are
9 now, propagate".

The CLI on its own:

```bash
npm run graph                 # the dependency map, both directions
npm run check                 # the gate: exit 1 on anything broken
npm run stale                 # what a fact change left out of date
npm run show browning-levels  # one fact and every line that depends on it
```

## For agents

| Path | What it is |
|---|---|
| `facts/*.yaml` | the truth: one record per fact (`id`, `value`, `statement`, `status`, `updated`); `story.yaml` holds narratives (no `value`, `supports: [ids]`) |
| `website/ docs/ sdk/ pitch/ marketing/` | materials: `fact:<id>` on every line that states a fact, `reviewed:` in the head |
| `out/` | generated from `pitch/investor-deck.md`; run `npx fakto render`, never edit |
| `.claude/skills/fakto` | the propagate workflow, cases A to F; use it for every change |
| `.claude/skills/fakto-canvas` | starts the live map; use it at the start of every session |
| `scenarios/` | demo scripts, their inputs and reference runs; not scanned |

The loop for any change: change the record (or, for a derived fact, its source file), bump
`updated`, `npx fakto stale` or `npx fakto sync`, rewrite each listed line in that file's
voice, `npx fakto touch` the files, `npx fakto render`, `npx fakto check` green. Never state
a number with no record, edit `marketing/launch-post.md` (frozen), or edit `out/`.

### When the code is the truth

Two facts follow the SDK instead of the other way round: `api-endpoint-toast` and
`api-rate-limit` take their value from `sdk/src/config.ts`. The API reference's "Start a
toast job" section describes `sdk/openapi.yaml#paths./v1/toast`, and the quick start in
the getting-started guide is a copy of `sdk/examples/quickstart.ts#quickstart`.

Change `MAX_REQUESTS_PER_MINUTE` in `config.ts`, then press **Sync all** in the canvas (or
run `npx fakto sync` and say "sync" in Claude Code): the fact follows the code, the docs,
site and deck follow the fact, and the API reference catches up with the OpenAPI file.

## The pitch (for the deck, not the engineers)

The True Robotic Revolution Has Arrived. Finally, a toaster that listens. Tostr is
the first smart toaster: say "Hey Tostr", pick a personality (Butler, Coach, or
Gremlin, who will judge your bread), and let your calendar start breakfast through
the API.
