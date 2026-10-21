# Scenario 4 — reference run (headless Claude Code, 2026-10-21)

Prompt: "Marketing reworded the narrative story-platform in facts/story.yaml; I already changed the record. It now says: Tostr is the breakfast API: developers build on it the way they build on payments or maps. Propagate autonomously: apply every edit without asking, stamp the files with npx fakto touch, run npx fakto render, and finish with npx fakto check green. Use the fakto skill."

Setup: a copy of this example with the homepage and both decks reviewed the day before the change.

Result: the story retold in three voices, the slides rebuilt, `fakto check` green. The homepage line became "Tostr is the breakfast API. Build on it the way you build on payments or maps." Both decks retitled their platform slide "The breakfast API". The consistency pass also realigned an investor-deck line with the "first smart toaster" story, and Claude flagged two numbers that no fact records ("since 1920", "a hundred years") instead of guessing.

`04-reference.patch` holds the record change, the rewritten lines and the rebuilt slides. After `patch -p1 < scenarios/04-reference.patch`, run `npx fakto touch website/index.html pitch/investor-deck.md marketing/sales-deck.md` to stamp them for the demo day.

## What the agent reported

The new platform story is now on all three places that tell it. `npx fakto check` reports **0 errors, 0 warnings**.

**Story-platform edits**
- **`website/index.html:44`**: "Your calendar can start your toast. So can Slack. So can anything." → "Tostr is the breakfast API. Build on it the way you build on payments or maps."
- **`pitch/investor-deck.md`**, Slide 4:
  - Title: "A platform, not an appliance" → "The breakfast API".
  - Line 27: "so calendars, smart homes and alarm clocks can make breakfast." → "so breakfast becomes something they build on, the way they build on payments or maps."
- **`marketing/sales-deck.md`**, Slide 5:
  - Title: "A platform, not an appliance" → "The breakfast API".
  - New speaker note: "Frame it like payments or maps: developers build on Tostr, they don't just plug it in."

**One fix from the consistency check**
- **`pitch/investor-deck.md:13`**: "Breakfast is the last room in the house without software." → "The toaster is the last appliance in the kitchen without software." The `story-first-smart-toaster` record (also dated 2026-10-21) says the toaster is the last appliance in the kitchen, and the old line said something different.

**Other sections I checked and left alone**
- The other story sections still match their records.
- The investor deck also showed as out of date for eight business facts (price, margin, pre-orders and so on). All eight lines already state the current numbers, so they needed no change.

I stamped the three files with `npx fakto touch` and rebuilt `out/investor-deck.html` with `npx fakto render`. Nothing is committed.

**Left for marketing to decide:** two story lines contain numbers that have no fact record, so the check never looks at them. One is "since 1920" in the sales deck (line 13); the other is "a hundred years" in the investor deck (line 14). I didn't change them. Either add facts for them or drop the numbers.
