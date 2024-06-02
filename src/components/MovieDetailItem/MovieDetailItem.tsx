import React from 'react';
import {Image, ImageSourcePropType, Text, View} from 'react-native';

import {icons} from '_utils/icons';

import styles from './movieDetailItem.styles';

export interface MovieDetailItemProps {
  icon?: ImageSourcePropType;
  title: string;
}

const MovieDetailItem: React.FC<MovieDetailItemProps> = ({icon, title}) => {
  return (
    <View style={styles.container}>
      {icon && (
        <Image
          style={styles.icon}
          source={icon}
          resizeMode="contain"
          defaultSource={icons.DEFAULT_PLACEHOLDER}
        />
      )}
      <Text numberOfLines={2} style={styles.title}>
        {title}
      </Text>
    </View>
  );
};

export default MovieDetailItem;
