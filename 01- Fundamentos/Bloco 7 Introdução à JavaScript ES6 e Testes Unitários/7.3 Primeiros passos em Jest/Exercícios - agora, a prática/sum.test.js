const sum = require('./sum');

describe('Test sum function', () =>{
  test('Return 9, if sum(4, 5)', () => {
    expect(sum(4, 5)).toEqual(9);
  });

  test('Return 0, if sum(0, 0)', () => {
    expect(sum(0, 0)).toEqual(0);
  });

  test('Return an Error when one of parameters is a string', () => {
    expect(() => {sum(4, '5');}).toThrow();
  });

  test('Return Error message parameters must be numbers' , () => {
    expect(() => {sum(4, '5');}).toThrow('parameters must be numbers');
  });
});

