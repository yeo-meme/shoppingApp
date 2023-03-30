import React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {COLORS, FONTS} from '../constants';
import {
  LoginStackParamList,
  MenuAndProductListStackParamList,
} from '../src/types/NavigationTypes';

const Stack = createStackNavigator<MenuAndProductListStackParamList>();

export default function ProductlistNavigator() {
  const navigation =
    useNavigation<StackNavigationProp<MenuAndProductListStackParamList>>();
  return (
    <Stack.Navigator initialRouteName={'ProductList'}>
      <Stack.Screen name="ProductList" component={ProductList} />
    </Stack.Navigator>
  );
}
