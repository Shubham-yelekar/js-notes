// Problem: memoize(fn, keyResolver?)
// const slowAdd = (a, b) => { calls++; return a + b }
// const fast = memoize(slowAdd)
// fast(1, 2) -> 3 (calls === 1)    fast(1, 2) -> 3 (calls STILL 1)
//
// Questions to answer in your tests:
// - Default key for multiple arguments: what goes wrong with String(args)?
//   Compare memo(1, 2) vs memo('1,2') vs memo([1], [2]).
// - Why is a Map a better cache than a plain object here?
// - What should memoize do with an object argument? (This is why keyResolver exists.)
// - Unbounded cache is a memory leak. Where would you cap it?
//
// 1. Write 2-3 test cases below FIRST (include an edge case).
// 2. Solve without AI. 3. One-line comment explaining your approach.

// Tests
