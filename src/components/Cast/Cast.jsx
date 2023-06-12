import getCast from 'components/Api/getCast';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import css from './Cast.module.css';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getCast(movieId)
      .then(response => setCast(response.cast.slice(0, 10)))
      .catch(err => console.error(err));
  }, [movieId]);

  return (
    <div>
      <ul className={css.cards}>
        {cast.map(actor => (
          <li key={actor.id} className={css.actor}>
            <img
              src={
                actor.profile_path &&
                `https://image.tmdb.org/t/p/w500${actor.profile_path}`
              }
              alt={`${actor.name}`}
              width={300}
            />
            <p>Name: {actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
