import {QueryStatus} from '@reduxjs/toolkit/query';
import {
  DEFAULT_PAGE_NUMBER,
  DEFAULT_ROWS_PER_PAGE,
  INITIAL_PAGE_NUMBER,
} from '_rtkQuery/constants';
import {handleError} from '_rtkQuery/helpers';
import {ToastType} from '_utils/customToastConfig/toastConfig';
import {UseLazyQuery} from 'node_modules/@reduxjs/toolkit/dist/query/react/buildHooks';
import {useEffect, useState} from 'react';
import Toast from 'react-native-toast-message';

const useCustomPaginationQuery = <T, D = void>(
  useLazyQueryResult: ReturnType<UseLazyQuery<any>>,
  params?: Partial<D>,
  pageArgName: string = 'offset',
  rowsPerPageArgName: string = 'limit',
) => {
  const [currentPage, setCurrentPage] = useState(INITIAL_PAGE_NUMBER);
  let [
    fetch,
    {
      data: dataObject,
      error,
      isFetching,
      isLoading: isDefaultLoading,
      status,
      originalArgs,
    },
  ] = useLazyQueryResult;
  const pageArg: number = originalArgs?.[pageArgName];

  /**
   * note that the dataObject represents the decoded response which is an object with a key of 'data'
   * @example {data: []}
   */
  dataObject = dataObject as
    | {
        data: T[];
        totalNbrOfResults: number;
      }
    | undefined;
  const data: T[] | undefined = dataObject?.data;
  const totalNbrOfResults: number | undefined = dataObject?.totalNbrOfResults;

  const isLoading: boolean =
    (data === undefined && isDefaultLoading) ||
    (isFetching && data?.length === 0);
  const failedError: string | undefined =
    (data === undefined || data.length === 0) && error
      ? handleError(error)
      : undefined;

  const isRefreshing: boolean =
    data !== undefined &&
    data.length > 0 &&
    pageArg === DEFAULT_PAGE_NUMBER &&
    isFetching;
  const refreshError: string | undefined =
    data !== undefined &&
    data.length > 0 &&
    pageArg === DEFAULT_PAGE_NUMBER &&
    error
      ? handleError(error)
      : undefined;

  const isLoadingMore: boolean =
    data !== undefined &&
    data.length > 0 &&
    pageArg > DEFAULT_PAGE_NUMBER &&
    isFetching;
  const loadingMoreDataError: string | undefined =
    data !== undefined &&
    data.length > 0 &&
    error &&
    pageArg > DEFAULT_PAGE_NUMBER
      ? handleError(error)
      : undefined;

  const nbrOfResults = data !== undefined ? data.length : undefined;
  const isAllDataLoaded =
    (nbrOfResults !== undefined &&
      totalNbrOfResults !== undefined &&
      nbrOfResults === totalNbrOfResults) ||
    (data !== undefined && data.length % currentPage !== 0);

  const getFirstPage = (shouldUseCachedData: boolean) => {
    fetch(
      {
        [pageArgName]: DEFAULT_PAGE_NUMBER,
        [rowsPerPageArgName]: DEFAULT_ROWS_PER_PAGE,
        ...params,
      },
      shouldUseCachedData,
    );
  };

  const getNextPage = () => {
    fetch({
      [pageArgName]: currentPage + DEFAULT_PAGE_NUMBER,
      [rowsPerPageArgName]: DEFAULT_ROWS_PER_PAGE,
      ...params,
    });
  };

  const getDataOnMount = () => getFirstPage(true);
  const getRefreshedData = () => getFirstPage(false);

  const getMoreData = () => {
    !isRefreshing &&
      !isLoading &&
      !isLoadingMore &&
      data !== undefined &&
      data.length > 0 &&
      !isAllDataLoaded &&
      getNextPage();
  };

  useEffect(() => {
    getDataOnMount();
  }, []);

  useEffect(() => {
    if (status === QueryStatus.fulfilled) {
      originalArgs?.[pageArgName] > DEFAULT_PAGE_NUMBER
        ? setCurrentPage(prevPage => prevPage + DEFAULT_PAGE_NUMBER)
        : setCurrentPage(DEFAULT_PAGE_NUMBER);
    }
  }, [status]);

  useEffect(() => {
    refreshError &&
      Toast.show({
        type: ToastType.Success,
        text1: refreshError,
      });
  }, [error]);

  return {
    data: data || [],
    failedError,
    isRefreshing,
    refreshError,
    isLoading,
    isLoadingMore,
    loadingMoreDataError,
    getDataOnMount,
    getRefreshedData,
    getMoreData,
    nbrOfResults,
  };
};

export default useCustomPaginationQuery;
