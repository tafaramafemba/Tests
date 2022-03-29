const calculator  = require('./calculator');

describe('addition', () => {
  test('adds numbers', () => {
    expect(calculator.add(2, 5)).toBe(7);
  });
  test('adds numbers', () => {
    expect(calculator.add(9, 3)).toBe(12);
  });

  test('adds numbers', () => {
    expect(calculator.add(5, 2)).toBe(7);
  });
  
});

describe('subtract', () => {
  test('subtract numbers', () => {
    expect(calculator.subtract(5, 3)).toBe(2);
  });
  test('subtract numbers', () => {
    expect(calculator.subtract(9, 3)).toBe(6);
  });

  test('subtract numbers', () => {
    expect(calculator.subtract(6, 2)).toBe(4);
  });
  
});

describe('multiply', () => {
  test('multiply numbers', () => {
    expect(calculator.multiply(5, 3)).toBe(15);
  });
  test('multiply numbers', () => {
    expect(calculator.multiply(9, 3)).toBe(27);
  });

  test('multiply numbers', () => {
    expect(calculator.multiply(6, 2)).toBe(12);
  });
  
});

describe('divide', () => {
  test('divide numbers', () => {
    expect(calculator.divide(12, 3)).toBe(4);
  });
  test('divide numbers', () => {
    expect(calculator.divide(9, 3)).toBe(3);
  });

  test('divide numbers', () => {
    expect(calculator.divide(6, 2)).toBe(3);
  });
  
});