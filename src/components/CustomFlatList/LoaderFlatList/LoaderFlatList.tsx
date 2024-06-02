import React from 'react';
import {ActivityIndicator, View} from 'react-native';

import styles from './loaderFlatList.styles';
import {colors} from '_utils/colors';

interface LoaderFlatListProps {}

const LoaderFlatList: React.FC<LoaderFlatListProps> = ({}) => {
  return (
    <View style={styles.defaultLoaderContainer}>
      <ActivityIndicator color={colors.PRIMARY} size={'large'} />
    </View>
  );
};

export default LoaderFlatList;
