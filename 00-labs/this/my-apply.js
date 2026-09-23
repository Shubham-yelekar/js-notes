"use strict"
Function.prototype.myApply = function (thisArg, argArray= []) {
  const sym = Symbol()
  let context = thisArg == null ? globalThis : Object(thisArg)

  Object.defineProperty(context, sym, { enumerable: true , configurable: true, value: this })
  const value = context[sym](...argArray)
  delete context[sym]
  return value
}
function greet() {
  console.log(`Hi , ${this.name}`)
}


const obj = { name: 'shubu' }
greet.myApply(obj)
console.log(Object.getOwnPropertySymbols(obj).length)
