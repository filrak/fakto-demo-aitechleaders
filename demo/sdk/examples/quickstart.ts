// reviewed: 2026-10-21
// The quick start in docs/getting-started.md is copied from the region below.
// Change it here and run `fakto sync`; never edit the copy in the docs.

// fakto:region quickstart
import { Tostr } from "@tostr/sdk";
const tostr = new Tostr(process.env.TOSTR_KEY);
await tostr.toast({ level: 4, personality: "Coach" }); // fact:sdk-method-toast
// fakto:end
