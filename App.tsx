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
// import { ClothesProvider } from './src/context';
import { React$Node } from './src/types/AppTypes';

// /JSX.Element
const App: () => JSX.Element = () => {
  return (
    <NativeBaseProvider>
      {/* <ClothesProvider> */}
     <AppNavigator/>
     {/* </ClothesProvider> */}
     </NativeBaseProvider>
  );
};

export default App;
