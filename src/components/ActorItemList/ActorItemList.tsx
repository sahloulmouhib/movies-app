import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './actorItemList.styles';
import {icons} from '_utils/icons';

interface ActorItemListProps {
  actors: string[];
}

const ActorItemList: React.FC<ActorItemListProps> = ({actors}) => {
  return (
    <View>
      {actors.map(actor => (
        <View style={styles.itemContainer} key={actor}>
          <Image source={icons.DRAMA} style={styles.icon} />
          <Text style={styles.text}>{actor}</Text>
        </View>
      ))}
    </View>
  );
};

export default ActorItemList;
