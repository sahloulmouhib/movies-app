import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import styles from './movieItem.styles';
import {icons} from '_utils/icons';
import {Movie} from '_models/Movie/movie.types';

interface MovieItemProps {
  movie: Movie;
  onPress: () => void;
}

const MovieItem: React.FC<MovieItemProps> = ({movie, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image
        style={styles.image}
        source={{uri: movie.poster}}
        defaultSource={icons.DEFAULT_PLACEHOLDER}
      />
      <Text numberOfLines={2} style={styles.nameText}>
        {movie.title}
      </Text>
      <View>
        <Image style={styles.addIcon} source={icons.ADD} />
      </View>
    </TouchableOpacity>
  );
};

export default MovieItem;
