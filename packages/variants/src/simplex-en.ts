import type { Variant } from "@simplex/core";

export const simplexEn: Variant = {
  id: "simplex-en",
  particles: {
    not: "not",
    aux: {
      presentQuestion: "do",
      past: "did",
      future: "will"
    }
  },
  affixes: {
    plural: "s",
    derivation: {
      agent: { suffix: "er" },
      opposite: { prefix: "un" }
    }
  },
  roots: [
    { id: "mi", gloss: "I/me", pos: "particle" },
    { id: "yu", gloss: "you", pos: "particle" },
    { id: "see", gloss: "see", pos: "verb" },
    { id: "dog", gloss: "dog", pos: "noun" },
    { id: "teach", gloss: "teach", pos: "verb" },
    { id: "clear", gloss: "clear", pos: "adj" }
  ]
};
