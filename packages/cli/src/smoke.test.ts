import { describe, expect, it } from "vitest";
import { simplexEn } from "@simplex/variants";
import { render, tense } from "@simplex/core";

describe("cli smoke", () => {
  it("renders a simple sentence", () => {
    expect(render(["mi", ...tense(simplexEn, "see", "present"), "dog"]))
      .toBe("mi see dog");
  });
});
