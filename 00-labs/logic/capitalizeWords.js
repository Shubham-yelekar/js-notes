// Problem: capitalizeWords(str)
// 'hello world from js' -> 'Hello World From Js'
//
// 1. Write 2-3 test cases below FIRST (include an edge case).
// 2. Solve without AI. 3. One-line comment explaining your approach.

// Trim the ends, split on single spaces, then rebuild each word as
// uppercased-first-letter + untouched rest. Empty segments (from runs of spaces)
// are passed through unchanged so `join(' ')` restores the original spacing.
function capitalizeWords(str) {
  return str
    .trim()
    .split(' ')
    .map((word) => (word ? word[0].toUpperCase() + word.slice(1) : word))
    .join(' ')
}

// Tests
const assert = require('node:assert')

assert.strictEqual(capitalizeWords('hello world from js'), 'Hello World From Js')
assert.strictEqual(capitalizeWords('hello  js'), 'Hello  Js') // space run preserved
assert.strictEqual(capitalizeWords(' hello js '), 'Hello Js') // ends trimmed
assert.strictEqual(capitalizeWords(''), '') // empty input
assert.strictEqual(capitalizeWords('   '), '') // whitespace only
assert.strictEqual(capitalizeWords('js'), 'Js') // single word
assert.strictEqual(capitalizeWords('Hello World'), 'Hello World') // already capitalized
assert.strictEqual(capitalizeWords('jS oN'), 'JS ON') // rest of word untouched
assert.strictEqual(capitalizeWords('1st place'), '1st Place') // non-letter first char
assert.strictEqual(capitalizeWords('a b c'), 'A B C') // single-char words

console.log('capitalizeWords: all tests passed')
