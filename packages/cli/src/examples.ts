import { render, tense, yesNoQuestion, negate, pluralize, deriveAgent, deriveOpposite } from "@simplex/core";
import { simplexEn } from "@simplex/variants";

function line(label: string, tokens: string[]) {
  console.log(`${label}: ${render(tokens)}`);
}

const v = simplexEn;

// Compliance examples (v0.1)
line("present", ["mi", ...tense(v, "see", "present"), "dog"]);
line("past", ["mi", ...tense(v, "see", "past"), "dog"]);
line("future", ["mi", ...tense(v, "see", "future"), "dog"]);
line("neg", negate(v, ["mi", "see", "dog"]));
line("q/present", yesNoQuestion(v, ["yu", "see", "dog"], "present"));
line("q/past", yesNoQuestion(v, ["yu", "see", "dog"], "past"));
line("q/future", yesNoQuestion(v, ["yu", "see", "dog"], "future"));
console.log(`plural: ${pluralize(v, "dog")}`);
console.log(`agent: ${deriveAgent(v, "teach")}`);
console.log(`opposite: ${deriveOpposite(v, "clear")}`);
