import React from 'react';
import {
  DimensionValue,
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
} from 'react-native';

import styles from './customButton.styles';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  rightIcon?: ImageSourcePropType;
  width?: DimensionValue;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  rightIcon,
  width,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          width,
        },
      ]}
      onPress={onPress}>
      <Text style={styles.titleText}>{title}</Text>
      {rightIcon && <Image style={styles.icon} source={rightIcon} />}
    </TouchableOpacity>
  );
};

export default CustomButton;
