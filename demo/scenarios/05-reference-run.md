# Scenario 5 — reference run (headless Claude Code, 2026-10-21)

Prompt: the one in `05-new-material.md`, typed as is, on a fresh copy of this example.

Result: `marketing/retail-sheet.md` with 15 anchored lines, `fakto check` green, nothing
invented. `05-reference.patch` holds the sheet; `patch -p1 < scenarios/05-reference.patch` is the
fallback.

## What the agent reported

Done. The sheet is at `marketing/retail-sheet.md`, stamped `reviewed: 2026-10-21`, and `npx fakto check` prints 0 errors, 0 warnings, with nothing stale.

**What the sheet contains**, each line anchored to its fact record:

- Tagline and the "first smart toaster" positioning line.
- Price: the device at $129.
- Hardware table: 7 browning levels, 2 extra-wide slots, 90-second cycle at level 4, 2-year warranty.
- Personalities: the "Hey Tostr" wake word, the count of 3, and one row each for Butler, Coach and Gremlin using the record statements' wording.
- Plans table: Free at $0 and Personality Pack at $4.99 per month, with what each includes as the records state it.
- A short warranty section repeating the 2-year term.

**Things a retail buyer will expect that no fact record backs.** I left these out rather than invent them. Add a record for any you want on the sheet:

- Dimensions, weight, and colour or finish.
- Wattage, voltage, and plug type.
- Connectivity: Wi-Fi or Bluetooth, and which phone platforms the app supports.
- Safety and compliance marks such as UL, CE, or FCC.
- SKU, UPC, case pack, carton dimensions, and country of origin.
- Wholesale price, MAP, or margin terms. The only price on record is the $129 consumer price.
- Availability or ship date.
- What is in the box.
- Whether Bagel mode is a hardware feature or app-only. The record mentions it only inside the Personality Pack line, so the sheet states it there and nowhere else.
- Which tier Coach and Gremlin belong to. The Pack record says "all personalities" and Butler's record says "Included on Free", but Coach and Gremlin have no tier of their own, so the table has no tier column.

I also left out company traction such as pre-orders and attach rate. Those have records, but they were outside the scope you listed. Say the word and I'll add them with anchors.
