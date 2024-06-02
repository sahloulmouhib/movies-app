import React from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import styles from './movieDetailsScreen.styles';

import {type NativeStackScreenProps} from '@react-navigation/native-stack';

import {MoviesStackParamList} from '_navigation/HomeStackNaigation/MoviesStackNavigation';
import {MOVIE_DETAILS_SCREEN} from '_utils/screenNames';
import useCustomQuery from '_rtkQuery/hooks/useCustomQuery';
import {MovieDetails} from '_models/MovieDetails/movieDetails.types';
import {useGetMovieDetailsQuery} from '_store/api/moviesApi';
import CustomLoaderAndErrorHandler from '_components/CustomLoaderAndErrorHandler copy/CustomLoaderAndErrorHandler';
import {icons} from '_utils/icons';
import MovieDetailItemList from '_components/MovieDetailItemList/MovieDetailItemList';
import ActorItemList from '_components/ActorItemList/ActorItemList';
import {SafeAreaView} from 'react-native-safe-area-context';
import {getMovieDetailItemList} from '_utils/helpers';
import {translate} from '_i18n';
import MovieRatingItemList from '_components/MovieIRatingtemList/MovieRatingItemList';

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

  return (
    <SafeAreaView edges={['bottom', 'left', 'right']} style={styles.container}>
      <CustomLoaderAndErrorHandler
        failedError={failedError}
        apiCall={refetch}
        isLoading={isLoading}>
        <>
          {data && (
            <ScrollView>
              <View>
                <Image
                  style={styles.image}
                  source={{uri: data.poster}}
                  defaultSource={icons.DEFAULT_PLACEHOLDER}
                />
                <ImageBackground
                  source={icons.OVERLAY}
                  resizeMode="cover"
                  imageStyle={styles.imageOverlayStyle}
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
                  <Text style={styles.categoryTitleText}>
                    {translate('movies.plot')}
                  </Text>
                  <Text style={styles.text}>{data.plot}</Text>
                </View>
                <View style={styles.categoryContainer}>
                  <Text style={styles.categoryTitleText}>
                    {translate('movies.cast')}
                  </Text>
                  <ActorItemList actors={data.actors} />
                </View>
                {data.ratings.length > 0 && (
                  <View style={styles.categoryContainer}>
                    <Text style={styles.categoryTitleText}>
                      {translate('movies.ratings')}
                    </Text>
                    <MovieRatingItemList list={data.ratings} />
                  </View>
                )}
              </View>
            </ScrollView>
          )}
        </>
      </CustomLoaderAndErrorHandler>
    </SafeAreaView>
  );
};

export default MovieDetailsScreen;
