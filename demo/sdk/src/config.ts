// reviewed: 2026-09-01
// Platform constants.
// TOAST_ENDPOINT and MAX_REQUESTS_PER_MINUTE are the source of truth: change them here and
// run `fakto sync`, and their facts, the docs, the site and the deck follow.
// Every other value mirrors a fact record in ../../facts/: change the fact first.

export const API_BASE = "https://api.tostr.dev";
export const TOAST_ENDPOINT = "POST /v1/toast"; // fact:api-endpoint-toast

/** Client-side throttle, matches the API limit. */
export const MAX_REQUESTS_PER_MINUTE = 10; // fact:api-rate-limit

/** Validated before sending; the API returns 422 outside this range. */
export const MIN_LEVEL = 1;
export const MAX_LEVEL = 7; // fact:browning-levels
export const SLOTS = 2; // fact:slots

/** Used for the eta estimate in `toast()`. */
export const CYCLE_SECONDS_AT_LEVEL_4 = 90; // fact:cycle-seconds
