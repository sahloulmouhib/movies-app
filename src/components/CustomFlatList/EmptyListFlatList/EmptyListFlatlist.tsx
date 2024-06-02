import React from 'react';
import {Text, View} from 'react-native';

import styles from './emptyListFlatList.styles';

const DefaultEmptyListFlatList = () => {
  return (
    <View style={styles.emptyListContainer}>
      <Text style={styles.text}>Empty List</Text>
    </View>
  );
};

export default DefaultEmptyListFlatList;
