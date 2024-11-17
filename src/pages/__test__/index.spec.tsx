import React from 'react';
import { MemoryRouter } from 'react-router';
import { render } from '@testing-library/react';
import { store } from 'src/redux/store';
import { Provider } from 'react-redux';
import FilmDetails from '../FilmDetails/FilmDetails';
import FilmsPage from '../FilmsPage/FilmsPage';
jest.mock('axios', () => {
  return { create: jest.fn };
});
jest.mock('src/components/Rates/Rates.tsx', () => {
  {
    const MockRates = () => <div>Rates</div>;
    return MockRates;
  }
});
describe('Check all pages rendering', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(jest.fn);
    jest.spyOn(console, 'warn').mockImplementation(jest.fn);
  });
  it('Check rendering FilmDetails', function () {
    const document = render(
      <Provider store={store}>
        <MemoryRouter>
          <FilmDetails />
        </MemoryRouter>
      </Provider>
    );
    expect(document.getByText('Release:')).toBeDefined();
    expect(document.getByText('Genres:')).toBeDefined();
  });
  it('Check rendering FilmsPage', function () {
    const document = render(
      <Provider store={store}>
        <MemoryRouter>
          <FilmsPage />
        </MemoryRouter>
      </Provider>
    );
    expect(document.getByText('No results')).toBeDefined();
  });
});
