import React from 'react';
import {View} from 'react-native';

import styles from './movieDetailItemList.styles';
import MovieDetailItem, {
  MovieDetailItemProps,
} from '_components/MovieDetailItem/MovieDetailItem';

interface MovieDetailItemListProps {
  items: MovieDetailItemProps[];
}

const MovieDetailItemList: React.FC<MovieDetailItemListProps> = ({items}) => {
  return (
    <>
      {items.length > 0 && (
        <View style={styles.listContainer}>
          {items.map(item => (
            <MovieDetailItem
              key={item.title}
              icon={item.icon}
              title={item.title}
            />
          ))}
        </View>
      )}
    </>
  );
};

export default MovieDetailItemList;
