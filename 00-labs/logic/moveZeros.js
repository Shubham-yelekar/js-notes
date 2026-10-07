// Problem: moveZeros(arr)
// [0, 1, 0, 3, 12] -> [1, 3, 12, 0, 0]
// Keep the order of non-zero items.
//
// 1. Write 2-3 test cases below FIRST (include an edge case).
// 2. Solve without AI. 3. One-line comment explaining your approach.

function moveZeros(arr) {
  // your code
  let x = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      if (i !== x) arr[x] = arr[i]
      x++
    }
  }
  for (let i = x; i < arr.length; i++) {
    arr[i] = 0
  }

  return arr
}

// One-line version: non-zeros first, then the zeros. Returns a new array.
const moveZerosOneLine = (arr) => [...arr.filter((n) => n !== 0), ...arr.filter((n) => n === 0)]

// Tests
console.log(moveZeros([0, 1, 0, 3, 12])) // [1, 3, 12, 0, 0]
console.log(moveZeros([1, 2, 3])) // [1, 2, 3]      no zeros, nothing moves
console.log(moveZeros([0, 0, 0])) // [0, 0, 0]      all zeros
console.log(moveZeros([])) // []             empty
console.log(moveZeros([0, 0, 1])) // [1, 0, 0]      zeros lead
console.log(moveZeros([4, 0, 0, 5])) // [4, 5, 0, 0]   order of non-zeros preserved
