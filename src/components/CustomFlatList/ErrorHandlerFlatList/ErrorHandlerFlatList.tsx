import React from 'react';
import {Text, View} from 'react-native';

import styles from './errorHandlerFlatList.styles';
import CustomButton from '_components/CustomButton/CustomButton';

interface ErrorHandlerFlatListProps {
  errorMessage: string;
  onReload: () => void;
}
const ErrorHandlerFlatList: React.FC<ErrorHandlerFlatListProps> = ({
  errorMessage,
  onReload,
}) => {
  return (
    <View style={styles.container}>
      <CustomButton title="Retry" onPress={onReload} />
      <Text style={styles.errorMessage}>{errorMessage}</Text>
    </View>
  );
};

export default ErrorHandlerFlatList;
