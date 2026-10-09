// Problem: rotateArray(arr, k)
// rotateArray([1, 2, 3, 4, 5], 2) -> [4, 5, 1, 2, 3]
// What if k > arr.length?
//
// 1. Write 2-3 test cases below FIRST (include an edge case).
// 2. Solve without AI. 3. One-line comment explaining your approach.

function rotateArray(arr, k) {
  const newArr = []
  let shift = k

  if (k > arr.length) {
    shift = shift % arr.length
  }

  if (shift == arr.length) {
    return arr
  }

  for (let i = 0; i < arr.length; i++) {
    let newPos = i + shift
    if (newPos >= arr.length) {
      newPos = newPos % arr.length
      newArr[newPos] = arr[i]
    } else {
      newArr[newPos] = arr[i]
    }
  }
  // your code
  return newArr
}

// Tests
console.log(rotateArray([1, 2, 3, 4, 5], 5))
