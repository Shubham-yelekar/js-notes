export default Function.prototype.myBind = function (thisArg, ...argArray) {
  const sym = Symbol()
  let context = thisArg == null ? globalThis : Object(thisArg)

  Object.defineProperty(context, sym, { enumerable: false, value: this })
  return function (...args) {
    return context[sym](...argArray, ...args)
  }
}
function greet() {
  console.log(`Hi , ${this.name}`)
}

const fn = greet.myBind({ name: 'Shubham' })
fn()
