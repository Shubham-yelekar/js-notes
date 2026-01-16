function sum(a, b) {
  return a + b;
}

// testing function
function test(title, callback) {
  try {
    callback();
    console.log(` 👍🏼 ${title} `);
  } catch (err) {
    console.error(`😵 ${title}`);
    console.error(err);
  }
}

// expect( a function) tobe ( a value)
function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
      console.log("Passed !");
    },
  };
}

test("sum adds number", () => {
  let actual = sum(1, 2);
  let expected = 4;
  expect(actual).toBe(expected);
});
