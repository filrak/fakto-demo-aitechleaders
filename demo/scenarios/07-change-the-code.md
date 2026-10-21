# Scenario 7 — the code changes, the words follow

**Story.** The platform team raises the API limit from 10 to 12 requests per minute. They
change one constant in `sdk/src/config.ts` and commit; they do not open the docs, the SDK
README or the OpenAPI file. Here the code is the source of truth for that number, so Fakto
notices the fact is behind its code, and one Sync brings the fact, and everything that cites
it, along.

## Steps

1. Change the code, outside the canvas (an editor, or the terminal):
   ```bash
   sed -i '' 's/MAX_REQUESTS_PER_MINUTE = 10;/MAX_REQUESTS_PER_MINUTE = 12;/' sdk/src/config.ts
   ```
2. The canvas reacts on its own: `api-rate-limit` gets a Needs update badge, the Needs update
   chip counts it, and a **Sync all** pill appears in the top bar. Click the fact: "Derived from
   sdk/src/config.ts", Source changed, and the new line. There is no Edit button: you change
   this fact by changing the code. Click the file link: config.ts "Feeds" two facts.
3. Press **Sync all**. Claude reads the new line, moves the fact from 10 to 12, then rewrites
   the three files that state it: the OpenAPI description, the SDK README, the API reference.
4. Green banner. `git diff` shows code, fact and docs moving together.

CLI version of the same: `npx fakto check` (the fact is behind its source), `npx fakto sync`
(what needs judgment), then say "sync" in Claude Code.

## What to say

"So far the facts were the truth and the code followed. Often it is the other way round: the
code is right and the docs are late. Mark the code as the source, and a commit is enough. The
fact follows the code, and the docs follow the fact."

Reference run (2026-10-21, a real Sync all on a copy): passed in one pass, and
`07-reference.patch` is the resulting diff, code change included. Fallback if the live run
misbehaves: on a clean tree, `git apply scenarios/07-reference.patch`, then `npx fakto check`.
