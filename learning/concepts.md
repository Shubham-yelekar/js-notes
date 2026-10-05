# Concepts

Record durable understanding, not every definition encountered.

## YYYY-MM-DD: Concept

- **Learner's explanation:**
- **Corrected understanding:**
- **Example:**
- **Related concepts:**

## 2026-09-23: `this` with `new`

- **Learner's explanation:** `new Person('Shubham')` gives an object with `name`. Inside the constructor, `this` is a new `{}`. If the constructor returns an object, that object is returned instead. A method on `A.prototype` is reachable from the instance even though the instance doesn't own it.
- **Corrected understanding:** `new Constructor(...args)` runs 4 steps:
  1. Create an empty object.
  2. Link its `[[Prototype]]` to `Constructor.prototype`.
  3. Run `Constructor` with `this` set to that object.
  4. If the constructor returned an object or function, return that. Otherwise (a primitive, `undefined` or `null`), return the new object.

  Arrow functions can't be used with `new` because they have no `prototype` and no own `this`.
- **Example:** [00-labs/depth/new.js](../00-labs/depth/new.js)
  ```js
  function myNew(Constructor, ...args) {
    const obj = Object.create(Constructor.prototype)
    const result = Constructor.apply(obj, args)
    if (result !== null && (typeof result == 'object' || typeof result == 'function')) {
      return result
    }
    return obj
  }
  ```
- **Related concepts:** `call`/`apply`/`bind`, prototype chain, `Object.create`, arrow functions and lexical `this`, `this` in classes (next)
These are the function invocation methods that can be applied on an object.

That object become the "this" for the function to run with context to.

If no context is assigned or missing it points to the global object eg- window object in browser.

The call is method of the a function that can be invoked and passed the Object , rest of variables.

The apply is method of the a function that can be invoked and passed the Object , and array of variables.

bind in other hand bounds the function to the object that can be called again and again and will point to same object.

## 2026-09-30: Count up / count down, and when a final check isn't needed

- **Learner's explanation:** "My mind was locked in to: after removing all the freq, how will I check each letter is 0 or not?"
- **Corrected understanding:** Count up for `a` and count down for `b`, using one object. You don't need a final "are all values 0?" loop, because an earlier check already guarantees it:
  1. Equal length → `b` removes exactly as many letters as `a` added.
  2. The loop returns `false` the moment a count would go below 0 (a missing or used-up letter).
  3. So if `b` finishes the loop, every removal matched an addition, and nothing can be left over. All values are 0.

  The general lesson: before adding a final check, ask "what do my earlier checks already guarantee?"
- **Example:** [00-labs/logic/isAnagram.js](../00-labs/logic/isAnagram.js). `if (freq[key]) freq[key]-- else return false`: a falsy value covers both "never seen" (`undefined`) and "used up" (`0`).
- **Caveat:** the guarantee depends on the length check matching what the loops count. If the loops skip spaces but the length check doesn't, the guarantee breaks (`'dormitory'` vs `'dirty room'`).
- **Related concepts:** frequency counter pattern ([charFrequency](../00-labs/logic/charFrequency.js)), early return, truthy/falsy

## 2026-09-30: `for...in` vs `for...of`, and object key order

- **Learner's explanation:** `for...in` gives indices, which are the object's keys. Objects don't keep insertion order for "integer properties", so use a `Map`.
- **Corrected understanding:**
  - `for...in` loops over **keys**, and they're always strings (`'0'`, not `0`). `for...of` loops over **values** using the iterator. Plain objects aren't iterable, so `for...of` on one throws.
  - Plain objects always store keys as strings, and they list integer-like keys first, sorted ascending, then other string keys in insertion order.
  - A `Map` keeps insertion order for every key and keeps the key's type (`3` stays a number).
- **Example:** [00-labs/logic/removeDuplicates.js](../00-labs/logic/removeDuplicates.js). `[3, 1, 3, 2]` → `freq = { '1': 1, '2': 1, '3': 2 }` → `[1, 2, 3]`, but the expected result is `[3, 1, 2]`.
- **Related concepts:** frequency counter pattern, `Object.keys`, `Map`, `Set`, iterators

## 2026-10-05: An arrow function has no `this` binding at all

- **Learner's explanation:** "It captures `this` from the surrounding scope where the object literal is created."
- **Corrected understanding:** Close, but "captures" implies the arrow holds a `this` of its own. It doesn't — an arrow has **no `this` binding whatsoever**, so `this` inside it is an ordinary identifier resolved up the scope chain, exactly like any other variable. The binding rules (`new` / explicit / implicit / default) never run for an arrow, because there is nothing to bind.

  Three consequences, which is why this one reframe is worth more than the three rules it replaces:
  1. **A method-position arrow ignores the dot.** `{ count: 10, inc: () => this.count++ }` — `this` resolves to the enclosing scope (`window` in a non-strict script), so `window.count` gets `undefined++` → `NaN` and `count` is never touched.
  2. **`call`/`apply`/`bind` on an arrow are silent no-ops.** They set a `this` the body never consults. No error, no effect.
  3. **An arrow class field resolves `this` to the instance** — field initializers run inside the constructor, where `this` is the new object. This is why the auto-bound-handler pattern works, and why `.call(other)` on it still returns the instance's value.
- **Example:**
  ```js
  class Timer {
    label = 'timer'
    arrow = () => this.label      // created in the constructor; this === instance
    method() { return this.label }
  }
  const t = new Timer()
  t.arrow.call({ label: 'other' })   // 'timer'  — call ignored
  t.method.call({ label: 'other' })  // 'other'  — explicit binding wins
  ```
- **Related concepts:** the call rules and their precedence (`new` > explicit > implicit > default), scope chain and lexical scope, `new` on a bound function, why arrows can't be used with `new` (see the 2026-09-23 entry)

