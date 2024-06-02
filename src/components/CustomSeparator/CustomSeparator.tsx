import React from 'react';
import {type StyleProp, StyleSheet, type ViewStyle} from 'react-native';

import CustomDivider from '_components/CustomDivider/CustomDivider';

import {colors} from '_utils/colors';

interface CustomSeparatorProps {
  style?: StyleProp<ViewStyle>;
}

const CustomSeparator: React.FC<CustomSeparatorProps> = ({style}) => {
  return (
    <CustomDivider
      height={StyleSheet.hairlineWidth}
      width={'100%'}
      backgroundColor={colors.GREY_LIGHT}
      style={style}
    />
  );
};

export default CustomSeparator;
