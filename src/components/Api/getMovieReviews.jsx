const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYmI1MjY4ZWIyODk3OGMxOGNjNDljMTRhZWYwY2JlZiIsInN1YiI6IjY0ODBhNDQ5OTkyNTljMDBhY2NhYjFjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eQmnmcJyv2RVY8XEKUyTQI6-MpGBhc1MoKysfy_vGpM',
  },
};

const getMovieReviews = movieId =>
  fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`,
    options
  ).then(response => response.json());

export default getMovieReviews;
