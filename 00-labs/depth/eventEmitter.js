// Problem: class EventEmitter — on, off, once, emit
// const e = new EventEmitter()
// const h = (msg) => console.log(msg)
// e.on('greet', h);  e.emit('greet', 'hi')  -> logs 'hi'
// e.off('greet', h); e.emit('greet', 'hi')  -> logs nothing
// e.once('greet', h); e.emit('greet', 'a'); e.emit('greet', 'b') -> logs 'a' only
//
// Questions to answer in your tests:
// - What data structure holds event -> handlers? Why Map over a plain object?
// - off() needs to remove ONE handler, not all. How do you identify it?
// - once() wraps the handler. So how does off('greet', original) find the wrapper?
// - If a handler calls off() DURING emit, does your loop break? (Real bug in real code.)
// - Should on() return an unsubscribe function? Most modern APIs do.
//
// 1. Write 2-3 test cases below FIRST (include an edge case).
// 2. Solve without AI. 3. One-line comment explaining your approach.

// Tests
