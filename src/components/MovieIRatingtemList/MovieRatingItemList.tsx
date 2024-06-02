import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {MovieRating} from '_models/MovieDetails/movieDetails.types';
import MovieRatingItem from '_components/MovieRatingItem/MovieRatingItem';

interface MovieRatingItemListProps {
  list: MovieRating[];
}

const MovieRatingItemList: React.FC<MovieRatingItemListProps> = ({list}) => {
  const renderItem = ({
    item: {icon, value},
  }: ListRenderItemInfo<MovieRating>) => {
    return <MovieRatingItem icon={icon} value={value} />;
  };

  return <FlatList scrollEnabled={false} data={list} renderItem={renderItem} />;
};

export default MovieRatingItemList;
