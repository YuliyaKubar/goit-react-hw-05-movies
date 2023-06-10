import getMovieReviews from 'components/Api/getMovieReviews';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import css from './Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId)
      .then(response => setReviews(response.results.slice(0, 5)))
      .catch(err => console.error(err));
  }, [movieId]);

  return reviews.length > 0 ? (
    <div>
      <ul>
        {reviews.map(review => (
          <li key={review.id} className={css.review}>
            <h2>{review.autor}</h2>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <p>We don't have any reviews for this movie</p>
  );
};

export default Reviews;
