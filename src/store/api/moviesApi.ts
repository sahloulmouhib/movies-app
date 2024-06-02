// Need to use the React-specific entry point to import createApi
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {decodeMovieList} from '_models/Movie/movie.transformers';
import {MovieList, MovieListResponse} from '_models/Movie/movie.types';
import {getMergeConfig, getSerializeQueryArgsConfig} from '_rtkQuery/helpers';

import {API_KEY, MOVIES_BASE_URL} from '_utils/constants';
import {HttpMethodEnum} from '_utils/enums';

export interface GetMovieListParams {
  page: number;
  apiKey: string;
  s: string;
  type: string;
}

// Define a service using a base URL and expected endpoints
export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({baseUrl: MOVIES_BASE_URL}),
  endpoints: builder => ({
    getMoviesList: builder.query<MovieList, GetMovieListParams>({
      query: ({page, s}) => ({
        url: '',
        params: {
          page,
          apiKey: API_KEY,
          s,
        },
        method: HttpMethodEnum.Get,
      }),
      transformResponse: (response: MovieListResponse) => {
        return decodeMovieList(response);
      },
      serializeQueryArgs: getSerializeQueryArgsConfig,
      merge: getMergeConfig,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetMoviesListQuery, useLazyGetMoviesListQuery} = moviesApi;
