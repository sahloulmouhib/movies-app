import {getMovieRatingIcon} from '_utils/helpers';
import {
  MovieDetails,
  MovieDetailsResponse,
  MovieRating,
  MovieRatingResponse,
} from './movieDetails.types';

export const decodeMovieDetails = (
  data: MovieDetailsResponse,
): MovieDetails => {
  return {
    title: data.Title,
    releaseDate: data.Year,
    runtime: data.Runtime,
    genre: data.Genre.includes(',') ? data.Genre.split(', ') : [data.Genre],
    actors: data.Actors.includes(',') ? data.Actors.split(', ') : [data.Actors],
    plot: data.Plot,
    poster: data.Poster,
    imdbRating: data.imdbRating,
    ratings: decodeMovieRatings(data.Ratings),
  };
};

export const decodeMovieRating = (data: MovieRatingResponse): MovieRating => {
  return {
    icon: getMovieRatingIcon(data.Source),
    value: data.Value,
  };
};

export const decodeMovieRatings = (
  data: MovieRatingResponse[],
): MovieRating[] => {
  return data.map(decodeMovieRating);
};
