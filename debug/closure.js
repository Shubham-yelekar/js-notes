function makeMultipliers() {
  const result = [];
  for (let i = 1; i <= 3; i++) {
    result.push(function (num) {
      return num * i;
    });
  }
  return result;
}

const [double, triple, quadruple] = makeMultipliers();

console.log(double(2)); // Expected: 2 * 1 = 2
console.log(triple(2)); // Expected: 2 * 2 = 4
console.log(quadruple(2)); // Expected: 2 * 3 = 6
