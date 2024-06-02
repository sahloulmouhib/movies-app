import React, {useMemo} from 'react';
import {FlatList, FlatListProps, ListRenderItem, View} from 'react-native';
import Toast from 'react-native-toast-message';

import DefaultEmptyListFlatList from './EmptyListFlatList/EmptyListFlatlist';
import FooterFlatList from './FooterFlatList/FooterFlatList';
import LoaderFlatList from './LoaderFlatList/LoaderFlatList';
import RefreshControlFlatList from './RefreshControlFlatList/RefreshControlFlatList';
import ErrorHandlerFlatList from './ErrorHandlerFlatList/ErrorHandlerFlatList';
import styles from './customFlatList.styles';
import {toastConfig} from '_utils/customToastConfig/toastConfig';

const ON_END_REACHED_THRESHOLD = 0.4;
interface CustomFlatListProps<T = any> extends FlatListProps<T> {
  data: T[];

  isLoading: boolean;
  isRefreshing: boolean;
  isLoadingMore?: boolean;

  getDataOnMount: () => void;
  getMoreData?: () => void;
  getRefreshedData: () => void;

  failedError?: string;
  loadingMoreError?: string;
  refreshError?: string;

  renderItem: ListRenderItem<any>;
  onEndReachedThreshold?: number | null;
}

const CustomFlatList = <T,>({
  data,
  isLoading,
  isRefreshing,
  isLoadingMore,
  getMoreData,
  renderItem,
  loadingMoreError,
  getDataOnMount,
  failedError,
  getRefreshedData,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  refreshError,
  onEndReachedThreshold = ON_END_REACHED_THRESHOLD,
  ...otherProps
}: CustomFlatListProps<T>) => {
  const renderLoader = useMemo(() => {
    return <LoaderFlatList />;
  }, []);

  const renderRefreshControl = useMemo(() => {
    return (
      <RefreshControlFlatList
        getRefreshedData={getRefreshedData}
        isRefreshing={isRefreshing}
      />
    );
  }, [isRefreshing, getRefreshedData]);

  const renderErrorHandler = useMemo(() => {
    if (!failedError) {
      return null;
    }
    return (
      <ErrorHandlerFlatList
        errorMessage={failedError}
        onReload={getDataOnMount}
      />
    );
  }, [failedError]);

  const renderEmptyList = useMemo(() => {
    return <DefaultEmptyListFlatList />;
  }, []);

  const renderFooter = useMemo(() => {
    return (
      <FooterFlatList
        getMoreData={getMoreData}
        isLoadingMore={isLoadingMore}
        loadingMoreError={loadingMoreError}
      />
    );
  }, [isLoadingMore, loadingMoreError]);

  const renderFlatList = useMemo(() => {
    if (failedError && data.length === 0) {
      return renderErrorHandler;
    } else {
      if (isLoading) {
        return renderLoader;
      }
      return (
        <FlatList
          contentContainerStyle={data.length === 0 && styles.emptyList}
          refreshControl={renderRefreshControl}
          keyboardDismissMode="on-drag"
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={data}
          renderItem={renderItem}
          ListEmptyComponent={renderEmptyList}
          ListFooterComponent={renderFooter}
          onEndReached={getMoreData}
          onEndReachedThreshold={onEndReachedThreshold}
          {...otherProps}
        />
      );
    }
  }, [
    data,
    failedError,
    isLoading,
    isRefreshing,
    renderErrorHandler,
    renderLoader,
    renderEmptyList,
    renderItem,
    renderFooter,
    getMoreData,
    onEndReachedThreshold,
    otherProps,
    getRefreshedData,
  ]);
  return (
    <View style={styles.container}>
      {renderFlatList}
      <Toast position="bottom" bottomOffset={0} config={toastConfig} />
    </View>
  );
};

export default CustomFlatList;
