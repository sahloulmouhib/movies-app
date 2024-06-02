import React from 'react';
import {
  type FlexAlignType,
  View,
  type StyleProp,
  type ViewStyle,
} from 'react-native';

interface CustomDividerProps {
  height?: number | string;
  width?: number | string;
  backgroundColor?: string;
  alignSelf?: FlexAlignType | 'auto' | undefined;
  style?: StyleProp<ViewStyle>;
}

const CustomDivider: React.FC<CustomDividerProps> = ({
  backgroundColor = 'transparent',
  height,
  width = '100%',
  alignSelf,
  style,
}) => {
  return (
    <View
      style={[
        {
          backgroundColor,
          height,
          width,
          alignSelf,
        },
        style,
      ]}
    />
  );
};

export default CustomDivider;
