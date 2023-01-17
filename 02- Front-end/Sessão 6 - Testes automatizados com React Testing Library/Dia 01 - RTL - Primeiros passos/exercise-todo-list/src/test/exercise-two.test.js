import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import Item from '../Item';

describe('Teste do campo de input', () => {
  test('Testando a adição de vários itens a aplicação', () => {
    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água']; // Use esse array como base para realizar os testes.
    render(<App />); // Caso precise de uma nova query adicione no object destructuring

    const inputTask = screen.getByLabelText('Tarefa:');
    const btnAdd = screen.getByText('Adicionar');

    listTodo.forEach((task) => {
      userEvent.type(inputTask, task);
      userEvent.click(btnAdd);
    });

    listTodo.forEach((task) => {
      const currentTask = screen.getByText(task);
      expect(currentTask).toBeInTheDocument();
    });
  });
});

describe('Teste do componente Item', () => {
  test('Ao receber uma string como prop ela precisa aparecer na tela', () => {
    render(<Item content="limpar a casa" />);
    expect(screen.getByText('limpar a casa')).toBeInTheDocument();
  });
});
