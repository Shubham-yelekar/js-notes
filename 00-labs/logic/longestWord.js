// Problem: longestWord(sentence)
// 'I love JavaScript a lot' -> 'JavaScript'
// Tie: return the first one.
//
// 1. Write 2-3 test cases below FIRST (include an edge case).
// 2. Solve without AI. 3. One-line comment explaining your approach.

// Seed the max from word 0, then scan the rest in one pass. The comparison is
// strict `<`, so a later word of equal length never displaces an earlier one —
// that alone implements the "tie goes to the first" rule. Empty segments from
// runs of spaces have length 0 and can never win, so no trim() is needed.
function longestWord(sentence) {
  const arr = sentence.split(' ')
  let maxLen = arr[0].length
  let index = 0

  for (let i = 1; i < arr.length; i++) {
    if (maxLen < arr[i].length) {
      maxLen = arr[i].length
      index = i
    }
  }

  return arr[index]
}

// Tests
const assert = require('node:assert')

assert.strictEqual(longestWord('I love JavaScript a lot'), 'JavaScript')
assert.strictEqual(longestWord('cats dogs'), 'cats') // tie -> first wins (fails if `<=`)
assert.strictEqual(longestWord('ab cd ef'), 'ab') // three-way tie -> first
assert.strictEqual(longestWord('short longestword mid'), 'longestword') // winner in the middle
assert.strictEqual(longestWord('tiny gigantic'), 'gigantic') // winner last
assert.strictEqual(longestWord('solo'), 'solo') // single word
assert.strictEqual(longestWord('a  bb'), 'bb') // space run -> empty segments ignored
assert.strictEqual(longestWord(' lead trail '), 'trail') // untrimmed ends, empty segments ignored
assert.strictEqual(longestWord(''), '') // empty input
assert.strictEqual(longestWord('   '), '') // whitespace only
assert.strictEqual(longestWord('hello, world'), 'hello,') // punctuation counts as part of the word

console.log('longestWord: all tests passed')
