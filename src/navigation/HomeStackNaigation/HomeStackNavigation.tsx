import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HOME_SCREEN, MOVIES_STACK} from '_utils/screenNames';
import {NavigatorScreenParams} from '@react-navigation/native';
import HomeScreen from '_screens/HomeScreen/HomeScreen';
import MoviesStackNavigation, {
  MoviesStackParamList,
} from './MoviesStackNavigation';

// Define Stack param list for each screen
export type HomeStackParamList = {
  [HOME_SCREEN]: undefined;
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
      <HomeStack.Screen name={HOME_SCREEN} component={HomeScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigation;
