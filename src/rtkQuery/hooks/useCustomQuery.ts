import {ToastType} from '_utils/customToastConfig/toastConfig';
import {UseQuery} from 'node_modules/@reduxjs/toolkit/dist/query/react/buildHooks';
import {useEffect} from 'react';
import Toast from 'react-native-toast-message';
import {getUseQueryStateResult} from '../helpers';

const useCustomQuery = <T>(useQueryResult: ReturnType<UseQuery<any>>) => {
  const {refetch} = useQueryResult;
  const {isLoading, failedError, isRefreshing, refreshError, error, data} =
    getUseQueryStateResult<T>({
      data: useQueryResult.data,
      error: useQueryResult.error,
      isFetching: useQueryResult.isFetching,
      isLoading: useQueryResult.isLoading,
    });

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
    refetch,
    isLoading,
    isRefreshing,
  };
};

export default useCustomQuery;
