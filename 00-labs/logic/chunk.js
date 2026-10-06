// Problem: chunk(arr, size)
// chunk([1, 2, 3, 4, 5], 2) -> [[1, 2], [3, 4], [5]]
//
// 1. Write 2-3 test cases below FIRST (include an edge case).
// 2. Solve without AI. 3. One-line comment explaining your approach.

// Walk the array in steps of `size`, taking a half-open slice [i, i + size) each
// time. Because the end index is exclusive, one group's end is the next group's
// start — no gap, no overlap — and the final slice is naturally short when the
// length isn't an exact multiple. `size` must be a positive integer: anything
// else fails to advance `i` and the loop never terminates, so it throws instead.
function chunk(arr, size) {
  if (!Number.isInteger(size) || size < 1) {
    throw new RangeError(`chunk: size must be a positive integer, got ${size}`)
  }

  const res = []

  for (let i = 0; i < arr.length; i += size) {
    res.push(arr.slice(i, i + size))
  }

  return res
}

// Tests
const assert = require('node:assert')

assert.deepStrictEqual(chunk([1, 2, 3, 4, 5], 2), [[1, 2], [3, 4], [5]]) // short remainder
assert.deepStrictEqual(chunk([1, 2, 3, 4, 5], 3), [[1, 2, 3], [4, 5]]) // uneven remainder
assert.deepStrictEqual(chunk([1, 2, 3, 4], 2), [[1, 2], [3, 4]]) // exact fit, no remainder
assert.deepStrictEqual(chunk([1, 4], 1), [[1], [4]]) // size 1 -> one item per group
assert.deepStrictEqual(chunk([1, 2], 5), [[1, 2]]) // size > length -> one short group
assert.deepStrictEqual(chunk([], 2), []) // empty input -> empty output
assert.deepStrictEqual(chunk([7], 3), [[7]]) // single item

// Always an array of arrays, never a flat passthrough.
assert.deepStrictEqual(chunk([1, 2], 2), [[1, 2]])

// The input must not be mutated, and the result must not alias it.
const original = [1, 2, 3]
const out = chunk(original, 3)
out[0].push(99)
assert.deepStrictEqual(original, [1, 2, 3])

// Invalid sizes throw instead of hanging the process.
assert.throws(() => chunk([1, 2, 3], 0), RangeError) // `i += 0` never advances
assert.throws(() => chunk([1, 2, 3], -1), RangeError) // runs backwards forever
assert.throws(() => chunk([1, 2, 3], 1.5), RangeError) // fractional steps
assert.throws(() => chunk([1, 2, 3], undefined), RangeError) // missing argument
assert.throws(() => chunk([1, 2, 3], NaN), RangeError) // NaN comparisons are always false

console.log('chunk: all tests passed')
