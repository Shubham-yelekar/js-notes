// Problem: isAnagram(a, b)
// 'listen', 'silent' -> true
// 'rat', 'car' -> false
// Stretch: ignore case and spaces.
//
// 1. Write 2-3 test cases below FIRST (include an edge case).
// 2. Solve without AI. 3. One-line comment explaining your approach.

function isAnagram(a, b) {
  // your code

  const aLen = a.split(' ').join('').length
  const bLen = b.split(' ').join('').length

  if (aLen !== bLen) return false
  const freq = {}

  for (let i = 0; i < a.length; i++) {
    const key = a[i].toLowerCase()
    if (key === ' ') continue
    freq[key] = (freq[key] ?? 0) + 1
  }

  for (let i = 0; i < b.length; i++) {
    const key = b[i].toLowerCase()
    if (key === ' ') continue
    if (freq[key]) {
      freq[key]--
    } else {
      return false
    }
  }

  return true
}

// Tests

console.log(isAnagram('dormitory', 'dirty room'))
// const assert = require('node:assert')

// assert.deepStrictEqual(isAnagram('llllis', 'sillls'), true)
// assert.deepStrictEqual(isAnagram('rat', 'car'), false)
// assert.deepStrictEqual(isAnagram('World', 'helloW'), false)

// console.log('isAnagram: all tests passed')
