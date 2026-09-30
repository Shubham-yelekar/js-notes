# JavaScript Logic Sprint

> **Objective:** Build logic and confidence by solving problems in JavaScript from a blank file.
>
> **Window:** 2 weeks, 2026-09-30 → 2026-10-13. 4h/day, 56h total (14h theory · 39h coding · 3h AI). See [FRAMEWORK.md](FRAMEWORK.md).
>
> **Full deep-dive syllabus:** archived in [SYLLABUS-full.md](SYLLABUS-full.md). Pick it up after this sprint or during the React track.

## Roadmap

| Days  | Dates         | Focus                                    | Status                     |
| ----- | ------------- | ---------------------------------------- | -------------------------- |
| —     | 09-17 → 09-29 | M1 Functions, invocation & `this`        | ✅ built · 🔁 retest 10-03 |
| 1–2   | 09-30 → 10-01 | Arrays & strings logic                   | ▶ current                  |
| 3–4   | 10-02 → 10-03 | Objects & data shaping (+ `this` retest) |                            |
| 5–6   | 10-04 → 10-05 | Array methods from scratch               |                            |
| 7     | 10-06         | Recursion                                |                            |
| 8–9   | 10-07 → 10-08 | Closures & higher-order functions        |                            |
| 10–11 | 10-09 → 10-10 | Async logic                              |                            |
| 12    | 10-11         | Mini project: Shopping Cart              |                            |
| 13    | 10-12         | Final project: Task Runner               |                            |
| 14    | 10-13         | Mastery test + review                    |                            |

**Lab:** `00-labs/logic/` with one file per day.

**Daily rule:** for every problem, write 2–3 test cases first, solve it without AI, then explain it in one line. If you're stuck for more than 20 min, write down where you got stuck, use `/hint`, and move on.

---

## Days 1–2 — Arrays & strings

- [x] Reverse a string / reverse each word
- [x] Palindrome (ignore case and spaces)
- [x] Character frequency count
- [x] Anagram check
- [x] First non-repeating character
- [x] Remove duplicates (without `Set`, then with)
- [ ] Find max / second max
- [ ] Chunk an array into size `n`
- [ ] Flatten one level (no `.flat`)
- [ ] Rotate an array by `k`
- [ ] Two-sum (brute force, then with a hash map)
- [ ] Move zeros to the end
- [ ] Longest word in a sentence
- [ ] Capitalize each word
- [ ] Max subarray sum

## Days 3–4 — Objects & data shaping

- [ ] `groupBy(arr, key)`
- [ ] `countBy(arr, fn)`
- [ ] `pick(obj, keys)` / `omit(obj, keys)`
- [ ] `get(obj, 'a.b.c', default)`
- [ ] `set(obj, 'a.b.c', value)`
- [ ] Invert an object (keys ↔ values)
- [ ] Merge two objects, deep
- [ ] Transform API data: users + orders → `{ userName, totalSpent, orderCount }[]`
- [ ] Sort an array of objects by multiple keys
- [ ] **10-03:** `this` retest (see [learning/review.md](learning/review.md))

## Days 5–6 — Array methods from scratch

- [ ] `myMap`, `myFilter`, `myReduce` (with and without an initial value)
- [ ] `myFind`, `mySome`, `myEvery`
- [ ] `myFlat(depth)`
- [ ] Re-solve 5 problems from Days 1–4 using only `reduce`
- [ ] Explain: when does `reduce` without an initial value throw?

## Day 7 — Recursion

- [ ] Sum of nested arrays
- [ ] Flatten, any depth
- [ ] Simple deep clone (objects + arrays)
- [ ] Tree: sum and max depth of `{ value, children }`
- [ ] Permutations of a string

## Days 8–9 — Closures & higher-order functions

- [ ] Counter with private state
- [ ] `once`
- [ ] `memoize`
- [ ] `curry`
- [ ] `compose` / `pipe`
- [ ] `debounce`
- [ ] `throttle`

## Days 10–11 — Async logic

- [ ] `sleep(ms)`
- [ ] Predict 5 snippets: `setTimeout` vs `Promise.then` vs sync order
- [ ] `withTimeout(promise, ms)`
- [ ] `retry(fn, times)`, then add backoff
- [ ] `promiseAll`
- [ ] `runWithLimit(tasks, limit)`

## Day 12 — Mini project: Shopping Cart

- [ ] L1 `class Cart`: `add`, `remove`, `total`
- [ ] L2 rewrite with a constructor + prototype
- [ ] L3 `total` getter, read-only `id`, non-enumerable `items`
- [ ] L4 `DiscountCart extends Cart` + `static fromJSON`
- [ ] L5 fix a detached `cart.add` two ways

## Day 13 — Final project: Task Runner (60 min, no help)

- [ ] Concurrency limit
- [ ] Retry with backoff
- [ ] Timeout
- [ ] `pause` / `resume` / `cancel`
- [ ] `drain()` + `stats()`

## Day 14 — Mastery test

- [ ] 5 unseen problems, one from each of: arrays, objects, recursion, closures, async
- [ ] Solve each from a blank file within 15 min
- [ ] Explain each solution out loud
- [ ] Record the score in [learning/progress.md](learning/progress.md). Pass = 80%+

---

# Parked

Not dropped. Full details are in [SYLLABUS-full.md](SYLLABUS-full.md).

- **M2:** prototypes, `Object.create`, property descriptors, `deepFreeze`
- **M4:** coercion rules, full `deepClone`/`deepEqual` with cycles
- **M5:** build `MyPromise`, all combinators
- **M7:** EventEmitter, observables, async iterators
- **M8–M10:** DOM, autocomplete, virtualized list, modal, router, storage, workers, performance
- **M11–M12:** signals, virtual DOM, state manager, Tiny React
- **Backend:** HTTP server, streams, worker pool
