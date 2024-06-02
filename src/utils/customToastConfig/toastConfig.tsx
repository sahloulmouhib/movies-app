import React from 'react';
import {View, Text} from 'react-native';
import {ToastConfig} from 'react-native-toast-message';

import styles from './toastConfig.styles';

export enum ToastType {
  Success = 'success',
  Error = 'error',
  CustomToast = 'customToast',
}

export const toastConfig: ToastConfig = {
  success: ({text1}) => (
    <View style={[styles.customToast, styles.success]}>
      <Text style={styles.text1}>{text1}</Text>
    </View>
  ),
  error: ({text1}) => (
    <View style={[styles.customToast, styles.error]}>
      <Text style={styles.text1}>{text1}</Text>
    </View>
  ),
  customToast: ({text1, text2}) => (
    <View style={styles.customToast}>
      <Text style={styles.text1}>{text1}</Text>
      <Text style={styles.text2} numberOfLines={4}>
        {text2}
      </Text>
    </View>
  ),
};
