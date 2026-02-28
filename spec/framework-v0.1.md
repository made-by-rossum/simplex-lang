# simplex framework v0.1 (draft)

This document defines the **shared meaning map** and **hard rules** that every simplex variant must implement.

A *variant* (e.g. `simplex-en`) supplies:
- a root lexicon (word stems)
- localized affixes/particles that realize the shared meaning map
- an orthography/phonology (spelling/sound rules)

The **framework** supplies:
- the grammar architecture
- the inventory of required grammatical meanings (the “meaning map”)
- invariants: no exceptions

## 0. Goals

- Remove “technical debt”: no irregulars, no hidden special cases.
- Keep the language learnable and productive.
- Support a *family* of variants that share grammar but have localized vocabulary and affixes.

## 1. Hard invariants (must hold for every variant)

1. **No irregular morphology**
   - No irregular verbs.
   - No irregular plurals.
   - No suppletive forms (e.g. go/went).

2. **One form per meaning (inside the variant)**
   - Each grammatical meaning in the meaning map is expressed by exactly one affix/particle.

3. **Deterministic word-building**
   - A derivation rule must always produce the same meaning.
   - If two constructions would collide/ambiguate, the variant must disambiguate by changing the spelling of an affix (not by adding exceptions).

4. **Stable core syntax**
   - Default clause order is **SVO** (subject–verb–object) for v0.1.
   - Adjectives precede nouns for v0.1.

## 2. Meaning map (required grammatical meanings)

Every variant MUST implement these meanings:

### 2.1 Number
- **PLURAL** — “more than one”

### 2.2 Tense
- **PAST** — action/state occurs in the past
- **FUTURE** — action/state occurs in the future
- **PRESENT** — default/unmarked

### 2.3 Polarity
- **NEGATION** — logical negation of a clause ("not")

### 2.4 Interrogative
- **QUESTION** — marks a clause as a yes/no question

### 2.5 Derivation (word-building)
- **AGENT** — “person/thing that does X” (doer)
- **OPPOSITE** — semantic opposite (un- / in-)

## 3. Representation rules (framework-level)

The framework does **not** mandate whether a meaning is expressed as:
- a suffix/prefix on a word, or
- a separate particle word

…but each *variant* must choose one representation per meaning and use it consistently.

## 4. Compliance tests (v0.1)

A variant is v0.1-compliant if it can express the following without exceptions:

1. `I see dog.`
2. `I saw dog.`
3. `I will see dog.`
4. `I do not see dog.`
5. `Do I see dog?` (yes/no question)
6. `I see dogs.`
7. `teacher` (AGENT(teach))
8. `unclear` (OPPOSITE(clear))

## 5. Versioning

- Changes that alter the meaning map require a major version bump.
- Adding optional meanings can be done as minor versions.
