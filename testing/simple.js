function sum(a, b) {
  return a + b;
}

let actual = sum(1, 2);
let expected = 4;

if (actual !== expected) {
  throw new Error(`${actual} is not equal to ${expected}`);
}
// This is an ASSERTION
