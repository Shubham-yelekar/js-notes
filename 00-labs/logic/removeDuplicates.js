// Problem: removeDuplicates(arr)
// [1, 2, 2, 3, 1] -> [1, 2, 3]
// Solve once WITHOUT Set, then once with Set.
//
// 1. Write 2-3 test cases below FIRST (include an edge case).
// 2. Solve without AI. 3. One-line comment explaining your approach.

// function removeDuplicates(arr) {
//   // your code
//   const map = new Map()
//   for (const num of arr) {
//     if (map.has(num)) {
//       map.set(num, map.get(num) + 1)
//     } else {
//       map.set(num, 1)
//     }
//   }
//   return [...map.keys()]
// }

function removeDuplicates(arr) {
  const freq = new Set(arr)
  return [...freq]
}

// Tests

console.log(removeDuplicates([3, 1, 3, 2])) // [3, 1, 2]
console.log(removeDuplicates(['a', 'b', 'a'])) // ['a', 'b']
console.log(removeDuplicates([])) // []
