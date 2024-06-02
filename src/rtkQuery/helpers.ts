import {SerializedError} from '@reduxjs/toolkit';
import {EndpointDefinition, FetchBaseQueryError} from '@reduxjs/toolkit/query';
import {
  DEFAULT_PAGE_NUMBER,
  NETWORK_ERROR_MESSAGE,
  SERVER_ERROR_MESSAGE,
} from './constants';

export function isFetchBaseQueryError(
  error: unknown,
): error is FetchBaseQueryError {
  return typeof error === 'object' && error != null && 'status' in error;
}

const isNetworkError = (error: FetchBaseQueryError): boolean => {
  return (
    'error' in error &&
    error?.error?.toString() === 'TypeError: Network request failed'
  );
};

export const handleError = (error: unknown): string => {
  if (isFetchBaseQueryError(error)) {
    if (isNetworkError(error)) {
      return NETWORK_ERROR_MESSAGE;
    }
    return SERVER_ERROR_MESSAGE;
  }
  return SERVER_ERROR_MESSAGE;
};

export const getUseQueryStateResult = <T>({
  data,
  error,
  isFetching,
  isLoading,
}: {
  data: T | undefined;
  error: SerializedError | FetchBaseQueryError | undefined;
  isFetching: boolean;
  isLoading: boolean;
}) => {
  const failedError: string | undefined =
    data === undefined && error ? handleError(error) : undefined;

  const isRefreshing: boolean = data !== undefined && isFetching;
  const refreshError: string | undefined =
    data !== undefined && error ? handleError(error) : undefined;

  return {
    isLoading,
    isRefreshing,
    refreshError,
    failedError,
    data,
    error: error as SerializedError | FetchBaseQueryError | undefined,
  };
};

export const getSerializeQueryArgsConfig = (args: {
  queryArgs: any;
  endpointDefinition: EndpointDefinition<any, any, any, any>;
  endpointName: string;
}) => {
  return args.endpointName;
};

// note that the page argument in this case is the offset
export const getMergeConfig = (
  currentCacheData: {
    data: any[];
  },
  responseData: {
    data: any[];
  },
  otherArgs: {
    arg:
      | {
          page: number;
        }
      | undefined;
  },
) => {
  const {arg} = otherArgs;
  if (arg && arg?.page > DEFAULT_PAGE_NUMBER) {
    currentCacheData.data.push(...responseData.data);
  } else {
    currentCacheData.data = responseData.data;
  }
};
