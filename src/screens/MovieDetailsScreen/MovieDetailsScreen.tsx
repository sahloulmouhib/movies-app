import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import styles from './movieDetailsScreen.styles';

import {type NativeStackScreenProps} from '@react-navigation/native-stack';

import ScreenHeader from '_components/ScreenHeader/ScreenHeader';
import {translate} from '_i18n';
import {MoviesStackParamList} from '_navigation/HomeStackNaigation/MoviesStackNavigation';
import {MOVIE_DETAILS_SCREEN} from '_utils/screenNames';
import useCustomQuery from '_rtkQuery/hooks/useCustomQuery';
import {MovieDetails} from '_models/MovieDetails/movieDetails.types';
import {useGetMovieDetailsQuery} from '_store/api/moviesApi';
import CustomLoaderAndErrorHandler from '_components/CustomLoaderAndErrorHandler copy/CustomLoaderAndErrorHandler';
import {icons} from '_utils/icons';
import {MovieDetailItemProps} from '_components/MovieDetailItem/MovieDetailItem';
import MovieDetailItemList from '_components/MovieDetailItemList/MovieDetailItemList';

interface MovieDetailsScreenProps
  extends NativeStackScreenProps<
    MoviesStackParamList,
    typeof MOVIE_DETAILS_SCREEN
  > {}

const MovieDetailsScreen: React.FC<MovieDetailsScreenProps> = ({
  navigation,
  route,
}): JSX.Element => {
  const {id: movieId} = route.params;

  const onBackPress = () => {
    navigation.goBack();
  };

  const result = useGetMovieDetailsQuery({
    i: movieId,
  });
  const {data, failedError, refetch, isLoading} =
    useCustomQuery<MovieDetails>(result);

  const getMovieDetailItemList = (
    details: MovieDetails,
  ): MovieDetailItemProps[] => {
    const {genre, runtime, imdbRating} = details;
    console.log('details', details);
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
  return (
    <View style={styles.container}>
      <ScreenHeader title={translate('movies.title')} />
      <CustomLoaderAndErrorHandler
        failedError={failedError}
        apiCall={refetch}
        isLoading={isLoading}>
        <>
          {data && (
            <>
              <View>
                <Image
                  style={styles.image}
                  source={{uri: data.poster}}
                  defaultSource={icons.DEFAULT_PLACEHOLDER}
                />
                <ImageBackground
                  source={icons.OVERLAY}
                  resizeMode="cover"
                  style={styles.imageOverlay}>
                  <TouchableOpacity
                    style={styles.backButtonContainer}
                    onPress={onBackPress}>
                    <Image source={icons.SMALL_ARROW} style={styles.backIcon} />
                  </TouchableOpacity>
                  <View style={styles.movieReleasedDateAndTitleContainer}>
                    <Text style={styles.movieTitleText}>{data.title}</Text>
                    <Text style={styles.movieReleasedDateText}>
                      {data.releaseDate}
                    </Text>
                  </View>
                </ImageBackground>
              </View>
              <View style={styles.innerContainer}>
                <MovieDetailItemList items={getMovieDetailItemList(data)} />
                <View style={styles.categoryContainer}>
                  <Text style={styles.categoryTitleText}>{'Plot'}</Text>
                  <Text style={styles.text}>{data.plot}</Text>
                </View>
                <View style={styles.categoryContainer}>
                  <Text style={styles.categoryTitleText}>{'Cast'}</Text>
                  <View>
                    {data.actors.map(actor => (
                      <Text style={styles.text} key={actor}>
                        {actor}
                      </Text>
                    ))}
                  </View>
                </View>
              </View>
            </>
          )}
        </>
      </CustomLoaderAndErrorHandler>
    </View>
  );
};

export default MovieDetailsScreen;
