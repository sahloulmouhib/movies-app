import React from 'react';
import {Text, View} from 'react-native';

import {translate} from '_i18n';

import styles from './defaultEmptyListFlatlistStyles';

interface DefaultEmptyListFlatlistProps {}

const DefaultEmptyListFlatlist: React.FC<
  DefaultEmptyListFlatlistProps
> = ({}) => {
  return (
    <View style={styles.emptyList}>
      <Text style={styles.text}>{translate('global.no_data')}</Text>
    </View>
  );
};

export default DefaultEmptyListFlatlist;
