import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Testa as funcionalidades da aplicação', () => {
  it('Renderiza o App em seu estado inicial', () => {
    render(<App />);

    const labelInputText = screen.getByLabelText('Digimon');
    const searchBtn = screen.getByRole('button', { name: 'Search Digimon' });

    expect(labelInputText).toBeInTheDocument();
    expect(searchBtn).toBeInTheDocument();
    expect(labelInputText).toHaveValue('');
  });

  it('Insere um valor na caixa de busca', () => {
    render(<App />);

    const labelInputText = screen.getByLabelText('Digimon');
    expect(labelInputText).toHaveValue('');

    userEvent.type(labelInputText, 'Agumon');
    expect(labelInputText).toHaveValue('Agumon');
  });

  it('Busca por um digimon', async () => {
    const digimon = [{
      name: 'Agumon',
      level: 'Rookie',
      img: 'https://digimon.shadowsmith.com/img/agumon.jpg',
    }];

    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(digimon),
    });

    render(<App />);

    const labelInputText = screen.getByLabelText('Digimon');
    const searchBtn = screen.getByRole('button', { name: 'Search Digimon' });

    userEvent.type(labelInputText, 'Agumon');
    userEvent.click(searchBtn);

    await screen.findByText('Agumon');
    await screen.findByText('level: Rookie');
  });
});
