import type { Derivation, Tense } from "./meaning";

export type RootPos = "noun" | "verb" | "adj" | "particle";

export type Root = {
  id: string;
  gloss: string;
  pos: RootPos;
};

export type VariantId = "simplex-en" | "simplex-fr" | "simplex-es";

export type Variant = {
  id: VariantId;

  /** Basic particles/words */
  particles: {
    not: string;
    aux: {
      presentQuestion: string; // e.g. do
      past: string; // e.g. did
      future: string; // e.g. will
    };
  };

  /** Affixes (localized per variant) */
  affixes: {
    plural: string; // noun suffix
    derivation: Record<Derivation, { prefix?: string; suffix?: string }>;
  };

  roots: Root[];

  /** Validate that a surface form is allowed (optional hook) */
  validateToken?: (token: string) => void;
};

export function getAuxForTense(v: Variant, tense: Tense): string {
  if (tense === "present") return v.particles.aux.presentQuestion;
  if (tense === "past") return v.particles.aux.past;
  return v.particles.aux.future;
}
