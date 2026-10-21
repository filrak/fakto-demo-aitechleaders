# Scenario 6 — feed an article in, resolve the conflicts in chat

**Story.** The founders wrote an article (`06-article.md`) with new messaging and new numbers.
Some of it is new, some of it contradicts what the company has on record, and some of it
breaks a wording rule. Claude reads it against the facts, sorts it, and asks. You rule in one
message. Claude updates the records, propagates, and files the article as a living material.

What the article contains, so you know what a good answer looks like:

| In the article | Against the facts | Kind |
|---|---|---|
| "Appliances should have opinions" | no story says this | new narrative |
| ships to 14 countries | no fact | new fact |
| Nonna joins in December | no fact | new fact, not live yet |
| a full cycle takes 75 seconds | `cycle-seconds` says 90 | conflict: which is true? |
| passed 15,000 pre-orders | `preorders` says 12,000 | conflict: newer number? |
| ships with four personalities | `personalities-count` says 3 | conflict: Nonna is not out yet |
| "the world's first intelligent toaster" | `product-claim-first` is "the first smart toaster", never "the first toaster" | wording rule |
| $129, $4.99, 7 levels, Hey Tostr, POST /v1/toast, 2025 | match | nothing to do |

## Steps

1. In Claude Code, in this repo:
   > Here is an article we wrote: scenarios/06-article.md. Read it against our facts. Tell me
   > what is new, what conflicts with what we have, and what breaks a wording rule. Don't change
   > anything yet.

   Claude answers with three lists (new, conflicts, wording) and a question per conflict.

2. Rule in one message:
   > 75 seconds is right, hardware confirmed it. Pre-orders are 15,000 now. Keep 3 personalities
   > until Nonna ships, and add Nonna as a draft. 14 countries is live. The opinions story is
   > live. In the article use "the first smart toaster". Then add the article to marketing/ as a
   > living file with anchors, and propagate everything.

3. Watch it land in the canvas: `cycle-seconds` and `preorders` change and their files go
   through Needs update to Up to date; two new facts and a new story appear; Nonna is a dashed
   draft; the article joins the marketing column. `npm run check` is green.

## What to say

"This is the part nobody automates: someone writes something new, and it quietly disagrees with
the deck, the docs and the website. Here the article is read against the record. New things
become facts, contradictions become questions, and a human answers them once. Then everything
follows, including the article itself."

Reference run: `06-reference-run.md` (both turns, as Claude answered them).
