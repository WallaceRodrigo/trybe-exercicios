const myFizzBuzz = require("./myFizzBuzz");

describe ('Test myFizzBuzz Function', () => {

  test('fizzBuzz if division per 3 and 5', () => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz')
  });

  test('fizz if division per 3', () => {
    expect(myFizzBuzz(6)).toEqual('fizz')
  });

  test('buzz if division per 5', () => {
    expect(myFizzBuzz(10)).toEqual('buzz')
  });

  test('Not fizz nor buzz', () => {
    expect(myFizzBuzz(4)).toEqual(4)
  });

  test('Not a number', () => {
    expect(myFizzBuzz('number')).toEqual(false)
  });
});