import React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {
  LoginStackParamList,
  MenuAndProductListStackParamList,
} from '../src/types/NavigationTypes';
import Category from '../screens/Categories';

const Stack = createStackNavigator<MenuAndProductListStackParamList>();

export default function MenuNavigator() {
  const navigation =
    useNavigation<StackNavigationProp<MenuAndProductListStackParamList>>();
  return (
    <Stack.Navigator initialRouteName={'Category'}>
      <Stack.Screen name="Category" component={Category} />
    </Stack.Navigator>
  );
}
