import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Item from '../Item';

import App from '../App';

describe('Testando a App.js', () => {
  it('Verificando se o label e o input existem no documento', () => {
    render(<App />);
    const labelTask = screen.getByText('Tarefa:');
    const inputTask = screen.getByLabelText('Tarefa:');

    expect(labelTask).toBeInTheDocument();
    expect(inputTask).toBeInTheDocument();
  });

  it('Verificando o tipo do input', () => {
    render(<App />);
    const inputTask = screen.getByLabelText('Tarefa:');
    expect(inputTask.type).toBe('text');
  });
});

describe('Testando a aplicação, testando botão, e sua funcionalidade', () => {
  it('Necessário um botão para adicionar a tarefa', () => {
    render(<App />);
    const addButton = screen.getByRole('button');
    expect(addButton).toBeInTheDocument();
  });

  it('Botão precisa conter o texto "Adicionar"', () => {
    render(<App />);
    const addButton = screen.getByRole('button');
    expect(addButton).toHaveTextContent('Adicionar');
  });

  it('Ao ser clicado a tarefa digitada pelo o usuário precisa ser salva.', () => {
    render(<App />);
    const TASK = 'Beber Agua';
    const addButton = screen.getByRole('button');
    const inputText = screen.getAllByLabelText('Tarefa:');

    userEvent.type(inputText, TASK);
    expect(screen.queryByText(TASK)).not.toBeInTheDocument();

    userEvent.click(addButton);
    expect(screen.queryByText(TASK)).not.toBeInTheDocument();
  });
});

describe('Testa a aplicação, e o input', () => {
  it('Testa a adição de vários itens a aplicação', () => {
    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água'];
    render(<App />);
    const inputTask = screen.getByLabelText('Tarefa:');
    const btnAdd = screen.getByText('Adicionar');

    listTodo.forEach((task) => {
      userEvent.type(inputTask, task);
      userEvent.click(btnAdd);
    });

    listTodo.forEach((task) => {
      expect(screen.getByText(task)).toBeInTheDocument();
    });
  });
});

describe('Testa o Componente item', () => {
  it('Ao receber uma string na props ela precisa aparecer na tela.', () => {
    render(<Item content="Limpar a casa" />);
    expect(screen.getByText('Limpar a casa')).toBeInTheDocument();
  });
});
