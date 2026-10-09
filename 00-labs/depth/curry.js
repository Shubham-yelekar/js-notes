// Problem: curry(fn)
// const add3 = (a, b, c) => a + b + c
// const c = curry(add3)
// c(1)(2)(3) -> 6      c(1, 2)(3) -> 6      c(1)(2, 3) -> 6      c(1, 2, 3) -> 6
//
// Questions to answer in your tests:
// - How does your version know when to stop collecting and finally call fn?
// - What does fn.length return for (a, b = 1, c) or (...args)? Try it.
// - Stretch: partial(fn, ...preset) — fix the leading arguments only.
//
// 1. Write 2-3 test cases below FIRST (include an edge case).
// 2. Solve without AI. 3. One-line comment explaining your approach.

// Tests
