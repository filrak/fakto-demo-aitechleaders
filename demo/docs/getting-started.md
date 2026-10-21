---
title: Getting started
reviewed: 2026-09-01
---

# Getting started

Your Tostr is the first smart toaster. <!-- fact:product-claim-first -->
This page gets you from box to toast.

## 1. Plug it in

Put bread in either of the 2 slots. <!-- fact:slots -->
Turn the dial to a browning level from 1 to 7. <!-- fact:browning-levels -->
Level 4 is the one most people mean by "toast".

## 2. Talk to it

Say "Hey Tostr" and then what you want. <!-- fact:wake-word -->
Examples that work on day one:

- "Hey Tostr, level four."
- "Hey Tostr, same as yesterday."
- "Hey Tostr, be nicer." (switches to Butler) <!-- fact:personality-butler -->

A full cycle at level 4 takes about 90 seconds. <!-- fact:cycle-seconds -->
Tostr tells you when it is done, in whatever voice you picked.

## 3. Pick a personality

Free comes with Butler. <!-- fact:plan-free-price (the $0 tier; see pricing) -->
Personality Pack unlocks Coach and Gremlin <!-- fact:plan-pro-name -->
for $4.99 a month. <!-- fact:plan-pro-price -->
See [Personalities](personalities.md).

## 4. Program it

```bash
npm install @tostr/sdk # fact:sdk-package-name
```

<!-- example:sdk/examples/quickstart.ts#quickstart -->
```ts
import { Tostr } from "@tostr/sdk";
const tostr = new Tostr(process.env.TOSTR_KEY);
await tostr.toast({ level: 4, personality: "Coach" }); // fact:sdk-method-toast
```

Under the hood the SDK calls `POST /v1/toast`. <!-- fact:api-endpoint-toast -->
