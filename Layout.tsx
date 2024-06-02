import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import NavigationContainer from '_navigation/NavigationContainer';
import Toast from 'react-native-toast-message';
import {TOAST_DURATION} from '_utils/constants';
import {toastConfig} from '_utils/customToastConfig/toastConfig';
const Layout = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
        <NavigationContainer />
        <Toast
          autoHide={true}
          visibilityTime={TOAST_DURATION}
          config={toastConfig}
          position="bottom"
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Layout;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
