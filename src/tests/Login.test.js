import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouterAndRedux } from './helpers/renderWith';

describe('Test the login page', () => {
  it('if there is a data-testid="email-input"', () => {
    renderWithRouterAndRedux(<App />);
    const emailInput = screen.getByTestId('email-input');
    expect(emailInput).toBeInTheDocument();
  });
  it('if there is a data-testid="password-input"', () => {
    renderWithRouterAndRedux(<App />);
    const passwordInput = screen.getByTestId('password-input');
    expect(passwordInput).toBeInTheDocument();
  });
  it('if the user is relocated to the correct path when entering the correct user data', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    userEvent.type(emailInput, 'test@test.com');
    userEvent.type(passwordInput, 'abcdef');
    const loginButton = screen.getByRole('button', { name: 'Entrar' });
    expect(loginButton).not.toBeDisabled();
    userEvent.click(loginButton);
    const { pathname } = history.location;
    expect(pathname).toBe('/carteira');
  });
});
