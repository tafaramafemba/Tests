const stringLength = require('./stringLength')

test('Counts number of characters in string', () => {
  expect(stringLength("Hello")).toBe(5)
}) 
