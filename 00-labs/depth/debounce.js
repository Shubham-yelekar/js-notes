// Problem: debounce(fn, wait) and throttle(fn, wait)
// debounce: fire only after `wait` ms of SILENCE. Rapid calls collapse into one.
// throttle: fire at most once per `wait` ms, no matter how many calls arrive.
//
// Questions to answer in your tests:
// - State the difference in one sentence: a user types 10 chars fast.
//   How many calls with debounce? With throttle?
// - Which argument list does the eventual call receive: the first or the last?
// - Add a .cancel() method. What does it need to close over?
// - Stretch: debounce(fn, wait, { leading, trailing }).
//
// Test with setTimeout, and keep a call counter. No AI.
//
// 1. Write 2-3 test cases below FIRST (include an edge case).
// 2. Solve without AI. 3. One-line comment explaining your approach.

// Tests
