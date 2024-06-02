import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SearchMoviesScreen from '_screens/SearchMoviesScreen/SearchMoviesScreen';
import {SEARCH_MOVIES_SCREEN} from '_utils/screenNames';

// Define Stack param list for each screen
export type MoviesStackParamList = {
  [SEARCH_MOVIES_SCREEN]: undefined;
};

const MoviesStack = createNativeStackNavigator<MoviesStackParamList>();

/**
 * Returns the stack navigation and all the associated screens
 * @returns JSX.Element
 */
const MoviesStackNavigation = (): JSX.Element => {
  return (
    <MoviesStack.Navigator>
      <MoviesStack.Screen
        name={SEARCH_MOVIES_SCREEN}
        component={SearchMoviesScreen}
      />
    </MoviesStack.Navigator>
  );
};

export default MoviesStackNavigation;
