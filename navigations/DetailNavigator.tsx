import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {HomeStackParamList} from '../src/types/NavigationTypes';
// screens
// import Address from '../screens/Forms/Address';
import Cart from '../screens/Cart';
import Category from '../screens/Categories';
import Detail from '../screens/Detail';

const Stack = createStackNavigator<HomeStackParamList>();

export default function DetailNavigator() {
  const navigation = useNavigation<StackNavigationProp<HomeStackParamList>>();

  return (
    <Stack.Navigator initialRouteName={'Detail'}>
      {/* <Stack.Screen name="Detail"component={Detail}/> */}
      <Stack.Screen name="Cart" component={Cart} />
      {/* <Stack.Screen name="Address" component={Address} /> */}
    </Stack.Navigator>
  );
}
