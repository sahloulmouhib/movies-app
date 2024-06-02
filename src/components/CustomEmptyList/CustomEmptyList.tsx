import React from 'react';
import {Image, Text, View} from 'react-native';

import {icons} from '_utils/icons';

import {translate} from '_i18n';

import CustomDivider from '../CustomDivider/CustomDivider';

import styles from './CustomEmptyList.styles';

type Props = {
  title?: string;
  description?: string;
};

const CustomEmptyList = ({
  title = translate('global.empty_list.title'),
  description = translate('global.empty_list.description'),
}: Props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.noResultsIcon} source={icons.NO_RESULTS} />
      <CustomDivider height={16} />
      <Text>{title}</Text>
      <CustomDivider height={8} />
      <Text>{description}</Text>
    </View>
  );
};

export default CustomEmptyList;
