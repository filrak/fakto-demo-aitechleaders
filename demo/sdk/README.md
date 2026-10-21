<!-- reviewed: 2026-09-01 -->
# @tostr/sdk <!-- fact:sdk-package-name -->

Official Node.js client for the first smart toaster. <!-- fact:product-claim-first -->

```bash
npm install @tostr/sdk
```

```ts
import { Tostr } from "@tostr/sdk";
const tostr = new Tostr(apiKey);
await tostr.toast({ level: 4, personality: "Coach" }); // fact:sdk-method-toast
```

The client validates `level` against the 7 browning levels <!-- fact:browning-levels -->
and throttles to 10 requests per minute <!-- fact:api-rate-limit --> so you never see a 429.
