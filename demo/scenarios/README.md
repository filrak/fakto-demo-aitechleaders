# Demo scenarios

Seven live scenarios, each under five minutes. Reset between them with
`git checkout . && git clean -fd` (the repo's first commit is the clean state).

| # | Story | What the room learns |
|---|---|---|
| 1 | Hardware ships 9 browning levels and a faster 75-second cycle | one fact edit → `fakto stale` finds 10 files across site, docs, SDK code, sales deck, investor deck, box → AI rewrites them in each file's voice → human approves → check green |
| 2 | Legal retires the Gremlin personality | `fakto check` turns red everywhere Gremlin is cited; the launch post is a snapshot and stays untouched; the changelog records the retirement with the anchor kept |
| 3 | A well-meaning colleague edits the manual by hand to say 10 levels | drift: the anchored line no longer contains the fact's value; the fix is to change the fact (and propagate) or revert, never to leave two truths |
| 4 | Marketing rewords the platform story into "the breakfast API" | a narrative has no wording to check, so `fakto stale` (not `check`) lists the homepage, investor deck and sales deck; Claude retells the story in each file's voice |
| 5 | A retailer wants a spec sheet | a new material is written from the facts, anchored and stamped, and is on the map from the moment it exists |
| 6 | The founders wrote an article with new messaging and new numbers | Claude reads it against the record: new facts, conflicts, a broken wording rule; you rule once in chat and everything follows, the article included |
| 7 | The platform team raises the API limit in code | the code is the source: the fact is behind its code, Sync all moves the fact, then the docs |

Talk flow: see `demo/DEMO-SCRIPT.md` at the repo root (map, scenario 1, 7, 5, 6; 2 to 4 as
spare beats).
