import React, {useEffect} from 'react';
import {View, ListRenderItemInfo} from 'react-native';

import styles from './searchMoviesScreen.styles';

import {type NativeStackScreenProps} from '@react-navigation/native-stack';

import {SEARCH_MOVIES_SCREEN} from '_utils/screenNames';
import ScreenHeader from '_components/ScreenHeader/ScreenHeader';
import {translate} from '_i18n';
import CustomFlatList from '_components/CustomFlatList/CustomFlatlist';
import useCustomPaginationQuery from '_rtkQuery/hooks/useCustomPaginationQuery';
import {
  GetMovieListParams,
  useLazyGetMoviesListQuery,
} from '_store/api/moviesApi';
import {Movie} from '_models/Movie/movie.types';
import MovieItem from '_components/MovieItem/MovieItem';
import {MoviesStackParamList} from '_navigation/HomeStackNaigation/MoviesStackNavigation';
import CustomTextInput from '_components/CustomTextInput/CustomTextInput';
import {useSearch} from '_hooks/useSearch';

interface SearchMoviesScreenProps
  extends NativeStackScreenProps<
    MoviesStackParamList,
    typeof SEARCH_MOVIES_SCREEN
  > {}

const SearchMoviesScreen: React.FC<
  SearchMoviesScreenProps
> = (): JSX.Element => {
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
    const onPress = () => {};
    return <MovieItem onPress={onPress} movie={item} />;
  };

  useEffect(() => {
    getRefreshedData();
  }, [debouncedSearchText]);

  return (
    <View style={styles.container}>
      <ScreenHeader title={translate('movies.title')} />
      <CustomTextInput
        text={searchText}
        onChangeText={setSearchText}
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
    </View>
  );
};

export default SearchMoviesScreen;
