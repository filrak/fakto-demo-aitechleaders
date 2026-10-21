// reviewed: 2026-09-01
// One entry per shipped personality. Mirrors facts/product.yaml.

export const PERSONALITIES = [
  "Butler", // fact:personality-butler
  "Coach", // fact:personality-coach
  "Gremlin", // fact:personality-gremlin
] as const;

export type Personality = (typeof PERSONALITIES)[number];

export const PERSONALITY_COUNT = 3; // fact:personalities-count
