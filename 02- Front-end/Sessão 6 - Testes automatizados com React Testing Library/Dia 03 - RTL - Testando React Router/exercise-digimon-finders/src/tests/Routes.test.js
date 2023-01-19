import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';

describe('Teste de Rotas', () => {
  it('Confere se o titulo e os links estão presentes na pagina', () => {
    renderWithRouter(<App />);

    const title = screen.getByRole('heading', { name: /search digimon/i });
    expect(title).toBeInTheDocument();

    const linkSearch = screen.getByRole('link', { name: /search digimon/i });
    const linkAbout = screen.getByRole('link', { name: /about/i });

    expect(linkSearch).toBeInTheDocument();
    expect(linkAbout).toBeInTheDocument();
  });

  it('Testa redirecionamento pra rota About, através do click no link', () => {
    const { history } = renderWithRouter(<App />);

    const linkAbout = screen.getByRole('link', { name: /about/i });
    userEvent.click(linkAbout);

    const { pathname } = history.location;
    expect(pathname).toBe('/about');

    const title = screen.getByRole('heading', { name: /about/i });
    expect(title).toBeInTheDocument();
  });

  it('Testa a rota NotFound', () => {
    const { history } = renderWithRouter(<App />);

    act(() => {
      history.push('/paginainexistente');
    });

    const { pathname } = history.location;
    expect(pathname).toBe('/paginainexistente');

    const title = screen.getByRole('heading', { name: /Page Not Found/i });
    expect(title).toBeInTheDocument();
  });
});
