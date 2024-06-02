export interface MovieDetailsResponse {
  Title: string;
  Year: string;
  Runtime: string;
  Genre: string;
  Actors: string;
  Plot: string;
  Poster: string;
  imdbRating: string;
}

export interface MovieDetails {
  title: string;
  releaseDate: string;
  runtime: string;
  genre: string[];
  actors: string[];
  plot: string;
  poster: string;
  imdbRating: string;
}
