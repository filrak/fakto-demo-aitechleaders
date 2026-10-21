---
title: API reference
reviewed: 2026-10-21
---

# API reference

## Start a toast job <!-- from:sdk/openapi.yaml#paths./v1/toast@69cbd9cc7c64 -->

`POST /v1/toast` <!-- fact:api-endpoint-toast -->

| Field | Type | Notes |
|---|---|---|
| `level` | integer | 1 to 7 <!-- fact:browning-levels --> |
| `slot` | integer | 1 or 2; omit to use both <!-- fact:slots --> |
| `personality` | string | `Butler`, `Coach` or `Gremlin` <!-- fact:personality-butler --> <!-- fact:personality-coach --> <!-- fact:personality-gremlin --> |
| `message` | string | Optional. Spoken when the toast pops. |

### Rate limit

10 requests per minute per toaster. <!-- fact:api-rate-limit -->
Above that you get `429 Too Many Requests`. A cycle takes 90 seconds, <!-- fact:cycle-seconds -->
so you were not going to toast faster anyway.

### Responses

| Code | Meaning |
|---|---|
| 202 | Toasting. Includes `eta_seconds`. |
| 409 | Already toasting. Wait. |
| 422 | No bread detected. |
| 429 | Rate limit exceeded |
