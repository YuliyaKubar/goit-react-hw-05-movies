import getPopularFilms from 'components/Api/Api';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import css from './HomePage.module.css';

const HomePage = () => {
  const [films, setFilms] = useState(null);

  useEffect(() => {
    getPopularFilms()
      .then(response => setFilms(response.results))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {films &&
          films.map(film => (
            <li key={film.id} className={css.item}>
              <Link to={`movies/${film.id}`} className={css.link}>
                {film.title}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default HomePage;
