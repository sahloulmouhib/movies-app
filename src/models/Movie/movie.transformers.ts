import {
  MovieResponse,
  Movie,
  MovieListResponse,
  MovieList,
} from './movie.types';

export const decodeMovie = (data: MovieResponse): Movie => ({
  title: data.Title,
  yearOfRelease: data.Year,
  imdbId: data.imdbID,
  poster: data.Poster,
});

export const decodeMovies = (data: MovieResponse[]): Movie[] =>
  data.map(decodeMovie);

export const decodeMovieList = (data: MovieListResponse): MovieList => {
  if (data.Response === 'True') {
    return {
      data: decodeMovies(data.Search),
    };
  }
  return {
    data: [],
  };
};
