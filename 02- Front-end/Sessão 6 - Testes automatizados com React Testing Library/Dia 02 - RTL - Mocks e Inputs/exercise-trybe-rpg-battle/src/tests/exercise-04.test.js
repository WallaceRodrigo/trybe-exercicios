import { render, screen } from '@testing-library/react';
import App from '../App';

const character = [
  {
    id: 1,
    name: 'Chapolin Colorado',
    source: 'Chaves',
    defensePoints: 30,
  },
];

it('testa a requisição para a API', async () => {
  const fetchMock = {
    json: async () => character,
  };

  jest.spyOn(global, 'fetch').mockImplementation(async () => fetchMock);

  // jest.spyOn(global, 'fetch')
  //   .mockResolvedValue({
  //     json: jest.fn().mockResolvedValue(character),
  //   });

  render(<App />);

  const enemyEl = await screen.findByRole('heading', { name: 'Chapolin Colorado' });

  expect(enemyEl).toBeInTheDocument();
});
