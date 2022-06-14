import {
  MemoryRouter,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';

function setup(initialPath = '/') {
  const location = {};
  render(
    <MemoryRouter initialEntries={[initialPath]}>
      <App />
      <Routes>
        <Route
          path="*"
          element={React.createElement(() => {
            Object.assign(location, useLocation());
            return null;
          })}
        />
      </Routes>
    </MemoryRouter>,
  );
  return { location };
}

describe('Header', () => {
  test('navigate to home page', () => {
    const { location } = setup('/search/javascript');
    const linkElement = screen.getByRole('link', { name: /logo\.svg/i });

    expect(location.pathname).toBe('/search/javascript');

    userEvent.click(linkElement);

    expect(screen.getByText('home page')).toBeInTheDocument();
    expect(location.pathname).toBe('/');
  });

  test('navigate to search page', () => {
    const { location } = setup();
    const linkElement = screen.getByRole('link', { name: /search/i });

    expect(location.pathname).toBe('/');

    userEvent.click(linkElement);

    expect(screen.getByText('search page')).toBeInTheDocument();
    expect(location.pathname).toBe('/search/javascript');
  });

  test.each`
  link | hash
  ${'how it works'} | ${'#how-it-works'}
  ${'about'} | ${'#about'}
  `('navigates to  "$link" section when "$link" clicked', ({ link, hash }) => {
    setup();

    const linkElement = screen.getByRole('link', { name: new RegExp(link, 'i') });

    expect(linkElement).toHaveAttribute('href', hash);
  });
});
