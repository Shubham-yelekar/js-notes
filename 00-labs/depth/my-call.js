Function.prototype.myCall = function (thisArg, ...args) {
  context = thisArg || globalThis
  let SymbolFn = Symbol('fn')
  context[SymbolFn] = this
  let result = context[SymbolFn](...args)
  delete context.SymbolFn
  return result
}


function fn(n) { return this.id + n }
const user = { id: 10 }
console.log(fn.myCall(user, 2))
console.log(fn.myCall(null, 2))
