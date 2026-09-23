# JavaScript Deep Mastery Syllabus

> **Objective:** Deeply internalize JavaScript through first-principles reasoning, blank-screen implementation, experimentation, testing, debugging, and transfer.
>
> **Current focus:** JavaScript only.
> **DSA is intentionally removed from this phase.**
> DSA will return later as a way to practice these JavaScript concepts.

---

# Phase 1 — JavaScript Language Mechanics

## 1. Functions, Invocation & `this`

- [x] Function invocation model
- [x] `this` in regular functions
- [x] Method calls
- [x] Detached functions
- [x] Arrow functions and lexical `this`
- [x] `call`
- [x] `apply`
- [x] `bind`
- [x] Implement `myCall`
- [x] Implement `myApply`
- [x] Implement `myBind`
- [x] `this` with `new`
- [ ] `this` in classes
- [ ] `this` in class fields
- [ ] `this` in event handlers

### Mastery test

- [ ] Predict `this` before running code
- [ ] Explain every result without looking at notes
- [ ] Reimplement `call/apply/bind` from blank

---

# 2. Objects, Prototypes & Classes

- [ ] Object property lookup
- [ ] `[[Prototype]]`
- [ ] Prototype chain
- [ ] `Object.create`
- [ ] Constructor functions
- [ ] `new`
- [ ] Implement `myNew`
- [ ] `instanceof`
- [ ] Implement `myInstanceOf`
- [ ] `prototype`
- [ ] Class syntax
- [ ] Rewrite a class using constructor functions
- [ ] `extends`
- [ ] `super`
- [ ] Static members

### Mastery test

- [ ] Explain property lookup through the prototype chain
- [ ] Explain what `new` actually does
- [ ] Explain classes as syntax over the prototype system

---

# 3. Scope, Closures & Modules

- [ ] Lexical scope
- [ ] Scope chain
- [ ] Closures
- [ ] Closure counter
- [ ] IIFE
- [ ] Module pattern
- [ ] ES modules
- [ ] Rewrite IIFE/module pattern using ES modules

### Mastery test

- [ ] Explain why a closure can access an outer variable after the outer function returns
- [ ] Build private state from scratch
- [ ] Explain lexical environments conceptually

---

# 4. Object Property Mechanics

- [ ] Property descriptors
- [ ] `writable`
- [ ] `enumerable`
- [ ] `configurable`
- [ ] Getters
- [ ] Setters
- [ ] Computed properties
- [ ] Read-only computed property
- [ ] `Object.assign`
- [ ] `Object.entries`
- [ ] `Object.fromEntries`
- [ ] `Object.freeze`
- [ ] Implement `deepFreeze`

### Mastery test

- [ ] Create an object using descriptors
- [ ] Explain accessor vs data properties
- [ ] Explain shallow vs deep freezing

---

# 5. Functions as Values

## Higher-order functions

- [ ] Functions as values
- [ ] Functions returning functions
- [ ] `once`
- [ ] `curry`
- [ ] `partial`
- [ ] `compose`
- [ ] `pipe`
- [ ] `memoize`
- [ ] Custom memoization keys

## Function timing

- [ ] `debounce`
- [ ] Leading execution
- [ ] Trailing execution
- [ ] Cancellation
- [ ] `throttle`

### Mastery test

- [ ] Implement each from blank
- [ ] Explain the closures involved
- [ ] Use them together in a real problem

---

# 6. Arrays & Iteration

Implement deeply:

- [ ] `map`
- [ ] `reduce`
- [ ] `flat`

Then implement:

- [ ] `filter`
- [ ] `find`
- [ ] `some`
- [ ] `every`
- [ ] `flatMap`

Understand:

- [ ] Callback execution
- [ ] Return semantics
- [ ] Sparse arrays
- [ ] Mutation vs non-mutation
- [ ] `thisArg`

### Mastery test

- [ ] Implement array methods from blank
- [ ] Explain the common mechanism behind them

---

# 7. Equality, Coercion & Primitives

- [ ] Primitive values
- [ ] Truthiness
- [ ] `==`
- [ ] `===`
- [ ] `+`
- [ ] `ToPrimitive`
- [ ] `ToNumber`
- [ ] `ToString`
- [ ] `ToBoolean`

Build a prediction laboratory.

- [ ] Predict `==` cases
- [ ] Predict mixed-type `+`
- [ ] Predict truthiness
- [ ] Prove predictions with executable experiments

### Mastery test

Be able to explain:

```js
[] == false
"" == 0
null == undefined
"5" + 2
"5" - 2
[] + []
```

without memorizing a table.

---

# Phase 2 — Objects as Graphs & Data

# 8. Deep Clone & Equality

Build:

```text
deepClone
deepEqual
```

Support:

- [ ] Primitives
- [ ] Objects
- [ ] Arrays
- [ ] `Date`
- [ ] `RegExp`
- [ ] `Map`
- [ ] `Set`
- [ ] Circular references
- [ ] Shared references

Understand:

- [ ] Object graphs
- [ ] Identity
- [ ] Reference equality
- [ ] Structural equality
- [ ] Cycle detection
- [ ] `WeakMap` for traversal state

---

# Phase 3 — JavaScript Async Runtime

# 9. Promises

Build `MyPromise`.

### V1

- [ ] Pending
- [ ] Fulfilled
- [ ] Rejected
- [ ] `resolve`
- [ ] `reject`

### V2

- [ ] `then`
- [ ] Callback registration
- [ ] Chaining

### V3

- [ ] `catch`
- [ ] `finally`

### V4

- [ ] Thenable resolution
- [ ] Promise adoption
- [ ] Resolution procedure
- [ ] Executor errors
- [ ] Microtask scheduling

### Mastery test

- [ ] Explain Promise state transitions
- [ ] Explain chaining
- [ ] Explain thenable assimilation
- [ ] Rebuild `MyPromise` from blank

---

# 10. Promise Combinators

Implement and understand:

- [ ] `Promise.all`
- [ ] `Promise.allSettled`
- [ ] `Promise.race`
- [ ] `Promise.any`
- [ ] `promisify`
- [ ] `Promise.withResolvers`

Understand:

```text
many async operations
        ↓
aggregation strategy
```

---

# 11. Event Loop

Build an event-loop experiment laboratory.

Understand:

- [ ] Call stack
- [ ] Microtasks
- [ ] Macrotasks/tasks
- [ ] Promise callbacks
- [ ] `queueMicrotask`
- [ ] `setTimeout`
- [ ] `process.nextTick`
- [ ] `setImmediate`

### Prediction exercises

- [ ] 20+ snippets
- [ ] Predict output before execution
- [ ] Run
- [ ] Compare
- [ ] Explain incorrect predictions

---

# 12. Async Control & Cancellation

Build an **Async Task Runner**.

Support:

- [ ] `sleep`
- [ ] Timeout
- [ ] Retry
- [ ] Exponential backoff
- [ ] Jitter
- [ ] Concurrency limits
- [ ] Task queue
- [ ] Cancellation
- [ ] `AbortController`
- [ ] Errors
- [ ] Task state

Target API:

```js
const runner = new TaskRunner({
  concurrency: 3,
  retries: 2,
})

runner.add(task)
runner.cancel(id)
```

---

# 13. Events & Observables

Build progressively:

```text
EventEmitter
      ↓
Observable
```

### EventEmitter

- [ ] `on`
- [ ] `off`
- [ ] `once`
- [ ] `emit`
- [ ] Error events

### Observable

- [ ] Subscription
- [ ] `map`
- [ ] `filter`
- [ ] `take`
- [ ] Cleanup

---

# 14. Async Iterators

- [ ] Async iterable protocol
- [ ] Async generators
- [ ] `for await...of`
- [ ] Paginated API iterator
- [ ] Async batching

Build:

```text
paginated API
      ↓
async generator
      ↓
for await...of
```

---

# Phase 4 — Browser JavaScript

# 15. DOM & Events

Build a tiny DOM utility library.

Implement:

- [ ] `$`
- [ ] `on`
- [ ] Event delegation
- [ ] `create`
- [ ] Attributes
- [ ] Children
- [ ] `render`
- [ ] Basic text-node diffing

Understand:

- [ ] DOM tree
- [ ] Event propagation
- [ ] Capturing
- [ ] Bubbling
- [ ] Delegation
- [ ] Rendering

---

# 16. Autocomplete

Build without a UI library.

Requirements:

- [ ] Input handling
- [ ] Debouncing
- [ ] Async requests
- [ ] Abort stale requests
- [ ] Keyboard navigation
- [ ] Loading state
- [ ] Error state
- [ ] ARIA
- [ ] Rendering

Concepts combined:

```text
DOM
+ events
+ debounce
+ Promise
+ AbortController
+ state
+ accessibility
```

---

# 17. Virtualized List

Build:

```text
10,000 items
       ↓
~30 DOM nodes
```

Implement:

- [ ] Visible range calculation
- [ ] Scroll handling
- [ ] Node recycling
- [ ] Dynamic positioning
- [ ] IntersectionObserver where useful

Understand:

- [ ] Why rendering 10k nodes is expensive
- [ ] Layout vs paint vs scripting
- [ ] DOM measurement

---

# 18. Modal & Focus Management

Build:

- [ ] Open/close
- [ ] Focus management
- [ ] Focus trap
- [ ] Escape key
- [ ] `inert`
- [ ] Restore previous focus
- [ ] Cleanup

---

# 19. Drag-and-Drop Kanban

No library.

Use:

- [ ] Pointer events
- [ ] `pointerdown`
- [ ] `pointermove`
- [ ] `pointerup`
- [ ] Drag state
- [ ] Drop targets
- [ ] Position calculations

---

# 20. Client Router

Build:

- [ ] `history.pushState`
- [ ] `popstate`
- [ ] Route matching
- [ ] Parameters
- [ ] Nested routes
- [ ] Guards
- [ ] Navigation lifecycle

---

# 21. Browser Storage

Create a small storage abstraction.

- [ ] `localStorage`
- [ ] IndexedDB
- [ ] CRUD
- [ ] Versioning
- [ ] Migrations

---

# 22. Web Workers & Browser Observers

Build a Promise-based Worker bridge.

- [ ] Worker messages
- [ ] Request IDs
- [ ] Promise resolution
- [ ] Errors
- [ ] Cancellation where appropriate

Understand:

- [ ] `IntersectionObserver`
- [ ] `ResizeObserver`
- [ ] Web Worker execution model

---

# 23. Browser Performance

Take a deliberately slow implementation.

Investigate with DevTools:

- [ ] Layout thrashing
- [ ] Forced synchronous layout
- [ ] Excessive rendering
- [ ] Long tasks
- [ ] Event frequency
- [ ] Memory leaks

Process:

```text
Measure
   ↓
Find bottleneck
   ↓
Hypothesis
   ↓
Fix
   ↓
Measure again
```

Record before/after numbers.

---

# Phase 5 — Node.js Internals

# 24. HTTP Server

Build from `node:http`.

Implement:

- [ ] Routing
- [ ] Middleware
- [ ] `next()`
- [ ] Request parsing
- [ ] Body parsing
- [ ] Static files
- [ ] ETags
- [ ] Error handling

---

# 25. Streams & Backpressure

Build:

```text
large file
    ↓
ReadStream
    ↓
Transform
    ↓
gzip
    ↓
line counter
    ↓
WriteStream
```

Understand:

- [ ] Chunks
- [ ] Streams
- [ ] Transform streams
- [ ] `pipe`
- [ ] Backpressure
- [ ] `highWaterMark`

---

# 26. WebSocket From Scratch

Understand:

- [ ] HTTP upgrade
- [ ] WebSocket handshake
- [ ] Frames
- [ ] Frame parser
- [ ] Messages
- [ ] Broadcast

Implement a minimal raw WebSocket server.

---

# 27. Worker Pool

Build:

```text
WorkerPool
    ↓
task queue
    ↓
workers
    ↓
results
    ↓
errors
```

Support:

- [ ] Concurrency
- [ ] Queue
- [ ] Task completion
- [ ] Errors
- [ ] Worker replacement

---

# Phase 6 — Build the Abstractions

# 28. Reactive Signals

Build:

```text
signal
computed
effect
```

Then add:

- [ ] Dependency tracking
- [ ] Dependency graph
- [ ] Cleanup
- [ ] Batching
- [ ] Glitch-free updates

---

# 29. Virtual DOM

Build:

```text
h()
 ↓
VDOM
 ↓
render
 ↓
diff
 ↓
keyed reconciliation
 ↓
components
 ↓
state
 ↓
effects
```

Implement:

- [ ] `h`
- [ ] Element creation
- [ ] Text nodes
- [ ] Props
- [ ] Events
- [ ] Diffing
- [ ] Keyed diff
- [ ] Components
- [ ] State
- [ ] Effects

---

# 30. State Manager

Build a Redux-style system.

- [ ] Store
- [ ] Actions
- [ ] Reducers
- [ ] Middleware
- [ ] Selectors
- [ ] Memoization
- [ ] Time travel
- [ ] Devtools-style logging

---

# Phase 7 — JavaScript Runtime

# 31. Tokenizer

Build a tokenizer for a small JavaScript subset.

Support:

- [ ] Numbers
- [ ] Strings
- [ ] Identifiers
- [ ] Operators
- [ ] Keywords
- [ ] Punctuation

---

# 32. Parser

Turn tokens into an AST.

Support:

```js
1 + 2 * 3

let x = 10

function add(a) {
  return a + x;
}

if (...) {}

while (...) {}
```

Understand:

- [ ] AST
- [ ] Operator precedence
- [ ] Expressions
- [ ] Statements
- [ ] Function declarations

---

# 33. Interpreter

Build:

```text
AST
 ↓
Environment
 ↓
Evaluation
```

Support:

- [ ] Variables
- [ ] Functions
- [ ] Function calls
- [ ] Scope
- [ ] Closures
- [ ] Return
- [ ] `if`
- [ ] `while`
- [ ] Errors

Then extend:

- [ ] Objects
- [ ] Property access
- [ ] Prototypes
- [ ] `this`
- [ ] `try/catch`

### Final goal

Understand JavaScript execution by implementing a small language yourself.

---

# Phase 8 — Mastery Infrastructure

These tools support the entire journey.

# 34. Local Test Runner

Build progressively.

### V1

- [ ] `describe`
- [ ] `it`
- [ ] `expect`

### V2

- [ ] `toBe`
- [ ] `toEqual`
- [ ] `toThrow`

### V3

- [ ] Async tests
- [ ] `beforeEach`
- [ ] `afterEach`

### V4

- [ ] Nested suites
- [ ] `only`
- [ ] `skip`
- [ ] Timeouts

### V5

- [ ] Diff output
- [ ] CLI
- [ ] File discovery
- [ ] Test filtering

---

# 35. Local Benchmark Runner

Build:

```bash
node bench.js
```

Measure:

- [ ] Function performance
- [ ] Data processing
- [ ] Clone performance
- [ ] Native vs custom implementations
- [ ] Before/after optimizations

Learn:

- [ ] Measurement
- [ ] Benchmark validity
- [ ] Warmup
- [ ] Variance
- [ ] Performance tradeoffs

---

# 36. Prediction Laboratory

Maintain experiments for:

```text
this
coercion
prototypes
Promise
event loop
async/await
DOM events
```

Every experiment follows:

```text
Predict
   ↓
Run
   ↓
Compare
   ↓
Explain
```

---

# Phase 9 — Capstones

Pick **two**.

## Capstone A — Tiny React

Combine:

```text
VDOM
+ signals/state
+ components
+ effects
+ reconciliation
```

Then rebuild one of your existing React projects with it.

---

## Capstone B — JavaScript Runtime

Combine:

```text
Tokenizer
+ Parser
+ AST
+ Environment
+ Interpreter
+ Objects
+ Prototypes
+ Closures
```

---

## Capstone C — Node Runtime

Combine:

```text
HTTP framework
+ Streams
+ WebSocket
+ Worker pool
+ persistence
```

Build a real-time application.

---

## Capstone D — Build Tool

Combine:

```text
Module resolution
+ dependency graph
+ bundling
+ dev server
+ HMR
```

Build a minimal frontend build system.

---

# DSA — Deferred

DSA is **not part of the current learning phase**.

When reintroduced, it should primarily serve as JavaScript
