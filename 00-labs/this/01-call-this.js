'use strict'
const obj = {
  name: 'A',
  regular() {
    return this.name
  },
  arrow: () => this.name,
  nested() {
    return [1].map(() => this.name)
  },
}
console.log(obj.regular(), obj.arrow, obj.nested())
