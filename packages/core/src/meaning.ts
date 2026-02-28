export type Tense = "present" | "past" | "future";

export type Derivation = "agent" | "opposite";

export type Meaning =
  | { kind: "plural" }
  | { kind: "tense"; tense: Tense }
  | { kind: "negation" }
  | { kind: "question" }
  | { kind: "derivation"; derivation: Derivation };
