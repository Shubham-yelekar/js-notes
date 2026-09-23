# Concepts

Record durable understanding, not every definition encountered.

## YYYY-MM-DD: Concept

- **Learner's explanation:**
- **Corrected understanding:**
- **Example:**
- **Related concepts:**

## 2026-09-23: `this` with `new`

- **Learner's explanation:** `new Person('Shubham')` gives an object with `name`. Inside the constructor, `this` is a new `{}`. If the constructor returns an object, that object is returned instead. A method on `A.prototype` is reachable from the instance even though the instance doesn't own it.
- **Corrected understanding:** `new Constructor(...args)` runs 4 steps:
  1. Create an empty object.
  2. Link its `[[Prototype]]` to `Constructor.prototype`.
  3. Run `Constructor` with `this` set to that object.
  4. If the constructor returned an object or function, return that. Otherwise (a primitive, `undefined` or `null`), return the new object.

  Arrow functions can't be used with `new` because they have no `prototype` and no own `this`.
- **Example:** [00-labs/this/new.js](../00-labs/this/new.js)
  ```js
  function myNew(Constructor, ...args) {
    const obj = Object.create(Constructor.prototype)
    const result = Constructor.apply(obj, args)
    if (result !== null && (typeof result == 'object' || typeof result == 'function')) {
      return result
    }
    return obj
  }
  ```
- **Related concepts:** `call`/`apply`/`bind`, prototype chain, `Object.create`, arrow functions and lexical `this`, `this` in classes (next)
