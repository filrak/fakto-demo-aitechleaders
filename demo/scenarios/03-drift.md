# Scenario 3 — the helpful colleague

**Story.** Someone on support edits the manual directly: "Turn the dial to a
browning level from 1 to 10." They did not touch the facts. Two truths now exist.

## Steps

1. Edit `docs/getting-started.md` by hand: change `1 to 7` to `1 to 10` on the
   anchored line. Leave the anchor.

2. Run the gate:
   ```bash
   npm run check
   ```
   One error: `docs/getting-started.md:14: drift — line does not contain "7"`.
   The script does not know who is right. It knows they disagree.

3. Two honest ways out, and the skill offers both:
   - the manual is wrong → revert the line;
   - the manual is right → change the fact, which makes everything else stale,
     and propagate (scenario 1 again).
   The one thing it refuses is leaving both.

4. If Claude Code is open with the plugin's hook enabled, step 2 happens on its
   own: the `PostToolUse` hook runs `fakto check` after every edit, so the model
   sees the drift the moment it writes the line.

## What to say

"Validation runs both ways. The fact checks the docs; the docs check the fact.
A number in a file with no record behind it is the bug, not the typo."
