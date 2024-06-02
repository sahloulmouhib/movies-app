export interface MovieResponse {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface Movie {
  title: string;
  yearOfRelease: string;
  imdbId: string;
  poster: string;
}

export interface MovieListResponse {
  Search: MovieResponse[];
  totalResults: number;
  Response: 'True' | 'False';
}

export interface MovieList {
  data: Movie[];
}
