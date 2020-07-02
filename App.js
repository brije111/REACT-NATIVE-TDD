/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import RestaurantList from './app/RestaurantList';
import {SafeAreaView} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <RestaurantList />
    </SafeAreaView>
  );
};

export default App;
