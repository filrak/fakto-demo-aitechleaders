---
name: fakto-canvas
description: >
  Start the Fakto canvas, the live map of this repo's facts and the files that state them,
  and tell the user where it runs. Use it first, at the start of every session in a repo
  that has a fakto.config.json, before any other work. Also use it whenever the user wants
  to see the map, the canvas, or the changes as they happen, or says "start", "run it",
  "open the canvas" or "show me".
---

# fakto-canvas — start the live map and say where it is

The canvas is a local web page that draws every fact and every file that cites it, and
updates live as files change. The user watches it while you work in the terminal, so
start it before anything else.

1. Run `npx fakto canvas --background`. It starts the canvas detached (or finds the one already
   running for this repo) and returns within a few seconds with one line:
   - `fakto canvas: http://localhost:<port>  (started in the background …)`: it started.
   - `fakto canvas: http://localhost:<port>  (already running for …)`: one was already up.
   - `The canvas is not installed` or `Cannot find package`: the dependencies are missing.
     Run `npm install`, then try again.
   Never run plain `npx fakto canvas` yourself: it stays in the foreground and blocks you.
2. If it timed out, read the log file it names and tell the user what it says.
3. Run `npx fakto check` and keep its last line (the error and warning count).
4. Tell the user, in two short lines, with the real URL and counts:
   > The Fakto canvas is running at http://localhost:4848. Open it to watch facts and files
   > update as we work.
   > Right now: 31 facts, 15 files, check green (or: what the check reports).

   Get the counts from `npx fakto graph --json` if you need them (`facts.length`,
   `artifacts.length`).

## While it runs

- Every edit you make shows up on the canvas within a second; mention it when the user should
  look ("watch the marketing column").
- The canvas has its own buttons (Save on a fact, Sync, Sync all). They run the user's Claude
  Code CLI in this repo; their results land in the same files you see.
- Leave it running when the session ends. If the user asks to stop it: `npx fakto canvas --stop`.
