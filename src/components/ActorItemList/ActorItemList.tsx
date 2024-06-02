import React from 'react';
import {View, Text} from 'react-native';

import styles from './actorItemList.styles';

interface ActorItemListProps {
  actors: string[];
}

const ActorItemList: React.FC<ActorItemListProps> = ({actors}) => {
  return (
    <View>
      {actors.map(actor => (
        <Text style={styles.text} key={actor}>
          {`. ${actor}`}
        </Text>
      ))}
    </View>
  );
};

export default ActorItemList;
