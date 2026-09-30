// Problem: secondMax(arr)
// [4, 9, 2, 9, 7] -> 7
// Single pass, no sort. What if there's no second max?
//
// 1. Write 2-3 test cases below FIRST (include an edge case).
// 2. Solve without AI. 3. One-line comment explaining your approach.

function secondMax(arr) {
  let hi = -Infinity
  let lo = -Infinity

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > hi) {
      let temp = hi
      hi = arr[i]
      lo = temp
    } else if (arr[i] > lo && arr[i] < hi) {
      lo = arr[i]
    }
  }

  return lo
}

// Tests

console.log(secondMax([5, 9, 8, 1]))
