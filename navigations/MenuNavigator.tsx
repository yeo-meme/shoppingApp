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
// screens
import Category from '../screens/Categories';
// import Address from '../screens/Forms/Address';
import Cart from '../screens/Cart';
// import Product from '../screens/Detail';
import ProductList from '../screens/ProductList';

const Stack = createStackNavigator<MenuAndProductListStackParamList>();

export default function MenuNavigator() {
  const navigation =
    useNavigation<StackNavigationProp<MenuAndProductListStackParamList>>();
  return (
    <Stack.Navigator initialRouteName={'Category'}
    screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Category" component={Category}
        options={{
          title: 'Categories'
        }} />
         {/* <Stack.Screen name="Product" component={Product} /> */}
            <Stack.Screen name="Cart" component={Cart} />
            {/* <Stack.Screen name="Address" component={Address} /> */}
    </Stack.Navigator>
  );
}
