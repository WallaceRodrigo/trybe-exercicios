import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';

const digimonMock = [
  {
    name: 'Agumon',
    level: 'Rookie',
    img: 'https://digimon.shadowsmith.com/img/agumon.jpg',
  },
];

describe('Teste da busca por digimon', () => {
  afterEach(() => jest.clearAllMocks());

  it('Testa o input de busca', () => {
    renderWithRouter(<App />);

    const serarchInput = screen.getByRole('textbox', { name: /Digimon/i });

    userEvent.type(serarchInput, 'Agumon');
    expect(serarchInput).toHaveValue('Agumon');
  });

  it('Testa se nenhum digimon é renderizado ao carregar a pagina', () => {
    renderWithRouter(<App />);

    const digimonName = screen.queryByTestId('digimonName');
    expect(digimonName).not.toBeInTheDocument();
  });

  it('Testa uma requisição sucedida pra API', async () => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(digimonMock),
    }));

    renderWithRouter(<App />);

    expect(global.fetch).toBeCalledTimes(0);

    const searchInput = screen.getByRole('textbox', { name: /Digimon/i });
    userEvent.type(searchInput, 'Agumon');

    const button = screen.getByRole('button', { name: /Search Digimon/i });
    userEvent.click(button);

    const digimonLevel = await screen.findByText('Level: Rookie');
    expect(digimonLevel).toBeInTheDocument();
    const digimonName = await screen.findByText(/Agumon/i);
    expect(digimonName).toBeInTheDocument();
    const digimonImage = await screen.findByText('Agumon');
    expect(digimonImage).toBeInTheDocument();

    expect(global.fetch).toBeCalledTimes(1);
    expect(global.fetch).toBeCalledWith(
      'https://digimon-api.vercel.app/api/digimon/name/Agumon',
    );
  });

  it('Mensagem de erro, caso o digimon não exista', async () => {
    const ErrorMsg = 'Pikachu is not a Digimon in our database.';

    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve({ ErrorMsg }),
    }));

    renderWithRouter(<App />);

    const searchInput = screen.getByRole('textbox', { name: /Digimon/i });
    userEvent.type(searchInput, 'Pikachu');

    const button = screen.getByRole('button', { name: /Search Digimon/i });
    userEvent.click(button);

    await screen.findByText('Pikachu is not a Digimon in our database.');

    expect(global.fetch).toBeCalledTimes(1);
  });

  it('caso o input seja vazio, o fetch não é realizado', () => {
    renderWithRouter(<App />);

    const searchInput = screen.getByRole('textbox', { name: /Digimon/i });
    userEvent.type(searchInput, '');

    const button = screen.getByRole('button', { name: /Search Digimon/i });
    userEvent.click(button);

    expect(global.fetch).toBeCalledTimes(0);
  });

  it('A busca falha (erro no servidor)', async () => {
    jest.spyOn(global, 'fetch');
    await global.fetch.mockRejectedValue(
      Error('Oops! Algo de errado não está certo!'),
    );

    jest.spyOn(global.console, 'log');

    renderWithRouter(<App />);

    const searchInput = screen.getByRole('textbox', { name: /Digimon/i });
    userEvent.type(searchInput, 'Teste');
    const button = screen.getByRole('button', { name: /Search Digimon/i });
    userEvent.click(button);

    await waitFor(() => {
      expect(global.fetch).toBeCalledTimes(1);
      expect(console.log).toBeCalledTimes(1);
      expect(console.log).toBeCalledWith(
        'Erro ao fazer a requisição: Error: Oops! Algo de errado não está certo!',
      );
    });
  });
});
