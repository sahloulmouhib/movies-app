import React from 'react';
import {View} from 'react-native';

import CustomLoader from '_components/CustomLoader/CustomLoader';

import CustomReloaderFlatList from '../ErrorHandlerFlatList/ErrorHandlerFlatList';

import styles from './footerFlatList.styles';

interface FooterFlatListProps {
  isLoadingMore?: boolean;
  loadingMoreError?: string;
  getMoreData?: () => void;
}

const FooterFlatList: React.FC<FooterFlatListProps> = ({
  getMoreData,
  isLoadingMore,
  loadingMoreError,
}) => {
  if (isLoadingMore) {
    return (
      <View style={styles.footerContainer}>
        <CustomLoader />
      </View>
    );
  } else if (getMoreData && !isLoadingMore && loadingMoreError) {
    return (
      <View style={styles.footerContainer}>
        <CustomReloaderFlatList
          errorMessage={loadingMoreError}
          onReload={getMoreData}
        />
      </View>
    );
  }
  return null;
};

export default FooterFlatList;
