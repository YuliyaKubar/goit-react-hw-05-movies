import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import Cast from './Cast/Cast';
import MovieDetails from './MovieDetails/MovieDetails';
import Layout from './Layout/Layout';
import Reviews from 'components/Reviews/Reviews';

const StartPage = lazy(() => import('../pages/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <StartPage />
            </Suspense>
          }
        />
        <Route
          path="movies"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <MoviesPage />
            </Suspense>
          }
        />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
export default App;
