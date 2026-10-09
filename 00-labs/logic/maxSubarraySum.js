// Problem: maxSubarraySum(arr)
// [-2, 1, -3, 4, -1, 2, 1, -5, 4] -> 6 (from [4, -1, 2, 1])
// Brute force first. Stretch: one pass (look up Kadane's algorithm after you try).
//
// 1. Write 2-3 test cases below FIRST (include an edge case).
// 2. Solve without AI. 3. One-line comment explaining your approach.

function maxSubarraySum(arr) {
  // your code
  if (arr.length < 1) return 0
  let res = arr[0]

  for (let i = 0; i < arr.length; i++) {
    let currSum = 0
    for (let j = i; j < arr.length; j++) {
      currSum = currSum + arr[j]
      res = Math.max(res, currSum)
    }
  }
  return res
}

// Tests

console.log(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
console.log(maxSubarraySum([]))
