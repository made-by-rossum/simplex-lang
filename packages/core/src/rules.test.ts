import { describe, expect, it } from "vitest";
import type { Variant } from "./variant";
import {
  deriveAgent,
  deriveOpposite,
  negate,
  pluralize,
  render,
  tense,
  yesNoQuestion
} from "./rules";

const simplexEn: Variant = {
  id: "simplex-en",
  particles: {
    not: "not",
    aux: { presentQuestion: "do", past: "did", future: "will" }
  },
  affixes: {
    plural: "s",
    derivation: {
      agent: { suffix: "er" },
      opposite: { prefix: "un" }
    }
  },
  roots: []
};

describe("rules (v0.1)", () => {
  it("renders basic present", () => {
    expect(render(["mi", ...tense(simplexEn, "see", "present"), "dog"]))
      .toBe("mi see dog");
  });

  it("renders past and future via auxiliaries", () => {
    expect(render(["mi", ...tense(simplexEn, "see", "past"), "dog"]))
      .toBe("mi did see dog");
    expect(render(["mi", ...tense(simplexEn, "see", "future"), "dog"]))
      .toBe("mi will see dog");
  });

  it("pluralizes nouns", () => {
    expect(pluralize(simplexEn, "dog")).toBe("dogs");
  });

  it("negates clauses", () => {
    expect(render(negate(simplexEn, ["mi", "see", "dog"])) )
      .toBe("mi not see dog");
  });

  it("forms yes/no questions", () => {
    expect(render(yesNoQuestion(simplexEn, ["yu", "see", "dog"], "present")))
      .toBe("do yu see dog");
    expect(render(yesNoQuestion(simplexEn, ["yu", "see", "dog"], "past")))
      .toBe("did yu see dog");
    expect(render(yesNoQuestion(simplexEn, ["yu", "see", "dog"], "future")))
      .toBe("will yu see dog");
  });

  it("derives agent/opposite", () => {
    expect(deriveAgent(simplexEn, "teach")).toBe("teacher");
    expect(deriveOpposite(simplexEn, "clear")).toBe("unclear");
  });
});
