import {MovieDetailItemProps} from '_components/MovieDetailItem/MovieDetailItem';
import {MovieDetails} from '_models/MovieDetails/movieDetails.types';
import {Platform} from 'react-native';
import {icons} from './icons';

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
