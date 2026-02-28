import type { Tense } from "./meaning";
import type { Variant } from "./variant";
import { getAuxForTense } from "./variant";

export type Tokens = string[];

export function render(tokens: Tokens): string {
  return tokens.join(" ");
}

export function pluralize(v: Variant, noun: string): string {
  return noun + v.affixes.plural;
}

export function tense(v: Variant, verb: string, t: Tense): Tokens {
  if (t === "present") return [verb];
  return [getAuxForTense(v, t), verb];
}

export function negate(v: Variant, clause: Tokens): Tokens {
  // v0.1: "not" precedes the verb phrase.
  // We treat it as a particle inserted after the subject if subject is present.
  // Convention: clause begins with subject.
  if (clause.length < 2) return [v.particles.not, ...clause];
  return [clause[0]!, v.particles.not, ...clause.slice(1)];
}

export function yesNoQuestion(v: Variant, clause: Tokens, t: Tense): Tokens {
  // v0.1: auxiliary + subject + base verb (+ rest)
  // Convention: clause begins with subject, then verb.
  const aux = getAuxForTense(v, t);
  if (clause.length === 0) return [aux];
  return [aux, ...clause];
}

export function deriveAgent(v: Variant, root: string): string {
  const d = v.affixes.derivation.agent;
  if (d.prefix) return d.prefix + root;
  if (d.suffix) return root + d.suffix;
  return root;
}

export function deriveOpposite(v: Variant, root: string): string {
  const d = v.affixes.derivation.opposite;
  if (d.prefix) return d.prefix + root;
  if (d.suffix) return root + d.suffix;
  return root;
}
