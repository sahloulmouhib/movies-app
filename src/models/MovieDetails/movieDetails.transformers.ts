import {MovieDetails, MovieDetailsResponse} from './movieDetails.types';

export const decodeMovieDetails = (
  data: MovieDetailsResponse,
): MovieDetails => {
  return {
    title: data.Title,
    releaseDate: data.Year,
    runtime: data.Runtime,
    genre: data.Genre.includes(',') ? data.Genre.split(',') : [data.Genre],
    actors: data.Actors.includes(',') ? data.Actors.split(',') : [data.Actors],
    plot: data.Plot,
    poster: data.Poster,
    imdbRating: data.imdbRating,
  };
};
