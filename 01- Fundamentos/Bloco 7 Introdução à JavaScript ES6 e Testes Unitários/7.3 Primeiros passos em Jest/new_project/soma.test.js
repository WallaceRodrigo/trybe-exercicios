const soma = (a, b) => a + b;

test('soma dois valores', () => {
  expect(soma(2, 3)).toEqual(5);
});
test('soma dois valores2', () => {
  expect(soma(5, 5)).toEqual(10);
});