# Review

Keep short retrieval prompts or review metadata for meaningful topics.

## YYYY-MM-DD: Topic

- **Recall prompt:**
- **Last reviewed:**
- **Confidence:**
- **Next review or exercise:**

## 2026-09-29: `this` retest (M1) — ✅ cleared

- **Recall prompt:** 3 fresh prediction snippets, no notes, no running code. Must include: an arrow inside an object literal vs inside a method, `call` on an arrow class field, and `new` on a bound function.
- **Last reviewed:** 2026-10-05 — **3/3 (100%)**, up from ~50% on 2026-09-29. Values and governing rule correct on all three, including `new` > `bind` precedence.
- **Confidence:** High. Two wording-level sharpenings only: an arrow has *no* `this` binding (it isn't a capture), and an arrow class field is created inside the constructor, which is why `call` on it is a no-op.
- **Next review or exercise:** none scheduled. Untested corners remain in [../tracks/depth.md](../tracks/depth.md#this--invocation): detached methods, callbacks, strict vs sloppy default binding.
