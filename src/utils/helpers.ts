import {MovieDetailItemProps} from '_components/MovieDetailItem/MovieDetailItem';
import {MovieDetails} from '_models/MovieDetails/movieDetails.types';
import {ImageSourcePropType, Platform} from 'react-native';
import {icons} from './icons';
import {RatingsSitesEnum} from './enums';

export const IS_IOS = Platform.OS === 'ios';

export const getMovieDetailItemList = (
  details: MovieDetails,
): MovieDetailItemProps[] => {
  const {genre, runtime, imdbRating} = details;
  const genreList = genre.map(genreItem => ({
    title: genreItem,
  }));
  return [
    {
      title: imdbRating,
      icon: icons.STAR_OUTLINE,
    },
    ...genreList,
    {
      title: runtime,
      icon: icons.CLOCK_OUTLINE,
    },
  ];
};

export const getMovieRatingIcon = (
  source: RatingsSitesEnum,
): ImageSourcePropType => {
  switch (source) {
    case RatingsSitesEnum.Imdb:
      return icons.IMDB;
    case RatingsSitesEnum.RottenTomatoes:
      return icons.ROTTEN_TOMATOES;
    case RatingsSitesEnum.Metacritic:
      return icons.METACRITIC;
    default:
      return icons.IMDB;
  }
};
