// Problem: flattenOnce(arr)
// [1, [2, 3], [4, [5]]] -> [1, 2, 3, 4, [5]]
// No .flat().
//
// 1. Write 2-3 test cases below FIRST (include an edge case).
// 2. Solve without AI. 3. One-line comment explaining your approach.

// One pass: a non-array element is pushed as-is, an array element is spread so
// its items are pushed individually. Spreading unwraps exactly one level, so
// anything nested deeper stays wrapped without needing a special case — that is
// the whole "once". Equivalent to arr.flat(1), except flat() drops holes in
// sparse arrays and this keeps them as undefined.
function flattenOnce(arr) {
  const res = []

  for (const item of arr) {
    if (Array.isArray(item)) {
      res.push(...item)
    } else {
      res.push(item)
    }
  }

  return res
}

// Tests
const assert = require('node:assert')

assert.deepStrictEqual(flattenOnce([1, [2, 3], [4, [5]]]), [1, 2, 3, 4, [5]]) // the spec case
assert.deepStrictEqual(flattenOnce([]), []) // empty input
assert.deepStrictEqual(flattenOnce([1, 2, 3]), [1, 2, 3]) // nothing to flatten
assert.deepStrictEqual(flattenOnce([[1], [2], [3]]), [1, 2, 3]) // every element an array
assert.deepStrictEqual(flattenOnce([[], []]), []) // inner arrays empty -> nothing pushed
assert.deepStrictEqual(flattenOnce([1, [], 2]), [1, 2]) // an empty array contributes nothing

// Depth: exactly one level comes off, never more.
assert.deepStrictEqual(flattenOnce([[[1]]]), [[1]]) // three deep -> two deep
assert.deepStrictEqual(flattenOnce([1, [2, [3, [4]]]]), [1, 2, [3, [4]]]) // stops after one
assert.deepStrictEqual(flattenOnce([[[[9]]]]), [[[9]]]) // four deep -> three deep

// Mixed and non-numeric values survive untouched.
assert.deepStrictEqual(flattenOnce(['a', ['b', 'c']]), ['a', 'b', 'c'])
assert.deepStrictEqual(flattenOnce([null, [undefined], [0, false]]), [null, undefined, 0, false])

// Objects are not arrays, so they are never unpacked.
assert.deepStrictEqual(flattenOnce([{ a: 1 }, [{ b: 2 }]]), [{ a: 1 }, { b: 2 }])

// The input must not be mutated, and the result must be a new array.
const original = [1, [2, 3]]
const out = flattenOnce(original)
out.push(99)
assert.deepStrictEqual(original, [1, [2, 3]])
assert.notStrictEqual(out, original)

// Documented divergence from flat(): holes become undefined rather than vanishing.
assert.deepStrictEqual(flattenOnce([1, , 3]), [1, undefined, 3])

console.log('flattenOnce: all tests passed')
