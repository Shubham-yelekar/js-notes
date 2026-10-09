# Depth — JavaScript, TypeScript, Logic, DSA

The one track with a hard rule: **no AI-written code, ever.** Blank file, your tests first, your solution. AI is allowed only for `/hint`, `/debug`, `/explain`, `/code-review`, and mastery tests.

For every concept item: **predict → read one source → write 3 lines in your own words.** For every drill: **2–3 test cases → solve → explain in one line.**

Labs: `00-labs/depth/` (concepts), `00-labs/logic/` (drills), `00-labs/dsa/` (patterns and structures).

---

## JavaScript internals

### Execution & scope

- [ ] Execution context: creation vs execution phase
- [ ] Scope chain and lexical scope
- [ ] Hoisting: `var` vs `let`/`const` vs function vs class
- [ ] TDZ — produce a TDZ error on purpose
- [ ] Closures: what is captured, a variable or a value?
- [ ] Closure in a loop with `var` vs `let` — explain the difference by mechanism
- [ ] Memory: when does a closure keep something alive too long?
- [ ] IIFE, module scope, block scope

### `this` & invocation

> Retest cleared 2026-10-05 at 3/3, up from ~50%. Remaining unticked items were never tested — finish those.

- [x] The call rules and their precedence: `new` > explicit (`call`/`apply`/`bind`) > implicit (method) > default
- [x] `call`, `apply`, `bind` — and `myCall`, `myApply`, `myBind` from scratch
- [x] `new` — the four things it does, and `myNew` from scratch
- [x] Arrow functions: no own `this`, and what that means inside an object literal vs a method vs a class field
- [ ] `this` in a detached method — three distinct fixes
- [x] `new` on a bound function — which `this` wins?
- [ ] `this` in a callback: `setTimeout`, `forEach` (with its `thisArg`), event handlers
- [ ] Strict vs sloppy mode default binding

### Objects & prototypes

- [ ] `[[Prototype]]`, `__proto__`, `Object.getPrototypeOf`, `prototype`
- [ ] Prototype chain lookup — write the lookup algorithm in words
- [ ] `class` as sugar: what it is *not* sugar for
- [ ] `extends`, `super`, and why `super()` must come first
- [ ] `instanceof` — implement `myInstanceof`
- [ ] `Object.create`, `Object.assign` (shallow!), `Object.freeze` → then `deepFreeze`
- [ ] Property descriptors: `writable`, `enumerable`, `configurable`
- [ ] Getters and setters, computed and `Symbol` keys
- [ ] `Proxy` + `Reflect` — build a logging proxy and a validation proxy
- [ ] Own vs inherited: `hasOwn`, `in`, `for...in` vs `Object.keys`

### Coercion & equality

- [ ] `ToPrimitive`, `valueOf`, `toString`, `Symbol.toPrimitive`
- [ ] `==` algorithm — write out the steps
- [ ] `===`, `Object.is`, `NaN`, `-0`
- [ ] `+` vs other operators on mixed types
- [ ] Truthiness, `??` vs `||`, `?.`
- [ ] Predict 10 notorious snippets and explain each by rule, not by memory

### Event loop & async

- [ ] Call stack, task queue, microtask queue, render step
- [ ] `setTimeout(0)` vs `Promise.resolve().then` vs `queueMicrotask` — exact order
- [ ] Promise states and the `then` contract
- [ ] `MyPromise` from scratch: `then`, chaining, thenable assimilation, errors
- [ ] `all`, `allSettled`, `any`, `race` from scratch
- [ ] `async`/`await` as generator + promise sugar
- [ ] Error handling: `try`/`catch` with `await`, unhandled rejections, `finally`
- [ ] `AbortController` and cancellation propagation
- [ ] Generators, iterators, `Symbol.iterator`, `Symbol.asyncIterator`, `for await`
- [ ] Streams basics: reader, backpressure at concept level

### Modules & runtime

- [ ] ESM vs CJS, live bindings, circular imports
- [ ] Tree shaking and side-effect-free modules
- [ ] `structuredClone`, `WeakMap`/`WeakRef` and what they're actually for

---

## TypeScript

- [ ] Types vs interfaces — when each is the right call
- [ ] Structural typing, excess property checks, widening vs literal types
- [ ] Unions, intersections, discriminated unions
- [ ] Narrowing: `typeof`, `in`, `instanceof`, truthiness, type predicates, `never` exhaustiveness
- [ ] Generics: parameters, constraints, defaults, inference
- [ ] `keyof`, `typeof`, indexed access, `as const`
- [ ] Mapped types, conditional types, `infer`, template literal types
- [ ] Utility types — then reimplement `Partial`, `Pick`, `Omit`, `Record`, `ReturnType`, `Awaited`
- [ ] Function typing: overloads, `this` param, generic callbacks
- [ ] `unknown` vs `any` vs `never`; why `any` is a hole in the type system
- [ ] Declaration merging, module declarations, `.d.ts`
- [ ] React typing: props, children, generic components, `ComponentProps`, refs, events
- [ ] `tsconfig` flags that matter: `strict`, `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`

---

## Logic drills

Pull 2–4 per day. Rule: blank file, tests first, no AI. Existing solutions are in `00-labs/logic/`.

### Strings

- [x] Reverse a string · reverse each word in place
- [x] Palindrome, ignoring case and non-alphanumerics
- [x] Character frequency count
- [x] Anagram check
- [x] First non-repeating character
- [x] Capitalize each word
- [x] Longest word
- [ ] Title case with exceptions
- [ ] Compress a string (`aaabb` → `a3b2`) and decompress it
- [ ] Longest substring without repeating characters
- [ ] Word frequency top-k from a paragraph
- [ ] Valid parentheses, multiple bracket types
- [ ] Roman numeral → integer, and back

### Arrays

- [x] Remove duplicates, with and without `Set`
- [x] Max and second max in one pass
- [x] Chunk into size `n`
- [x] Flatten one level without `.flat`
- [x] Rotate by `k` — extra array ✔; in place still to do
- [x] Two-sum: brute force, then a hash map
- [x] Move zeros to the end, preserving order, in place
- [x] Max subarray sum — brute force ✔; Kadane one-pass still to do
- [ ] Intersection and union of two arrays
- [ ] Merge two sorted arrays · merge overlapping intervals
- [ ] Array from scratch: `myMap`, `myFilter`, `myReduce` (with and without an initial value), `myFind`, `mySome`, `myEvery`, `myFlat(depth)`
- [ ] Re-solve five earlier drills using only `reduce`
- [ ] Explain: when does `reduce` with no initial value throw?

### Objects & Map/Set

- [ ] `groupBy(arr, keyOrFn)` · `countBy(arr, fn)`
- [ ] `pick(obj, keys)` · `omit(obj, keys)`
- [ ] `get(obj, 'a.b[0].c', fallback)` · `set(obj, 'a.b.c', value)`
- [ ] Invert keys ↔ values · deep merge two objects
- [ ] `deepClone` (objects, arrays, `Date`, `Map`, `Set`, cycles) · `deepEqual`
- [ ] Flatten a nested object to dot-paths, and unflatten it
- [ ] Sort an array of objects by multiple keys with directions
- [ ] Transform API data: `users` + `orders` → `{ userName, totalSpent, orderCount }[]`
- [ ] `Map` vs object: key types, ordering, iteration, when each wins
- [ ] `Set` operations: union, intersection, difference
- [ ] Build an `LRUCache` with `Map`

### Functions & closures

> These are the Week 1 build (the utility library), not drills. Labs live in `00-labs/depth/`, not `00-labs/logic/`.

- [x] Counter with private state
- [ ] `once` · `memoize` (with a custom key resolver)
- [ ] `curry` (fixed and variadic) · `partial`
- [ ] `compose` · `pipe`
- [ ] `debounce` (with `leading`/`trailing`) · `throttle`
- [ ] `sleep(ms)` · `withTimeout(promise, ms)`
- [ ] `retry(fn, times)` → then exponential backoff + jitter
- [ ] `runWithLimit(tasks, limit)` — concurrency pool
- [ ] `EventEmitter`: `on`, `off`, `once`, `emit`

---

## DSA

Small and deliberate. Interview-grade breadth is explicitly **not** the goal.

### Tier 1 — Core data

- [ ] Array: access, insert, delete, resize — real complexity, not folklore
- [ ] String immutability and why concatenation in a loop costs
- [ ] Object/hash map: hashing, collisions, average vs worst case
- [ ] `Map`, `Set`, `WeakMap` — guarantees and costs
- [ ] For every drill above: state time and space before you run it

### Tier 2 — Patterns

- [ ] Two pointers (same direction, opposite ends)
- [ ] Sliding window (fixed and variable size)
- [ ] Frequency map / counting
- [ ] Prefix sum and difference array
- [ ] Sorting: comparators, stability, when `O(n log n)` isn't the floor
- [ ] Binary search: exact, first/last occurrence, insertion point, on answer space

### Tier 3 — Structures

- [ ] Linked list: build, reverse, detect a cycle, find the middle
- [ ] Stack: build, then use it (parentheses, undo, next-greater-element)
- [ ] Queue and deque: build, then use it (BFS on a tree, rate limiting)

### Recursion & trees

- [ ] Recursion: base case, progress, call stack drawn by hand
- [ ] Sum nested arrays · flatten any depth · permutations of a string
- [ ] Tree `{ value, children }`: sum, max depth, find, map
- [ ] DFS pre/in/post order and BFS by level
- [ ] BST: insert, search, validate, in-order = sorted
- [ ] Heap / priority queue: insert, pop, heapify
- [ ] Walk a real file tree, then a real AST

---

## Mastery gates

One at the end of each depth-heavy week: 3–5 unseen questions, predict + explain, no notes, no running code. Record the score in [../learning/progress.md](../learning/progress.md). Below 80% → move on anyway and add a dated retest to [../learning/review.md](../learning/review.md).

| Gate | Covers | Week | Score |
| --- | --- | --- | --- |
| G1 | `this`, invocation, prototypes, coercion | 1 | |
| G2 | Event loop, promises, TypeScript | 2 | |
| G3 | React rendering, recursion, trees | 3 | |
| G4 | Logic + DSA Tiers 1–3 from a blank file | 7 | |
| G5 | Full-stack: data flow, auth, DB, caching | 12 | |
