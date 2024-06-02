// Need to use the React-specific entry point to import createApi
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {decodeMovieList} from '_models/Movie/movie.transformers';
import {MovieList, MovieListResponse} from '_models/Movie/movie.types';
import {decodeMovieDetails} from '_models/MovieDetails/movieDetails.transformers';
import {
  MovieDetails,
  MovieDetailsResponse,
} from '_models/MovieDetails/movieDetails.types';
import {getMergeConfig, getSerializeQueryArgsConfig} from '_rtkQuery/helpers';

import {API_KEY, MOVIES_BASE_URL} from '_utils/constants';
import {HttpMethodEnum} from '_utils/enums';

export interface GetMovieListParams {
  page: number;
  apiKey: string;
  s: string;
  type: 'movie';
}

export interface GetMovieDetailsParams {
  i: string;
  apiKey: string;
  type: 'movie';
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
          type: 'movie',
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
    getMovieDetails: builder.query<
      MovieDetails,
      Partial<GetMovieDetailsParams>
    >({
      query: ({i}) => ({
        url: '',
        method: HttpMethodEnum.Get,
        params: {
          apiKey: API_KEY,
          i,
          type: 'movie',
        },
      }),
      transformResponse: (response: MovieDetailsResponse) => {
        return decodeMovieDetails(response);
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useLazyGetMoviesListQuery, useGetMovieDetailsQuery} = moviesApi;
