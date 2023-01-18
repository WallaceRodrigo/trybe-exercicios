import rollMultipleDice from '../service/rollMultipleDice';
import attackEnemy from '../service/attackEnemy';

jest.mock('../service/rollMultipleDice');

const enemy = {
  id: 1,
  name: 'Chapolin Colorado',
  source: 'Chaves',
  defensePoints: 30,
};

it('testa uma vitória na função `attackEnemy`', () => {
  rollMultipleDice.mockReturnValue(35);

  const result = attackEnemy(2, 20, enemy);
  expect(result.success).toBe(true);
});

it('testa uma derrota na função `attackEnemy`', () => {
  rollMultipleDice.mockReturnValue(25);

  const result = attackEnemy(2, 20, enemy);
  expect(result.success).toBe(false);
});

it('testa um empate nos dados, gerando derrota no `attackEnemy`', () => {
  rollMultipleDice.mockReturnValue(30);

  const result = attackEnemy(2, 20, enemy);
  expect(result.success).toBe(false);
});
