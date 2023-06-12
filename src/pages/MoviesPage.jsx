import searchMovie from 'components/Api/searchMovie';
import { useState, useEffect } from 'react';

import { Link, useLocation, useSearchParams } from 'react-router-dom';

import css from './MoviesPage.module.css';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const [queryName, setQueryName] = useState(query);
  const [films, setFilms] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (queryName) {
      searchMovie(queryName)
        .then(response => {
          setFilms(response.results);
        })
        .catch(err => console.error(err));
    }
  }, [queryName]);

  useEffect(() => {
    !query && setSearchParams({});
  }, [query, setSearchParams]);

  const handleSubmit = e => {
    e.preventDefault();
    const inputValue = e.currentTarget.elements.input.value.trim();
    if (inputValue) {
      setQueryName(inputValue);
      setSearchParams({ query: inputValue });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={css.form}>
        <input name="input" type="text" className={css.input} />
        <button type="submit" className={css.btn}>
          Search
        </button>
      </form>
      <ul>
        {films &&
          films.map(film => (
            <li key={film.id} className={css.link}>
              <Link
                to={`${film.id}`}
                state={{ from: location }}
                className={css.link}
              >
                {film.title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default MoviesPage;
