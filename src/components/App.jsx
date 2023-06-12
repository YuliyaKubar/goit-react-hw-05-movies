import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import Cast from './Cast/Cast';
import MovieDetails from './MovieDetails/MovieDetails';
import Layout from './Layout/Layout';
import Reviews from 'components/Reviews/Reviews';
import { useLocation } from 'react-router-dom/dist';

const StartPage = lazy(() => import('../pages/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage'));

const App = () => {
  const location = useLocation();
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <Suspense fallback={null} key={location.key}>
              <StartPage />
            </Suspense>
          }
        />
        <Route
          path="movies"
          element={
            <Suspense fallback={null} key={location.key}>
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
