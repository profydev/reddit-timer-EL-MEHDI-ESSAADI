import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

function setup() {
  return render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
}

describe('Header', () => {
  test.each`
  testedLink | linkName | expectedHref
  ${'logo'} | ${'logo.svg'} | ${'/'}
  ${'search'} | ${/search/i} | ${'/search/javascript'}
  ${'how it works'} | ${/how it works/i} | ${'#how-it-works'}
  ${'about'} | ${/about/i} | ${'#about'}
  `('"$testedLink" link points to the correct page', ({ linkName, expectedHref }) => {
    setup();
    const link = screen.getByRole('link', { name: linkName });
    expect(link).toHaveAttribute('href', expectedHref);
  });
});
