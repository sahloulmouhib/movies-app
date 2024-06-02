import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {translate} from '_i18n';

import styles from './customErrorHandler.styles';

interface CustomErrorHandlerProps {
  errorMessage: string;
  onButtonPress?: () => void;
}

const CustomErrorHandler: React.FC<CustomErrorHandlerProps> = ({
  errorMessage,
  onButtonPress,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.errorMessage}>{errorMessage}</Text>
      {onButtonPress && (
        <TouchableOpacity
          onPress={onButtonPress}
          style={styles.buttonContainer}>
          <Text style={styles.buttonText}>{translate('global.try_again')}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomErrorHandler;
