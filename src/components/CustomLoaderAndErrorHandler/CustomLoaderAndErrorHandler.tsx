import React from 'react';

import CustomLoader from '_components/CustomLoader/CustomLoader';

import CustomErrorHandler from '../CustomErrorHandler/CustomErrorHandler';
import DefaultEmptyListFlatlist from '_components/DefaultEmptyListFlatlist/DefaultEmptyListFlatlist';
import {translate} from '_i18n';

interface CustomLoaderAndErrorHandlerProps {
  children: React.ReactNode;
  apiCall: () => void;
  isEmpty?: boolean;
  isLoading?: boolean;
  isError?: boolean;
}

const CustomLoaderAndErrorHandler: React.FC<
  CustomLoaderAndErrorHandlerProps
> = ({isLoading, children, apiCall, isEmpty, isError}) => {
  if (isLoading) {
    return <CustomLoader />;
  }
  if (isError) {
    return (
      <CustomErrorHandler
        errorMessage={translate('error.something_went_wrong')}
        onButtonPress={() => {
          apiCall();
        }}
      />
    );
  }
  if (isEmpty) {
    return <DefaultEmptyListFlatlist />;
  }
  return <>{children}</>;
};

export default CustomLoaderAndErrorHandler;
