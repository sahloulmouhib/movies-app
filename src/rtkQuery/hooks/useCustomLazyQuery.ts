import {ToastType} from '_utils/customToastConfig/toastConfig';
import {UseLazyQuery} from 'node_modules/@reduxjs/toolkit/dist/query/react/buildHooks';
import {useEffect} from 'react';
import Toast from 'react-native-toast-message';
import {getUseQueryStateResult} from '../helpers';

const useCustomLazyQuery = <T, D = void>(
  useLazyQueryResult: ReturnType<UseLazyQuery<any>>,
) => {
  const [fetchData, stateResult] = useLazyQueryResult;
  const {data, error, failedError, isLoading, isRefreshing, refreshError} =
    getUseQueryStateResult<T>({
      data: stateResult.data,
      error: stateResult.error,
      isFetching: stateResult.isFetching,
      isLoading: stateResult.isLoading,
    });
  const fetch = fetchData as (args: D, shouldUseCachedData?: boolean) => void;
  useEffect(() => {
    refreshError &&
      Toast.show({
        type: ToastType.Success,
        text1: refreshError,
      });
  }, [error]);

  return {
    data,
    failedError,
    fetch,
    isRefreshing,
    isLoading,
  };
};

export default useCustomLazyQuery;
