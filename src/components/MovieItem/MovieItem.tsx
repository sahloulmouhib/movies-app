import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import styles from './movieItem.styles';
import {icons} from '_utils/icons';
import {Movie} from '_models/Movie/movie.types';

interface MovieItemProps {
  movieItem: Movie;
  onPress: () => void;
}

const MovieItem: React.FC<MovieItemProps> = ({movieItem, onPress}) => {
  const {title, yearOfRelease, poster} = movieItem;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.movieItemContainer} onPress={onPress}>
        <Image
          style={styles.image}
          source={{uri: poster}}
          defaultSource={icons.DEFAULT_PLACEHOLDER}
        />
        <View style={styles.textsContainer}>
          <Text style={styles.nameText} numberOfLines={2}>
            {title}
          </Text>
          <Text style={styles.yearText} numberOfLines={1}>
            {yearOfRelease}
          </Text>
        </View>
      </TouchableOpacity>
      <Image style={styles.arrowIcon} source={icons.SMALL_ARROW} />
    </View>
  );
};

export default MovieItem;
