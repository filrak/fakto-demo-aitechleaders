# Scenario 4 — reword a story

**Story.** Marketing decides Tostr is not "a platform, not an appliance" any more. It is
**the breakfast API**: developers build on it the way they build on payments or maps.
That is a narrative, not a number: the homepage, the investor deck and the sales deck all
tell it, each in its own words. Change it once, and all three retell it.

## Steps

1. Show the story and where it lives:
   ```bash
   npm run show story-platform
   ```
   No value (it is worded per channel), the facts it is built on, and three files: a
   line on the homepage, a line on the investor deck, a slide title on the sales deck.
   In the canvas, click `story-platform`: the panel shows the statement, "Built on" and
   the three sections.

2. Change the record in `facts/story.yaml` (or in the canvas with Edit fact): the new
   statement, and `updated: <today>`.

3. Ask what that touched:
   ```bash
   npm run check     # 0 errors: a story has no wording to compare…
   npm run stale     # …but the three sections now need an update
   ```

4. Let Claude retell it. In Claude Code, or with Ask Claude in the canvas:
   > Marketing reworded story-platform; I already changed the record. Propagate.

   The `fakto` skill rewrites each section in its own voice: a homepage line, a pitch
   line, a slide title. It does not paste the statement. It stamps the three files.

5. `npm run check` is green, with nothing that needs an update.

Reference run (2026-10-21): `04-reference-run.md` and `04-reference.patch`. If the live
demo misbehaves, run `patch -p1 < scenarios/04-reference.patch` here, then
`npx fakto touch website/index.html pitch/investor-deck.md marketing/sales-deck.md`.

## Bonus beat

In the reference run Claude also flagged two numbers inside story lines that no fact
records ("since 1920", "a hundred years"): the script cannot check them, so it asked
instead of guessing. That is the line between what code checks and what the model reads.

## What to say

"Numbers are easy: a script can see 7 is not 9. Stories are where companies drift: the
website says one thing, the deck another. Here the story is a record too. Change it once,
and every channel retells it in its own voice."
