# Scenario 2 — retire the Gremlin

**Story.** Legal has had enough of the support tickets. Gremlin is retired.
Nothing living may still offer it; history may still say it existed.

## Steps

1. In `facts/product.yaml`, set `personality-gremlin` to `status: retired`,
   bump `updated`, add a note: "Retired 2026-10: too many 'my toaster insulted me'
   tickets." Lower `personalities-count` to `"2"` and update its statement.

2. Run the gate:
   ```bash
   npm run check
   ```
   Red. Every living file that cites Gremlin is an error: landing page, pricing,
   personalities doc, API reference, the SDK enum, the OpenAPI enum, the deck,
   the changelog. The launch post is **not** listed: it is a snapshot.

3. In Claude Code:
   > Gremlin is retired, I changed the fact. Clean up everything that still offers it.

   The skill removes Gremlin from enums and tables, rewrites "3 personalities" to
   "2" where the count is anchored, keeps the old changelog entry as-is, adds a new
   dated entry on top that says `Gremlin personality RETIRED` with the anchor kept
   (a line containing `RETIRED` may cite a retired fact), and stamps the files.

4. `npm run check` is green. `npm run graph` still shows `personality-gremlin
   [retired]` pointing at the launch post and the changelog: history is intact,
   and the fact cannot quietly come back because its record still exists.

## What to say

"Retired is a status, not a deletion. The record stays so the thing can never
resurrect by accident, and the frozen post keeps telling the truth about the day
it was published."
