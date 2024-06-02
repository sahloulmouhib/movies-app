import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SearchMoviesScreen from '_screens/SearchMoviesScreen/SearchMoviesScreen';
import {MOVIE_DETAILS_SCREEN, SEARCH_MOVIES_SCREEN} from '_utils/screenNames';
import MovieDetailsScreen from '_screens/MovieDetailsScreen/MovieDetailsScreen';

// Define Stack param list for each screen
export type MoviesStackParamList = {
  [SEARCH_MOVIES_SCREEN]: undefined;
  [MOVIE_DETAILS_SCREEN]: {id: string};
};

const MoviesStack = createNativeStackNavigator<MoviesStackParamList>();

/**
 * Returns the stack navigation and all the associated screens
 * @returns JSX.Element
 */
const MoviesStackNavigation = (): JSX.Element => {
  return (
    <MoviesStack.Navigator screenOptions={{headerShown: false}}>
      <MoviesStack.Screen
        name={SEARCH_MOVIES_SCREEN}
        component={SearchMoviesScreen}
      />
      <MoviesStack.Screen
        name={MOVIE_DETAILS_SCREEN}
        component={MovieDetailsScreen}
      />
    </MoviesStack.Navigator>
  );
};

export default MoviesStackNavigation;
