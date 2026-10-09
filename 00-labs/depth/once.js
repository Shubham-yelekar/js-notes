// Problem: once(fn)
// const init = once(() => { console.log('run'); return 42 })
// init() -> 42 and logs 'run'
// init() -> 42 and logs NOTHING (cached, fn never called again)
//
// Questions to answer in your tests:
// - What if fn returns undefined? Does your version re-run it? Should it?
// - Does `this` survive? once(obj.method).call(obj) should still work.
// - Are arguments forwarded on the first call?
//
// 1. Write 2-3 test cases below FIRST (include an edge case).
// 2. Solve without AI. 3. One-line comment explaining your approach.

// Tests
