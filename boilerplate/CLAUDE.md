# This repo

A Fakto repo: facts live in `facts/*.yaml`, and every line in `website/`, `docs/` and
`marketing/` that states one carries an anchor comment `fact:<id>`. The README's "For
agents" section is the full guide; read it before the first edit.

- **Start of every session:** use the `fakto-canvas` skill first. It starts the live map and
  tells the user where it runs; they watch it while you work.
- Change a fact in its record first, never in the files that cite it; then propagate with the
  `fakto` skill.
- A fact with `source:` follows a file: change the file, then `npx fakto sync`. Fenced blocks
  after `example:` anchors are copies; never edit them by hand.
- After editing any file here, `npx fakto check` must report 0 errors.
- Rewrites follow `house-rules.md`.
- Files with `lifecycle: snapshot` in their head are frozen: never edit them.
