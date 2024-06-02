import React from 'react';
import {Image, ImageSourcePropType, Text, TouchableOpacity} from 'react-native';

import styles from './customButton.styles';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  rightIcon?: ImageSourcePropType;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  rightIcon,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.titleText}>{title}</Text>
      <Image style={styles.icon} source={rightIcon} />
    </TouchableOpacity>
  );
};

export default CustomButton;
