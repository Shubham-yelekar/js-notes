// Problem: secondMax(arr)
// [4, 9, 2, 9, 7] -> 7
// Single pass, no sort. What if there's no second max?
//
// 1. Write 2-3 test cases below FIRST (include an edge case).
// 2. Solve without AI. 3. One-line comment explaining your approach.

// Track the two largest distinct values in one pass; `undefined` means "not seen yet",
// so a real -Infinity in the array isn't confused with the starting state.
function secondMax(arr) {
  let hi
  let lo

  for (const n of arr) {
    if (hi === undefined || n > hi) {
      if (hi !== undefined) lo = hi
      hi = n
    } else if (n < hi && (lo === undefined || n > lo)) {
      lo = n
    }
  }

  return lo
}

// Tests
console.log(secondMax([4, 9, 2, 9, 7])) // 7
console.log(secondMax([5, 9, 8, 1])) // 8
console.log(secondMax([])) // undefined — empty
console.log(secondMax([5])) // undefined — no second max
console.log(secondMax([9, 9])) // undefined — only one distinct value
console.log(secondMax([-Infinity, 5])) // -Infinity — the sentinel-collision case
console.log(secondMax([Infinity, -Infinity])) // -Infinity
