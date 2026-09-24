function Person(name) {
  this.name = name
}

const obj = { name: 'obj' }
const BoundPerson = Person.bind(obj)
BoundPerson()

const p = new BoundPerson('Asha')

console.log(p.name)
console.log(obj.name)
