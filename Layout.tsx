import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import NavigationContainer from '_navigation/NavigationContainer';
import Toast from 'react-native-toast-message';
import {TOAST_DURATION} from '_utils/constants';
import {toastConfig} from '_utils/customToastConfig/toastConfig';
const Layout = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer />
      <Toast
        autoHide={true}
        visibilityTime={TOAST_DURATION}
        config={toastConfig}
        position="bottom"
      />
    </SafeAreaProvider>
  );
};

export default Layout;
