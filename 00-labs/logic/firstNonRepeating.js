// Problem: firstNonRepeating(str)
// 'swiss' -> 'w'
// 'aabb' -> null
//
// 1. Write 2-3 test cases below FIRST (include an edge case).
// 2. Solve without AI. 3. One-line comment explaining your approach.

function firstNonRepeating(str) {
  // your code
  const freq = {}
  const length = str.length

  for (let char of str) {
    const key = char.toLowerCase()
    freq[key] = (freq[key] ?? 0) + 1
  }
  console.log(freq)
  key = Object.keys(freq).find((key) => freq[key] < 2)
  if (!key) return null
  return key
}
// Tests

// console.log(firstNonRepeating('swiss'))
const assert = require('node:assert')

// assert.deepStrictEqual(firstNonRepeating('swiss'), 'w')
assert.deepStrictEqual(firstNonRepeating('aabb'), null)
assert.deepStrictEqual(firstNonRepeating('2211'), null)
assert.deepStrictEqual(firstNonRepeating('21'), '2')

console.log('firstNonRepeating: all tests passed')
