# JavaScript Deep Mastery Syllabus

> **Objective:** Deeply internalize JavaScript through first-principles reasoning, blank-screen implementation, experimentation, testing, debugging, and transfer.
>
> **Scope:** JavaScript that leads into React, real frontend projects, and later backend/AI work. Runtime-engineer deep dives are parked in [Deferred](#deferred).
>
> **Cadence:** 1 module = 2 weeks = 56 hours → 14h theory · 39h coding · 3h AI. See [FRAMEWORK.md](FRAMEWORK.md).

## Roadmap

| # | Module | Covers | Weeks | Status |
|---|---|---|---|---|
| M1 | Functions, invocation & `this` | §1 | 2026-09-17 → 09-29 | ✅ built · 🔁 retest pending |
| M2 | Objects, prototypes & property mechanics | §2, §4 | 2026-09-29 → 10-12 | ▶ current |
| M3 | Scope, closures & functions as values | §3, §5 | 10-13 → 10-26 | |
| M4 | Arrays, coercion & deep clone | §6, §7, §8 | 10-27 → 11-09 | |
| M5 | Promises & combinators | §9, §10 | 11-10 → 11-23 | |
| M6 | Event loop & async control | §11, §12 | 11-24 → 12-07 | |
| M7 | Events, observables & async iterators | §13, §14 | 12-08 → 12-21 | |
| M8 | DOM, events & autocomplete | §15, §16 | 12-22 → 2027-01-04 | |
| M9 | UI components without libraries | §17, §18, §19 | 01-05 → 01-18 | |
| M10 | Router, storage, workers & performance | §20–§23 | 01-19 → 02-01 | |
| M11 | Signals & virtual DOM | §28, §29 | 02-02 → 02-15 | |
| M12 | State manager + Tiny React capstone | §30, Capstone A | 02-16 → 03-01 | |

After M12 → React track (rebuild a real project), then backend / AI / system design. Dates shift if a module slips; the order doesn't.

**Module rule:** a module ends after 2 weeks even if its mastery test isn't passed. Unpassed items go to [learning/review.md](learning/review.md) for a retest 3–4 days later (pass = 80%+).

---

# M1 — Functions, Invocation & `this`

**Lab:** [00-labs/this/](00-labs/this/)

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
- [x] `this` in classes
- [x] `this` in class fields
- [x] `this` in event handlers

### Mastery test

- [ ] Predict `this` before running code — 2026-09-29: ~50%, retest due 2026-10-03
- [ ] Explain every result without looking at notes
- [x] Reimplement `call/apply/bind` from blank

---

# M2 — Objects, Prototypes & Property Mechanics

**Lab:** `00-labs/prototypes/`

## 2. Objects, Prototypes & Classes

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

## 4. Object Property Mechanics

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

- [ ] Explain property lookup through the prototype chain
- [ ] Explain what `new` actually does
- [ ] Explain classes as syntax over the prototype system
- [ ] Create an object using descriptors
- [ ] Explain accessor vs data properties
- [ ] Explain shallow vs deep freezing

---

# M3 — Scope, Closures & Functions as Values

**Lab:** `00-labs/closures/`

## 3. Scope, Closures & Modules

- [ ] Lexical scope
- [ ] Scope chain
- [ ] Closures
- [ ] Closure counter
- [ ] IIFE
- [ ] Module pattern
- [ ] ES modules
- [ ] Rewrite IIFE/module pattern using ES modules

## 5. Functions as Values

### Higher-order functions

- [ ] Functions as values
- [ ] Functions returning functions
- [ ] `once`
- [ ] `curry`
- [ ] `partial`
- [ ] `compose`
- [ ] `pipe`
- [ ] `memoize`
- [ ] Custom memoization keys

### Function timing

- [ ] `debounce`
- [ ] Leading execution
- [ ] Trailing execution
- [ ] Cancellation
- [ ] `throttle`

### Mastery test

- [ ] Explain why a closure can access an outer variable after the outer function returns
- [ ] Build private state from scratch
- [ ] Explain lexical environments conceptually
- [ ] Implement each higher-order function from blank
- [ ] Use them together in a real problem

---

# M4 — Arrays, Coercion & Deep Clone

**Lab:** `00-labs/arrays/`, `00-labs/coercion/`, `00-labs/clone/`

## 6. Arrays & Iteration

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

## 7. Equality, Coercion & Primitives

- [ ] Primitive values
- [ ] Truthiness
- [ ] `==` and `===`
- [ ] `+`
- [ ] `ToPrimitive`, `ToNumber`, `ToString`, `ToBoolean`
- [ ] Prediction lab: predict, then prove with executable experiments

## 8. Deep Clone & Equality

Build `deepClone` and `deepEqual`. Support:

- [ ] Primitives, objects, arrays
- [ ] `Date`, `RegExp`, `Map`, `Set`
- [ ] Circular references (`WeakMap` for traversal state)
- [ ] Shared references

### Mastery test

- [ ] Implement array methods from blank and explain their common mechanism
- [ ] Explain without a table: `[] == false`, `"" == 0`, `null == undefined`, `"5" + 2`, `"5" - 2`, `[] + []`
- [ ] Explain identity vs structural equality, and how cycle detection works

---

# M5 — Promises & Combinators

**Lab:** `00-labs/promise/`

## 9. Promises — build `MyPromise`

- [ ] V1: pending, fulfilled, rejected, `resolve`, `reject`
- [ ] V2: `then`, callback registration, chaining
- [ ] V3: `catch`, `finally`
- [ ] V4: thenable resolution, adoption, executor errors, microtask scheduling

## 10. Promise Combinators

- [ ] `Promise.all`
- [ ] `Promise.allSettled`
- [ ] `Promise.race`
- [ ] `Promise.any`
- [ ] `promisify`
- [ ] `Promise.withResolvers`

### Mastery test

- [ ] Explain state transitions, chaining and thenable assimilation
- [ ] Rebuild `MyPromise` from blank

---

# M6 — Event Loop & Async Control

**Lab:** `00-labs/event-loop/`, `00-labs/task-runner/`

## 11. Event Loop

- [ ] Call stack, microtasks, macrotasks
- [ ] `queueMicrotask`, `setTimeout`
- [ ] `process.nextTick`, `setImmediate`
- [ ] 20+ prediction snippets: predict → run → compare → explain

## 12. Async Control & Cancellation — build a Task Runner

- [ ] `sleep`, timeout
- [ ] Retry with exponential backoff and jitter
- [ ] Concurrency limits and task queue
- [ ] Cancellation with `AbortController`
- [ ] Errors and task state

```js
const runner = new TaskRunner({ concurrency: 3, retries: 2 })
runner.add(task)
runner.cancel(id)
```

### Mastery test

- [ ] Predict 5 unseen event-loop snippets
- [ ] Explain why an aborted fetch doesn't leave stale UI state

---

# M7 — Events, Observables & Async Iterators

**Lab:** `00-labs/events/`

## 13. Events & Observables

- [ ] EventEmitter: `on`, `off`, `once`, `emit`, error events
- [ ] Observable: subscription, `map`, `filter`, `take`, cleanup

## 14. Async Iterators

- [ ] Async iterable protocol
- [ ] Async generators and `for await...of`
- [ ] Paginated API iterator
- [ ] Async batching

### Mastery test

- [ ] Build EventEmitter from blank
- [ ] Explain push (observable) vs pull (iterator)

---

# M8 — DOM, Events & Autocomplete

**Lab:** `00-labs/dom/`

## 15. DOM & Events — tiny DOM utility library

- [ ] `$`, `on`, `create`, attributes, children, `render`
- [ ] Event delegation
- [ ] Basic text-node diffing
- [ ] Understand: DOM tree, propagation, capturing, bubbling

## 16. Autocomplete — no UI library

- [ ] Input handling + debounce
- [ ] Async requests, abort stale requests
- [ ] Keyboard navigation
- [ ] Loading and error states
- [ ] ARIA

### Mastery test

- [ ] Explain capture vs bubble vs delegation
- [ ] Autocomplete survives fast typing with no stale results

---

# M9 — UI Components Without Libraries

**Lab:** `00-labs/ui/`

## 17. Virtualized List (10,000 items → ~30 DOM nodes)

- [ ] Visible range calculation, scroll handling
- [ ] Node recycling, dynamic positioning
- [ ] Understand layout vs paint vs scripting

## 18. Modal & Focus Management

- [ ] Open/close, Escape key
- [ ] Focus trap, `inert`, restore previous focus

## 19. Drag-and-Drop Kanban

- [ ] Pointer events (`pointerdown/move/up`)
- [ ] Drag state, drop targets, position calculations

### Mastery test

- [ ] Explain why 10k DOM nodes are slow
- [ ] Modal passes a keyboard-only walkthrough

---

# M10 — Router, Storage, Workers & Performance

**Lab:** `00-labs/browser/`

## 20. Client Router

- [ ] `history.pushState`, `popstate`
- [ ] Route matching, params, nested routes, guards

## 21. Browser Storage

- [ ] `localStorage` and IndexedDB CRUD
- [ ] Versioning and migrations

## 22. Web Workers & Observers

- [ ] Promise-based worker bridge (request IDs, errors)
- [ ] `IntersectionObserver`, `ResizeObserver`

## 23. Browser Performance

- [ ] Measure → find bottleneck → hypothesis → fix → measure again
- [ ] Layout thrashing, long tasks, memory leaks — record before/after numbers

### Mastery test

- [ ] Fix one real slow page with recorded before/after numbers

---

# M11 — Signals & Virtual DOM

**Lab:** `00-labs/reactive/`

## 28. Reactive Signals

- [ ] `signal`, `computed`, `effect`
- [ ] Dependency tracking and cleanup
- [ ] Batching, glitch-free updates

## 29. Virtual DOM

- [ ] `h`, element and text nodes, props, events
- [ ] Diffing and keyed diff
- [ ] Components, state, effects

### Mastery test

- [ ] Explain how an effect knows what to re-run
- [ ] Explain why keys matter in list diffing

---

# M12 — State Manager + Tiny React Capstone

**Lab:** `00-labs/tiny-react/`

## 30. State Manager (Redux-style)

- [ ] Store, actions, reducers
- [ ] Middleware, selectors, memoization
- [ ] Time travel

## Capstone A — Tiny React

Combine VDOM + signals/state + components + effects + reconciliation, then rebuild one of your existing React projects with it.

### Mastery test

- [ ] Demo the capstone and explain every layer without notes

---

# Deferred

Not dropped, just parked. Pick up when a later track needs them.

**Moves to the backend track:**
- §24 HTTP server from `node:http` (routing, middleware, body parsing, static files, ETags)
- §25 Streams & backpressure
- §27 Worker pool

**Optional deep dives:**
- §26 WebSocket from scratch
- §31–33 Tokenizer → parser → interpreter (Capstone B)
- §34 Own test runner (use Vitest meanwhile)
- §35 Own benchmark runner
- Capstones C (Node runtime) and D (build tool)

**Ongoing, not a module:** §36 Prediction lab. Every module adds predict → run → compare → explain snippets to its lab.

**DSA:** deferred. When reintroduced, it serves as practice for these JavaScript concepts.
