import React from 'react';
import {View, Text, ImageSourcePropType, Image} from 'react-native';

import styles from './movieRatingItem.styles.';

interface MovieRatingItemProps {
  icon: ImageSourcePropType;
  value: string;
}

const MovieRatingItem: React.FC<MovieRatingItemProps> = ({icon, value}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.icon} source={icon} />
      <Text style={styles.valueText}>{value}</Text>
    </View>
  );
};

export default MovieRatingItem;
