import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {MOVIES_STACK} from '_utils/screenNames';
import {NavigatorScreenParams} from '@react-navigation/native';
import MoviesStackNavigation, {
  MoviesStackParamList,
} from './MoviesStackNavigation';

// Define Stack param list for each screen
export type HomeStackParamList = {
  [MOVIES_STACK]: NavigatorScreenParams<MoviesStackParamList>;
};

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

/**
 * Returns the stack navigation and all the associated screens
 * @returns JSX.Element
 */
const HomeStackNavigation = (): JSX.Element => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name={MOVIES_STACK} component={MoviesStackNavigation} />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigation;
