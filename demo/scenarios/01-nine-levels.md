# Scenario 1 — nine levels, faster cycle

**Story.** Hardware got a better heating element. Tostr 1.1 has 9 browning levels
and a level-4 cycle of 75 seconds. Two facts change; everything that states them
must follow.

## Steps

1. Show the map first:
   ```bash
   npm run show browning-levels
   ```
   Twelve files. Point out: a constant in the SDK, an OpenAPI `maximum`, a table in
   the manual, a bullet on the box, a line on the investor deck.

2. Change the two facts in `facts/hardware.yaml`. Only the facts:
   - `browning-levels`: value `"9"`, statement "…9 browning levels, from 1 (warm bread) to 9 (charcoal)", `updated: <today>`
   - `cycle-seconds`: value `"75"`, statement "A full cycle at level 4 takes 75 seconds.", `updated: <today>`

3. Ask the script what went stale:
   ```bash
   npm run stale
   ```
   Ten living artifacts, with the exact lines. (`npm run check` is red too: the old lines no longer contain the new value. Red until propagated is the point.)

4. Let Claude do the rewriting. In Claude Code, in this repo:
   > Hardware ships 9 levels and a 75-second cycle; I already changed the facts. Propagate.

   The `fakto` skill runs `fakto stale`, drafts one edit per anchored line in that
   file's own voice (the manual stays a manual, the investor deck stays a pitch,
   the SDK constant and the OpenAPI `maximum` change together), often adds a
   changelog entry on top (turning older entries' anchors into as-of citations),
   leaves `marketing/launch-post.md` alone because it is a snapshot, applies it
   all, stamps the files with `fakto touch`.

   Reference run from 2026-10-21: `01-reference-run.md` (what the agent reported)
   and `01-reference.patch` (the full diff, facts included; run
   `patch -p1 < scenarios/01-reference.patch` here if the live demo misbehaves).

5. Prove it:
   ```bash
   npm run check
   ```
   `0 errors`, no stale warnings. `git diff --stat` shows the spread.

## Bonus beat

The same fact sits on the investor deck. The moment hardware changes, the pitch
you send on Monday already says 9 levels: nobody had to remember the deck exists. In
the canvas, open `out/investor-deck.html` from the Files tab: the slides rebuilt
themselves at the end of the run.

## What to say

"The script knew *where*. The model knew *how to say it* in each place. The human
said *yes*. Nobody grepped."
