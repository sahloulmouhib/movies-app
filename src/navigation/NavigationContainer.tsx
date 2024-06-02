import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './RootNavigation';
import HomeStackNavigation from './HomeStackNaigation/HomeStackNavigation';

function Navigation() {
  return (
    <NavigationContainer ref={navigationRef}>
      <HomeStackNavigation />
    </NavigationContainer>
  );
}

export default Navigation;
