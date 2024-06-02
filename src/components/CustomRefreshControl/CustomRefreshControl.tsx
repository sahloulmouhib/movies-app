import React from 'react';
import {RefreshControl} from 'react-native';

import {colors} from '_utils/colors';

type CustomRefreshControlProps = {
  isRefreshing: boolean;
  getRefreshedData: () => void;
};

const CustomRefreshControl: React.FC<CustomRefreshControlProps> = ({
  getRefreshedData,
  isRefreshing,
  ...props
}) => {
  return (
    <RefreshControl
      tintColor={colors.PRIMARY}
      refreshing={isRefreshing}
      colors={[colors.PRIMARY]}
      onRefresh={getRefreshedData}
      {...props}
    />
  );
};

export default CustomRefreshControl;
