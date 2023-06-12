import { Link, useParams, Outlet, useLocation } from 'react-router-dom';
import getMovieDetails from 'components/Api/getMovieDetails';
import { useState, useEffect, Suspense, useRef } from 'react';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const [details, setDetails] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieDetails(movieId)
      .then(response => setDetails(response))
      .catch(err => console.error(err));
  }, [movieId]);

  const location = useLocation();
  const backToLink = useRef(location.state?.from ?? '/');

  return (
    <div>
      <Link to={backToLink.current} className={css.back}>
        Back
      </Link>
      <div>
        <img
          src={
            details.poster_path &&
            `https://image.tmdb.org/t/p/w500${details.poster_path}`
          }
          alt={`Poster for ${details.title}`}
          width={250}
          className={css.img}
        />
      </div>
      <div>
        <h1 className={css.title}>{details.title}</h1>
        <p className={css.title}>
          User score: {(details.vote_average * 10).toFixed(0)}%
        </p>
        <h2 className={css.title}>Overview</h2>
        <p className={css.title}>{details.overview}</p>
        <h3 className={css.title}>Genres</h3>
        <ul className={css.genres}>
          {details.genres &&
            details.genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
        </ul>
      </div>
      <p className={css.title}>Additional information</p>
      <Link to={'cast'} className={css.cast}>
        Cast
      </Link>
      <Link to={'reviews'} className={css.cast}>
        Reviews
      </Link>
      {/* <Suspense fallback={null} key={location.key}> */}
      <Outlet />
      {/* </Suspense> */}
    </div>
  );
};

export default MovieDetails;
