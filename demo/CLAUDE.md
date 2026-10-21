# Tostr (a Fakto demo repo)

Tostr is a fake company, the first smart toaster. Its facts live in `facts/*.yaml`; every
line in `website/`, `docs/`, `sdk/`, `pitch/` and `marketing/` that states one carries an
anchor comment `fact:<id>`. The README's "For agents" section is the full guide.

- **Before anything else:** the skills in `.claude/skills/` must be installed and current. If
  `node_modules/` is missing or the session start says the dependencies are not installed, run
  `npm install` first (it runs `fakto skills`). Never edit `.claude/skills/`; it is generated.
- **Start of every session:** use the `fakto-canvas` skill first. It starts the live map and
  tells the user where it runs; the audience watches it while you work.
- Change a fact in its record first, never in the files that cite it; then propagate with the
  `fakto` skill.
- `api-endpoint-toast` and `api-rate-limit` follow `sdk/src/config.ts`: change the code, then
  sync. The quick start in `docs/getting-started.md` is a copy of
  `sdk/examples/quickstart.ts`; never edit the copy.
- `out/` is generated (`npx fakto render`); never edit it. `marketing/launch-post.md` is
  frozen.
- `scenarios/` holds the demo scripts and the inputs they use (like `06-article.md`); it is
  not scanned.
- After editing any file here, `npx fakto check` must report 0 errors.
