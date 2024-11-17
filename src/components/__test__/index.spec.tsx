import React from 'react';
import { MemoryRouter } from 'react-router';
import { render } from '@testing-library/react';
import {
  ErrorBoundary,
  Loading,
  FilmCard,
  CustomInput,
  CustomPagination,
  Rates,
  SearchPanel
} from '../';

describe('Check all components rendering', () => {
  beforeEach(() => {
    jest.spyOn(console, 'warn').mockImplementation(jest.fn);
  });
  it('Check rendering ErrorBoundary with error', function () {
    const document = render(
      <ErrorBoundary error="Some error..."></ErrorBoundary>
    );
    expect(document.getByText('Some error...')).toBeDefined();
  });
  it('Check rendering ErrorBoundary without error', function () {
    const document = render(
      <ErrorBoundary error="">
        <div>Children</div>
      </ErrorBoundary>
    );
    expect(document.getByText('Children')).toBeDefined();
  });
  it('Check rendering ErrorBoundary without error', function () {
    const document = render(
      <ErrorBoundary error="">
        <div>Children</div>
      </ErrorBoundary>
    );
    expect(document.getByText('Children')).toBeDefined();
  });
  it('Check rendering ErrorBoundary without error', function () {
    const filmMockProps = {
      adult: true,
      backdrop_path: '',
      genre_ids: [11],
      id: 123,
      media_type: 'some',
      original_language: 'en',
      original_title: 'Some title',
      overview: 'overviw',
      popularity: 123,
      poster_path: 'path',
      release_date: '12.11.2024',
      title: 'title',
      video: true,
      vote_average: 123,
      vote_count: 111
    };
    const document = render(
      <MemoryRouter>
        <FilmCard film={filmMockProps} />
      </MemoryRouter>
    );
    expect(document.getByText('Some title')).toBeDefined();
  });
  it('Check rendering CustomInput ', function () {
    const document = render(
      <CustomInput onChange={jest.fn} defaultValue="Value" />
    );
    expect(document.findByPlaceholderText('Search film')).toBeDefined();
  });
  it('Check rendering Loading', function () {
    const document = render(<Loading />);
    expect(document).toBeDefined();
  });
  it('Check rendering CustomPagination', function () {
    const document = render(
      <MemoryRouter>
        <CustomPagination page="1" pagesCount={8} />
      </MemoryRouter>
    );
    expect(document.getByText('1')).toBeDefined();
  });
  it('Check rendering Rates', function () {
    const document = render(<Rates vote_average={7} />);
    expect(document).toBeDefined();
  });
  it('Check rendering SearchPanel', function () {
    const document = render(
      <MemoryRouter>
        <SearchPanel />
      </MemoryRouter>
    );
    expect(document.getByPlaceholderText('Search film')).toBeDefined();
  });
});
