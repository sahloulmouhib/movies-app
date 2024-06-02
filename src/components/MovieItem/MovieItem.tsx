import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import styles from './movieItem.styles';
import {icons} from '_utils/icons';
import {Movie} from '_models/Movie/movie.types';

interface MovieItemProps {
  movieItem: Movie;
  onPress: () => void;
  onRemoveButtonPress: () => void;
}

const MovieItem: React.FC<MovieItemProps> = ({
  movieItem,
  onRemoveButtonPress,
  onPress,
}) => {
  const {title: name, yearOfRelease: language, poster: imageUrl} = movieItem;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.movieItemContainer} onPress={onPress}>
        <Image
          style={styles.image}
          source={{uri: imageUrl}}
          defaultSource={icons.DEFAULT_PLACEHOLDER}
        />
        <View style={styles.textsContainer}>
          <Text style={styles.nameText} numberOfLines={2}>
            {name}
          </Text>
          <Text style={styles.languageText} numberOfLines={1}>
            {language}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={onRemoveButtonPress}>
        <Image source={icons.TRASH_OUTLINED} />
      </TouchableOpacity>
    </View>
  );
};

export default MovieItem;
