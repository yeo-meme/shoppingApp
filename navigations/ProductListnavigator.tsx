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

//screens
import ProductList from '../screens/ProductList';
import Cart from '../screens/Cart';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SIZES } from '../constants/theme';
import icons from '../constants/icons';
import { Image } from 'react-native';

const Stack = createStackNavigator<MenuAndProductListStackParamList>();

export default function ProductlistNavigator() {
  const navigation =
    useNavigation<StackNavigationProp<MenuAndProductListStackParamList>>();
  return (
    <Stack.Navigator initialRouteName={'ProductList'}>
      <Stack.Screen 
      name="ProductList" 
      component={ProductList}
      options={{
        headerLeft: ({onPress}) => (
          <TouchableOpacity
            style={{marginLeft: SIZES.padding}}
            onPress={() => {
              navigation.goBack();
            }}>
            <Image
              source ={icons.arrow_back}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
              }}
            />
          </TouchableOpacity>
        ),
      }}
       />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
}
