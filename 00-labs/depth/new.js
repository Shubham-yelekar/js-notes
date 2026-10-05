function myNew(Constructor, ...args) {
  // Step 1 + 2: create an empty object whose prototype is Constructor.prototype
  // hint: there is one Object.* method that does both at once
  const obj = Object.create(Constructor.prototype)

  // Step 3: run Constructor with `this` = obj, passing args
  // hint: you already built this tool yourself
  const result = Constructor.apply(obj, args)

  // Step 4: if result is an object (or function), return it; otherwise return obj
  // careful: typeof null === 'object'
  /* TODO */
  if (
    result !== null &&
    (typeof result == 'object' || typeof result == 'function')
  ) {
    return result
  }
  return obj
}

// ---- tests ----
function A() {
  this.x = 1
}
A.prototype.hello = function () {
  return 'hi'
}

function B() {
  this.x = 1
  return { y: 2 }
}

function C() {
  this.x = 1
  return 42
}

function D() {
  this.x = 1
  return null
}

const a = myNew(A)
console.log(a.x, a.hello()) // 1 'hi'
console.log(a instanceof A) // true
console.log(myNew(B)) // { y: 2 }
console.log(myNew(C)) // C { x: 1 }
console.log(myNew(D)) // D { x: 1 }
