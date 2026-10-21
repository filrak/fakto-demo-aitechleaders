# Scenario 5 — a new material, built from the facts

**Story.** An electronics chain wants a one-page spec sheet before it lists Tostr. Nobody
copies numbers out of old decks: Claude writes the sheet from the fact records, anchors
every line that states one, and stamps it. From that moment the sheet is on the map like
everything else, so the next fact change updates it too.

## Steps

1. In Claude Code, in this repo:
   > Write a one-page retail spec sheet for Tostr at marketing/retail-sheet.md, for buyers at
   > electronics retailers. Use only what the fact records say: price, hardware, the
   > personalities, the plans, the warranty, the tagline. Anchor every line that states a
   > fact and give the file a reviewed stamp. If you want to say something no fact backs,
   > list it for me instead of writing it. Finish with `npx fakto check` green.

2. Show what landed:
   ```bash
   npm run show marketing/retail-sheet.md   # every fact it cites
   npm run check                            # green
   ```
   In the canvas the sheet appears under marketing with its links already drawn.

3. Prove it is alive: in the canvas, edit `warranty-years` from 2 to 3. The sheet lights up
   with the website, the docs and the box copy. Press Save and watch it update with them.
   (Skip this beat if time is short; scenario 1 already shows a propagation.)

## What to say

"A new document usually starts as a copy of an old one, and inherits its mistakes. Here it
starts from the facts, and the moment it exists it is wired in: change the warranty, and the
sheet you just made changes with everything else."

Reference run: `05-reference-run.md`. If the live run misbehaves, copy the sheet from there
into `marketing/retail-sheet.md` and run `npx fakto check`.
