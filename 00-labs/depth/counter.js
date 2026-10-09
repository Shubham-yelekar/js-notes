// Problem: makeCounter()
// const c = makeCounter()
// c.inc() -> 1   c.inc() -> 2   c.dec() -> 1   c.value() -> 1
// The count must be UNREACHABLE from outside. c.count must be undefined.
// Then: makeCounter(10) starts at 10, and two counters must not share state.
//
// 1. Write 2-3 test cases below FIRST (include an edge case).
// 2. Solve without AI. 3. One-line comment explaining your approach.

// Tests
function makeCounter(num = 0) {
  let count = num //10
  return {
    inc: () => ++count,
    value: () => count,
    dec: () => --count,
  }
}
const c = makeCounter(10)
c.inc() //11
c.inc() // 12
c.dec() // 11
console.log(c.count) // undefined
console.log(c.value()) // 11
// function makeCounter(start = 0) {
//   let count = start /* ... */
//   return {
//     inc: () => ++count,
//     value: () => count,
//     dec: () => --count,
//   }
// }
// const c = makeCounter(null)

// console.log(makeCounter().value()) // start is ?
// console.log(makeCounter(undefined).value()) // start is ?

// console.log(c.value())
// console.log(c.dec())
// console.log(c.value()) // start is ?
