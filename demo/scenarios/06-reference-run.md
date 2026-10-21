# Scenario 6 — reference run (headless Claude Code, 2026-10-21)

Both turns, typed as in `06-ingest-article.md`, as one resumed session on a fresh copy of this
example. Turn 1 changed no files. Turn 2 ended with `fakto check` at 0 errors and one warning:
the article cites the draft fact `personality-nonna`, on purpose (it pre-announces her).
`06-reference.patch` holds every change from turn 2; `patch -p1 < scenarios/06-reference.patch` is
the fallback.

## Turn 1: what is new, what conflicts

I read the article against all six fact files. No house rules file is configured, so the only wording rule is the one in the fact record itself.

**New (nothing on record yet)**

- **"Appliances should have opinions"** is a new narrative. No story in `facts/story.yaml` tells it. It would need a story record before the article can be anchored.
- **Ships to 14 countries** is a new fact. Nothing in the company or product facts mentions countries.
- **Nonna joins in December** is a new fact that is not live yet. There is no Nonna personality record. It would enter as a draft, and drafts may not appear in living artifacts until they go live.

**Conflicts with the record**

- **Cycle time.** The article says a full cycle at level 4 takes 75 seconds. The fact `cycle-seconds` says 90, measured on white bread at room temperature. Question: has hardware confirmed 75, or is the article ahead of the measurement?
- **Pre-orders.** The article says 15,000. The fact `preorders` says 12,000, updated today, paid deposits only. Question: is 15,000 the new paid-deposit count, or does it include waitlist sign-ups?
- **Personality count.** The article says Tostr "now ships with four personalities." The fact `personalities-count` says 3, and the article itself says Nonna arrives in December. Question: keep 3 until Nonna ships, or is she shipping now?

**Breaks a wording rule**

- **"The world's first intelligent toaster"** on line 9. The fact `product-claim-first` fixes the claim as "the first smart toaster," and its note says it is defensible only as the first toaster with a conversational interface and public API, never "the first toaster." The article's phrasing swaps the adjective and adds "world's," so the drift check would not match it and the claim overreaches.

**Matches, nothing to do**

The device price of $129, Personality Pack at $4.99 a month, 7 browning levels, "Hey Tostr," the endpoint `POST /v1/toast`, the 2025 founding year, and the three named personalities with their characters all agree with the facts. The "answers back in the personality you picked" and "your calendar can start breakfast" lines match the existing breakfast-talks-back and platform stories and can be anchored to them when the article is filed.

Nothing has been changed. Once you rule on the three conflicts and say whether the new items go live or draft, I can update the records, anchor the article in `marketing/`, and propagate.

## Turn 2: after the rulings

Done. The check prints 0 errors with one deliberate warning.

**Fact records changed**

- `cycle-seconds` is now 75 and updated today. The note records that it was 90 and hardware confirmed the new figure.
- `preorders` is now 15,000.
- `countries-shipped` is a new live fact with value 14.
- `personality-nonna` is a new draft fact in the product file, with a note to flip it live and bump the personality count to 4 when she ships.
- `story-appliances-have-opinions` is a new live narrative in the story file, resting on the personality facts.

**Artifacts propagated** (7 drifting lines, all now cite the new values and are stamped reviewed today)

- `website/index.html`, `docs/getting-started.md`, `docs/api-reference.md`, `sdk/src/config.ts`, `pitch/investor-deck.md`, and `marketing/sales-deck.md` each moved from 90 to 75 seconds.
- The investor deck's traction slide now says 15,000 pre-orders and adds a line for the 14 countries.
- The changelog gained a dated entry on top for the cycle time and the pre-order and country numbers. The old 90-second mention in that entry is an as-of citation, so it stays history.
- The launch post is a frozen snapshot and was left alone, as the rules require.
- The investor deck slides in `out/` were rebuilt with the render command.

**The article** is filed as `marketing/opinions-article.md`, a living file with anchors on every factual line. Three lines changed from the draft you gave me. The claim now reads "the first smart toaster." The personality paragraph says Tostr ships with 3 personalities today and that Nonna joins in December. Everything else is the original text.

**The one warning** is the article's Nonna line citing a draft fact. That is the checker doing its job: the article pre-announces something not shipped yet. It will clear on its own when you set Nonna to live. If you would rather the article not mention her until then, delete that sentence and the warning goes away.
