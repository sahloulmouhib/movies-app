import React from 'react';

import CustomLoader from '_components/CustomLoader/CustomLoader';
import CustomErrorHandler from '_components/CustomErrorHandler/CustomErrorHandler';

interface CustomLoaderAndErrorHandlerProps {
  children: React.ReactNode;
  apiCall: () => void;
  isLoading?: boolean;
  failedError?: string;
}

const CustomLoaderAndErrorHandler: React.FC<
  CustomLoaderAndErrorHandlerProps
> = ({isLoading, children, apiCall, failedError}) => {
  if (isLoading) {
    return <CustomLoader />;
  }
  if (failedError) {
    return (
      <CustomErrorHandler
        errorMessage={failedError}
        onButtonPress={() => {
          apiCall();
        }}
      />
    );
  }
  return <>{children}</>;
};

export default CustomLoaderAndErrorHandler;
