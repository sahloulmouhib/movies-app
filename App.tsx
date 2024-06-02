import React from 'react';
import Layout from './Layout';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import 'react-native-devsettings';

const App = () => {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
};

export default App;
