import {RatingsSitesEnum} from '_utils/enums';
import {ImageSourcePropType} from 'react-native';

export interface MovieDetailsResponse {
  Title: string;
  Year: string;
  Runtime: string;
  Genre: string;
  Actors: string;
  Plot: string;
  Poster: string;
  imdbRating: string;
  Ratings: MovieRatingResponse[];
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
  ratings: MovieRating[];
}

export interface MovieRatingResponse {
  Source: RatingsSitesEnum;
  Value: string;
}

export interface MovieRating {
  icon: ImageSourcePropType;
  value: string;
}
