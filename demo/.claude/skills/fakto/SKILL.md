---
name: fakto
description: >
  Keep every artifact (docs, code, website, decks, box copy) in sync with the facts
  it depends on. Use whenever a fact changes ("the price is now X", "we have 9 levels
  now", "retire feature Y"), whenever `fakto check` or `fakto stale` reports something,
  when adding a new fact or a new artifact, or when the user says "propagate",
  "update everything that mentions X", or "what depends on X". Also when a source file
  changed ("I changed the code, sync the docs", `fakto check` says "behind its source",
  `fakto sync`). Facts live in the facts directory named in fakto.config.json; artifacts
  carry `fact:<id>` anchors, and may draw on other files with `from:` / `example:`.
---

# fakto — keep dependents in sync

Facts are the source of truth. Artifacts cite them with an inline anchor
`fact:<id>` on the line that states the fact. The CLI finds what depends on
what; this skill does the part that needs judgment: rewriting the dependents.

Run the CLI as `npx fakto <cmd>` (the repo installs the `fakto` package).
The conventions are in the package README (`node_modules/@filrak/fakto/README.md`).
If `fakto.config.json` names `houseRules`, read that file before writing any
artifact and follow it: it is the company's voice and wording rules.

## Which case are you in?

### A. A fact changed (the common case)

1. Edit the fact record only: `value`, `statement`, and bump `updated` to today.
   Never touch an artifact first.
2. Run `npx fakto stale`. It lists every artifact whose `reviewed` date is older than
   the fact's `updated` date, with the exact lines (anchors) that cite it.
3. For each stale artifact, draft the minimal edit that makes the anchored line
   true again. Rules:
   - Change the sentence, keep the voice of that artifact (a manual is not a deck).
   - Keep the anchor comment on the line. The drift check needs the new `value`
     to appear on that line.
   - Code: change the constant, not the comment. Derived values (enums, ranges,
     schemas) move with it.
   - `lifecycle: snapshot` artifacts are frozen. Never edit them; they are history.
   - A changelog is living: add a dated entry on top, never rewrite old entries.
     When an old entry's fact changes, turn its anchor into an as-of citation
     (`fact:id@<that entry's date>`) so the line keeps its link and stops being
     checked for the current value. Same for any "was X, now Y" aside.
   - If an edit needs a decision (new copy angle, a number that no longer fits the
     story), stop and ask; do not invent.
4. Present the edit list (file, line, before → after) and apply it. If the user
   asked for autonomous propagation, apply without asking.
5. Stamp the reviewed artifacts: `npx fakto touch <file>…`. If `fakto.config.json`
   declares `renders`, run `npx fakto render` next: generated outputs (a slide deck
   built from a Markdown deck) are rebuilt from their source, never edited by hand.
6. Run `npx fakto check`. It must print `0 errors` with no stale warnings. Fix anything
   it reports before you call the job done.

### B. Retiring a fact

1. Set `status: retired` on the record, bump `updated`, add a `note:` saying why.
2. Run `npx fakto check`. Every living artifact that cites it is now an error.
3. Remove or rewrite each citing line. Where the artifact should record that the
   thing existed (a changelog, a history section), keep the anchor as an as-of
   citation (`fact:id@date`) or put `RETIRED` on the line.
4. `npx fakto touch` the edited files, `npx fakto check` must be green.

### C. Adding a new fact

1. One record per fact, kebab-case id with a topic prefix, `status: live` only
   when the value is confirmed; otherwise `draft`.
2. `value` is the shortest string every artifact line must contain. Pick it so
   it matches prose and code alike (`"7"`, `"$4.99"`, `"client.send("`).
3. Anchor the artifacts that already state it. Run `npx fakto graph` to confirm it has
   dependents; a fact with none is either new copy to write or not a fact.

### D. Tagging a new artifact

1. Add `reviewed: YYYY-MM-DD` to the file head (frontmatter or a comment).
2. Anchor every line that states a fact: `<!-- fact:id -->`, `// fact:id`,
   `# fact:id`, whatever comment syntax the file uses.
3. A published, dated thing (a post, a press release, an old deck) gets
   `lifecycle: snapshot` and is never edited again.
4. `npx fakto check` must be green.

### E. Narratives (facts without a `value`)

A narrative is a story every channel tells in its own words ("a platform, not an
appliance"). Its record has a `statement` and no `value`, and usually `supports: [ids]`,
the facts it rests on. The check cannot compare wording, so you are the check:

1. When a narrative's statement changes, `fakto stale` lists every section anchored to
   it. Rewrite each so it tells the new story in that file's voice: a website headline,
   a slide, a sentence in a deck. Do not paste the statement verbatim unless the file
   is meant to quote it.
2. Consistency pass: whenever you rewrite a file that cites a narrative (for any
   reason), read the anchored section and confirm it still tells that narrative. If it
   no longer does, rewrite it or report it; never leave a section that contradicts its
   story.
3. Numbers inside a narrative section are still facts: anchor them separately.
4. `supports` must list existing fact ids; the check fails otherwise.

### F. A source file changed (sync)

Some facts and sections follow a file instead of the other way round: a fact with
`source:`, a section with `<!-- from:path#selector -->`, a fence after
`<!-- example:path#selector -->`. When that file changes:

1. Run `npx fakto sync`. It copies every fenced example from its source (never edit those
   by hand) and lists the facts and sections that need judgment, with the diff since their
   last sync where git has the old version.
2. **Facts.** For each listed fact, read the source (the anchored line, or the selection).
   Change `value` and `statement` only if the meaning changed, and bump `updated` when you
   do. For a source with a selector, then run `npx fakto touch <fact-id>` to restamp it,
   also when nothing changed. A derived fact is never edited for any other reason.
3. **Sections.** For each listed section, reread it against the source. Rewrite it only
   where it no longer describes the source, in that file's own voice, keeping its anchors.
   Then `npx fakto touch <file>`: it stamps `reviewed` and moves the `from:` hashes.
4. **Propagate.** If step 2 changed a fact, follow case A from step 2 (`npx fakto stale`,
   rewrite, touch, render).
5. `npx fakto check` must be green. A rewrite can change a file another section draws on;
   if `fakto check` still reports something behind its source, go again (at most three
   passes, then report what is left).

## Invariants

- No number, name or claim in an artifact without a fact record and an anchor.
- Forward links only: artifacts point at facts. The reverse direction is derived
  by `npx fakto graph`, never stored.
- The `updated` date on a fact moves on every value change. That date is the
  whole propagation mechanism; forget it and nothing goes stale.
- Snapshots are never edited. Living artifacts are never left stale.
- Render outputs are build output: edit the source, then `npx fakto render`.
- A derived fact (one with `source:`) follows its file: change the file, never the record.
- Fenced examples are copies: `npx fakto sync` writes them, nobody else.
