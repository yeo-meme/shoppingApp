/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AppNavigator from './navigations/AppNavigator';

const App: () => JSX.Element = () => {
  return <AppNavigator />;
};

export default App;
