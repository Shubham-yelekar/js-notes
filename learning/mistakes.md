# Mistakes

Record meaningful bugs or recurring misconceptions. Preserve the original reasoning.

## YYYY-MM-DD: Short title

- **Problem:**
- **Mistake:**
- **Original mental model:**
- **Correct mental model:**
- **Category:**
- **Prevention:**
- **Follow-up exercise:**

## 2026-09-23: Thought `this` in a constructor is the function

- **Problem:** What is `this` inside `Person` when it's called with `new Person('Shubham')`?
- **Mistake:** Answered "`this` is the Person function".
- **Original mental model:** `this` refers to the function that is running.
- **Correct mental model:** `new` creates a fresh object and binds `this` to it. `this` never refers to the function itself.
- **Category:** Conceptual
- **Prevention:** Before answering, ask "how was this function called?" For `new`, `this` is the new object.
- **Follow-up exercise:** Log `this === Person` and `this` inside a constructor, and predict the output first.

## 2026-09-23: Said a method lives on `A` instead of `A.prototype`

- **Problem:** Where does `a` find `hello` when `A.prototype.hello` is defined?
- **Mistake:** Said "`hello` is a property of `A`".
- **Original mental model:** A constructor and its prototype are the same thing.
- **Correct mental model:** `A` (the function) and `A.prototype` (a separate object) are different objects. `A.hello` is `undefined`. Instances are linked to `A.prototype`, not to `A`.
- **Category:** Conceptual
- **Prevention:** Say "`A.prototype`" in full every time.
- **Follow-up exercise:** Predict `A.hello`, `A.prototype.hello` and `Object.getPrototypeOf(a) === A`.

## 2026-09-23: `typeof x !== null` null check

- **Problem:** `myNew` step 4 must not return `null` as the result.
- **Mistake:** Wrote `typeof result !== null`.
- **Original mental model:** `typeof` can be compared directly with `null`.
- **Correct mental model:** `typeof` always returns a string, so the comparison is always `true`. Check the value itself: `result !== null`.
- **Category:** Syntax/API
- **Prevention:** Compare `typeof` only against string literals (`'object'`, `'function'`, ...).
- **Follow-up exercise:** Predict `typeof null`, `typeof null === null` and `typeof null === 'object'`.

## 2026-09-23: Missing fallback return in `myNew`

- **Problem:** `myNew(A)` returned `undefined`.
- **Mistake:** Wrote only `if (isObject) return result`, with no `return obj` after it.
- **Original mental model:** (not stated) Assumed the `if` alone covered step 4.
- **Correct mental model:** A function with no `return` on a path returns `undefined`. Both branches of step 4 need an explicit return.
- **Category:** Conceptual (control flow)
- **Prevention:** Trace every branch with a concrete input (`A`, `B`, `C`, `D`) before running.
- **Follow-up exercise:** Reimplement `myNew` from a blank file.

## 2026-09-23: `myBind` passed args as an array

- **Problem:** `add.myBind(null, 1)(2, 3)` printed `1 [2, 3] undefined`.
- **Mistake:** `context[sym](...argArray, args)`, where `args` wasn't spread.
- **Original mental model:** Rest params `...args` still act as separate arguments when passed on.
- **Correct mental model:** `...args` in a parameter list collects them into an array. You have to spread it again (`...args`) when you pass it on.
- **Category:** Syntax
- **Prevention:** Test bound functions with preset and call-time args together.
- **Follow-up exercise:** Reimplement `myBind` from a blank file (it's already a Mastery test item).

## 4-5 days  ago : Call , bind, apply and this
-- Need practice with the this

## 2026-09-29: Arrow `this` taken from the call site

- **Problem:** Mastery test Q1: `const user = { name: 'Asha', arrow: () => this?.name }`. What does `user.arrow()` return?
- **Mistake:** Answered `"Asha"`, then TypeError. On the arrow inside `nested()`, first guessed TypeError.
- **Original mental model:** "An arrow gets `this` from the lexical scope where it is called." Also thought an object literal `{ }` provides a `this`.
- **Correct mental model:** An arrow takes `this` from the nearest enclosing **function** (or module top level) where it is **written**. The call site never matters, and `call`/`apply`/`bind` can't change it. An object literal isn't a function, so it has no `this`.
- **Category:** Conceptual
- **Prevention:** For any arrow, point to the nearest `function`/method around it and ask "what was `this` when that ran?"
- **Follow-up exercise:** Predict `user.arrow() === this` at the top of a file, and an arrow class field called with `.call({})`.

## 2026-09-29: Thought `bind` beats `new`

- **Problem:** Mastery test Q3: `const Bound = Person.bind(obj); const p = new Bound('Ravi')`. What is `p.name`?
- **Mistake:** Answered `'obj'` ("it is binded first").
- **Original mental model:** A bound `this` is permanent, even under `new`.
- **Correct mental model:** `new` wins over `bind`. It creates a fresh object and uses it as `this`, so `p.name` is `'Ravi'` and `obj` isn't touched. Order from strongest: `new` > `bind`/`call`/`apply` > `obj.method()` > plain call (`undefined` in strict mode). Arrow functions ignore all of these.
- **Category:** Conceptual
- **Prevention:** Check the call for `new` first. Also, if `obj` wasn't changed, `this` wasn't `obj`.
- **Follow-up exercise:** Predict `p.name`, `obj.name` and `p instanceof Person`. Then check whether your `myBind` handles `new`. (It probably doesn't; native `bind` does.)

## 2026-09-30: Tried to mutate a string, and leaked an undeclared variable

- **Problem:** `reverseString` with a two-pointer swap returned `'hello'` unchanged.
- **Mistake:** (1) Swapped characters with `s[b] = s[a]` on a string. (2) Wrote `s = str` with no `let`/`const`.
- **Original mental model:** (1) Strings can be changed by index like arrays. Predicted `x[0] = 'b'` on `'cat'` gives `'bat'`. (2) "JS puts `var` on an undeclared variable, so it goes global."
- **Correct mental model:** (1) Strings are immutable. Index assignment is silently ignored (sloppy mode). Convert with `split('')` → mutate the array → `join('')`. (2) JS doesn't add `var` (a `var` inside a function would stay local). In sloppy mode, assigning to an undeclared name creates `globalThis.s`. In strict mode it throws `ReferenceError`.
- **Category:** Conceptual
- **Prevention:** Declare every variable with `const`/`let`. Before mutating by index, ask "is this an array or a string?"
- **Follow-up exercise:** Predict `'use strict'; const x = 'cat'; x[0] = 'b'`. (Hint: strict mode changes this one too.)

## 2026-09-30: Used `map[key]` on a `Map`

- **Problem:** `removeDuplicates([3, 1, 3, 2])` returned `[1, 2, 3]` instead of `[3, 1, 2]`. Node printed `Map(0) { '1': 1, '2': 1, '3': 2 }`.
- **Mistake:** (1) Used a plain object for counting, so integer keys came back sorted. (2) Switched to `new Map()` but still read and wrote with `map[num]`. (3) Started the count at `0` instead of `1`.
- **Original mental model:** Objects "don't keep insertion order". Also, a `Map` works with `[]` like any other object.
- **Correct mental model:** Plain objects keep insertion order for string keys but put integer-like keys first, sorted ascending. `map[k]` writes a plain property on the Map object, not a Map entry, so `size` stays 0 and the old object rules still apply. Use `set`/`get`/`has`.
- **Category:** Syntax/API (Map) + Conceptual (key order)
- **Prevention:** Check for `Map(0)` in the log. With a `Map`, never use `[]`.
- **Follow-up exercise:** Predict `const m = new Map(); m['x'] = 1; m.set('y', 2); console.log(m.size, m.get('x'), m.y)`.

## 2026-10-01: Used `-Infinity` as a sentinel that the input can actually contain

- **Problem:** `secondMax([-Infinity, 5])` returned `5` instead of `-Infinity`.
- **Mistake:** Initialised `hi = -Infinity, lo = -Infinity` to mean "nothing seen yet". Then added `hasHi`/`hasLo` booleans to patch it, and finally put `!hasHi &&` into the loop condition, which froze `hi` after the first element.
- **Original mental model:** `-Infinity` is small enough that every real value beats it, so it's a safe starting point. Separate `has*` flags can fix whatever the sentinel gets wrong.
- **Correct mental model:** A sentinel has to live **outside** the value domain. `-Infinity` is a legal number, so `-Infinity > -Infinity` is `false` and a real `-Infinity` element is skipped by both branches — indistinguishable from "unset". Using `undefined` works because the array holds numbers. Once `undefined` means unset, `hi === undefined` *is* the flag; the `has*` booleans were duplicate state that drifted out of sync with `hi`/`lo`.
- **Category:** Conceptual (sentinel values / state duplication)
- **Prevention:** After picking a sentinel, ask "can the input legally produce this value?" If yes, pick another. Same trap as `-1` for an index and `0` for a count. And when a fix needs a second variable to track what the first should already say, suspect the first variable's representation.
- **Follow-up exercise:** Write `minPositive(arr)` returning the smallest value `> 0`, or `undefined` if none. Then run it on `[Infinity, 0, -3]` and `[]`. Predict both before running.
