// Problem: compose(...fns) and pipe(...fns)
// const inc = n => n + 1, double = n => n * 2
// pipe(inc, double)(3)    -> 8   (left to right: inc first)
// compose(inc, double)(3) -> 7   (right to left: double first)
//
// Questions to answer in your tests:
// - pipe() with NO functions — what should it return? (identity?)
// - Only the FIRST function may take multiple arguments. Why?
// - Both are one reduce each. Which direction needs reduceRight?
//
// 1. Write 2-3 test cases below FIRST (include an edge case).
// 2. Solve without AI. 3. One-line comment explaining your approach.

// Tests
