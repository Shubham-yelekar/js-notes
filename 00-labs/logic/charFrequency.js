// Problem: charFrequency(str)
// 'hello' -> { h: 1, e: 1, l: 2, o: 1 }
// Approach: one pass, lowercase each char, skip spaces, count in an object.
// Time O(n), extra space O(k) where k = distinct characters.

/**
 * Counts how often each character appears, ignoring case and spaces.
 * @param {string} str
 * @returns {Record<string, number>}
 */
function charFrequency(str) {
  const freq = {}

  for (const char of str) {
    const key = char.toLowerCase()
    if (key === ' ') continue
    freq[key] = (freq[key] ?? 0) + 1
  }

  return freq
}

// Tests
const assert = require('node:assert')

assert.deepStrictEqual(charFrequency('hello'), { h: 1, e: 1, l: 2, o: 1 })
assert.deepStrictEqual(charFrequency(''), {})
assert.deepStrictEqual(charFrequency('Hello World'), { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 })

console.log('charFrequency: all tests passed')
