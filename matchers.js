function toAppearInArray(received, expectedArray) {
    const pass = expectedArray.includes(received);
    if (pass) {
      return {
        message: () => `expected ${received} not to appear in the array`,
        pass: true,
      };
    } else {
      return {
        message: () => `expected ${received} to appear in the array`,
        pass: false,
      };
    }
  }
  
  expect.extend({
    toAppearInArray,
  });
  