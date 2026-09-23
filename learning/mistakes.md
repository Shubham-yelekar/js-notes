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
