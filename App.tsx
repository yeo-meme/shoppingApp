/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AppNavigator from './navigations/AppNavigator';
import { NativeBaseProvider, Box } from "native-base";

const App: () => JSX.Element = () => {
  return (
    <NativeBaseProvider>
     <AppNavigator/>
     </NativeBaseProvider>
  );
};

export default App;
