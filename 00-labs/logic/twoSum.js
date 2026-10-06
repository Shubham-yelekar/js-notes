// Problem: twoSum(nums, target)
// twoSum([2, 7, 11, 15], 9) -> [0, 1] (indexes)
// Solve brute force first, then with a hash map (object or Map).
//
// 1. Write 2-3 test cases below FIRST (include an edge case).
// 2. Solve without AI. 3. One-line comment explaining your approach.

// Brute force. Check every unordered pair: the inner loop starts at i + 1, so an
// element never pairs with itself and (i, j) is never revisited as (j, i).
// Returns the first match and stops; [] when nothing matches, so the return type
// is an array on every path.
// Time O(n^2) — about n^2/2 comparisons. Space O(1).
function twoSumBrute(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }

  return []
}

// Hash map. One pass. At each element the number needed to complete the pair is
// fully determined (target - current), so instead of searching forward for it we
// ask whether we've already walked past it. `seen` maps value -> index, which is
// why we can return indexes and not just values. The lookup happens BEFORE the
// insert, so an element can't satisfy itself — and because a later duplicate
// still finds the earlier one, [3, 3] works without a special case.
// Time O(n). Space O(n) for the map.
function twoSumMap(nums, target) {
  const seen = new Map()

  for (let i = 0; i < nums.length; i++) {
    const need = target - nums[i]

    if (seen.has(need)) {
      return [seen.get(need), i]
    }

    seen.set(nums[i], i)
  }

  return []
}

// Tests
const assert = require('node:assert')

// Cases with exactly one valid pair — both versions must agree.
for (const twoSum of [twoSumBrute, twoSumMap]) {
  const name = twoSum.name

  assert.deepStrictEqual(twoSum([2, 7, 11, 15], 9), [0, 1], name) // the spec case
  assert.deepStrictEqual(twoSum([2, 7, 11, 15], 18), [1, 2], name) // pair in the middle
  assert.deepStrictEqual(twoSum([2, 7, 11, 15], 26), [2, 3], name) // pair at the end
  assert.deepStrictEqual(twoSum([3, 3], 6), [0, 1], name) // equal values, different indexes
  assert.deepStrictEqual(twoSum([0, 0], 0), [0, 1], name) // zeros, and target 0
  assert.deepStrictEqual(twoSum([-3, 5, 2], -1), [0, 2], name) // negatives
  assert.deepStrictEqual(twoSum([1, -1], 0), [0, 1], name) // cancelling pair

  // No match -> always an array, never undefined, so destructuring is safe.
  assert.deepStrictEqual(twoSum([2, 7, 11, 15], 14), [], name) // no two elements sum to 14
  assert.deepStrictEqual(twoSum([], 5), [], name) // empty input
  assert.deepStrictEqual(twoSum([5], 5), [], name) // one element can't pair
  assert.deepStrictEqual(twoSum([4], 8), [], name) // not 4 + itself

  const [a, b] = twoSum([2, 7, 11, 15], 14)
  assert.strictEqual(a, undefined, name)
  assert.strictEqual(b, undefined, name)
}

// When several pairs match, "the first pair" means different things.
// Brute force finds the smallest outer index first: 1 + 4.
// The map closes a pair as early as possible: 2 + 3 completes at index 2.
// Both are correct answers; neither function is wrong.
assert.deepStrictEqual(twoSumBrute([1, 2, 3, 4], 5), [0, 3])
assert.deepStrictEqual(twoSumMap([1, 2, 3, 4], 5), [1, 2])

// Inputs are never mutated.
const original = [2, 7, 11, 15]
twoSumBrute(original, 9)
twoSumMap(original, 9)
assert.deepStrictEqual(original, [2, 7, 11, 15])

console.log('twoSum: all tests passed (brute + map)')
