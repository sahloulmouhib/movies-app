import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import styles from './screenHeader.styles';
import {icons} from '_utils/icons';
import CustomSeparator from '_components/CustomSeparator/CustomSeparator';

interface ScreenHeaderProps {
  title: string;
  onBackPress?: () => void;
}

const ScreenHeader: React.FC<ScreenHeaderProps> = ({title, onBackPress}) => {
  return (
    <>
      <View style={styles.container}>
        {onBackPress && (
          <TouchableOpacity onPress={onBackPress}>
            <Image source={icons.ARROW_LEFT} />
          </TouchableOpacity>
        )}
        <Text numberOfLines={2} style={styles.titleText}>
          {title}
        </Text>
        {onBackPress && (
          <TouchableOpacity
            style={styles.hiddenIconContainer}
            onPress={onBackPress}>
            <Image source={icons.ARROW_LEFT} />
          </TouchableOpacity>
        )}
      </View>
      <CustomSeparator />
    </>
  );
};

export default ScreenHeader;
