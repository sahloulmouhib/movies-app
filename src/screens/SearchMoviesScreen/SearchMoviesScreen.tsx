import React, {useEffect} from 'react';
import {ListRenderItemInfo} from 'react-native';

import styles from './searchMoviesScreen.styles';

import {type NativeStackScreenProps} from '@react-navigation/native-stack';

import {MOVIE_DETAILS_SCREEN, SEARCH_MOVIES_SCREEN} from '_utils/screenNames';
import ScreenHeader from '_components/ScreenHeader/ScreenHeader';
import {translate} from '_i18n';
import CustomFlatList from '_components/CustomFlatList/CustomFlatlist';
import useCustomPaginationQuery from '_rtkQuery/hooks/useCustomPaginationQuery';
import {
  GetMovieListParams,
  useLazyGetMoviesListQuery,
} from '_store/api/moviesApi';
import {Movie} from '_models/Movie/movie.types';
import {MoviesStackParamList} from '_navigation/HomeStackNaigation/MoviesStackNavigation';
import {useSearch} from '_hooks/useSearch';
import MovieItem from '_components/MovieItem/MovieItem';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomSearchBar from '_components/CustomSearchBar/CustomSearchBar';

interface SearchMoviesScreenProps
  extends NativeStackScreenProps<
    MoviesStackParamList,
    typeof SEARCH_MOVIES_SCREEN
  > {}

const SearchMoviesScreen: React.FC<SearchMoviesScreenProps> = ({
  navigation,
}): JSX.Element => {
  const {searchText, setSearchText, debouncedSearchText} = useSearch();
  const result = useLazyGetMoviesListQuery();
  const {
    data,
    failedError,
    isLoading,
    isRefreshing,
    refreshError,
    getDataOnMount,
    getRefreshedData,
    isLoadingMore,
    getMoreData,
    loadingMoreDataError,
  } = useCustomPaginationQuery<Movie, GetMovieListParams>(
    result,
    {
      s: debouncedSearchText,
    },
    'page',
  );

  const renderMovieItem = ({item}: ListRenderItemInfo<Movie>) => {
    const onPress = () => {
      navigation.navigate(MOVIE_DETAILS_SCREEN, {
        id: item.imdbId,
      });
    };
    return (
      <MovieItem
        movieItem={item}
        onPress={onPress}
        onRemoveButtonPress={onPress}
      />
    );
  };

  useEffect(() => {
    getRefreshedData();
  }, [debouncedSearchText]);

  return (
    <SafeAreaView style={styles.container}>
      <ScreenHeader title={translate('movies.title')} />
      <CustomSearchBar
        onChangeText={setSearchText}
        text={searchText}
        placeholder={translate('movies.search')}
      />
      <CustomFlatList<Movie>
        data={data}
        isLoading={isLoading}
        isRefreshing={isRefreshing}
        isLoadingMore={isLoadingMore}
        getDataOnMount={getDataOnMount}
        getMoreData={getMoreData}
        getRefreshedData={getRefreshedData}
        failedError={failedError}
        loadingMoreError={loadingMoreDataError}
        refreshError={refreshError}
        renderItem={renderMovieItem}
      />
    </SafeAreaView>
  );
};

export default SearchMoviesScreen;
