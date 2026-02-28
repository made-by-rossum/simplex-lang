import { describe, expect, it } from "vitest";
import { simplexEn } from "./simplex-en";

describe("simplexEn variant", () => {
  it("has required particles and affixes", () => {
    expect(simplexEn.particles.not).toBe("not");
    expect(simplexEn.particles.aux.presentQuestion).toBe("do");
    expect(simplexEn.affixes.plural).toBe("s");
  });
});
