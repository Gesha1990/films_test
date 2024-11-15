import React, { lazy, Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Loading } from 'src/components';

import './App.css';

const FilmsPage = lazy(() => import('./pages/FilmsPage/FilmsPage'));
const FilmDetails = lazy(() => import('./pages/FilmDetails/FilmDetails'));

const router = createBrowserRouter([
  { path: '/', element: <FilmsPage /> },
  { path: 'filmDetails/:id', element: <FilmDetails /> }
]);
function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />;
      </Suspense>
    </div>
  );
}
export default App;
