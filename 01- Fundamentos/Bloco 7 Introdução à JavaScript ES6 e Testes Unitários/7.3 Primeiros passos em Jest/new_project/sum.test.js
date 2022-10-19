const sum = (a, b) => a + b;

test('soma dois valores', () => {
  expect(sum(2, 3)).toEqual(5);
});
test('soma dois valores2', () => {
  expect(sum(5, 5)).toEqual(10);
});