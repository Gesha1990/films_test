import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { FilmsPage } from './pages';
import './App.css';

const FilmDetails = lazy(() => import('./pages/FilmDetails/FilmDetails'));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FilmsPage />} />
          <Route path="details/:id" element={<FilmDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
