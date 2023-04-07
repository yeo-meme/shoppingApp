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
import Detail from '../screens/Detail';
import ProductList from '../screens/ProductList';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SIZES} from '../constants/theme';
import icons from '../constants/icons';
import {Image} from 'native-base';

const Stack = createStackNavigator<MenuAndProductListStackParamList>();

export default function MenuNavigator() {
  const navigation =
    useNavigation<StackNavigationProp<MenuAndProductListStackParamList>>();
  return (
    <Stack.Navigator
      initialRouteName={'Category'}
      screenOptions={{headerShown: true}}>
      {/* <Stack.Screen
        name="Events"
        component={Category}
        options={{
          title: 'Categories',
          headerLeft: ({onPress}) => (
            <TouchableOpacity
              style={{marginLeft: SIZES.padding}}
              onPress={() => {
                navigation.goBack();
              }}>
              <Image
                source={icons.arrow_back}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                }}
              />
            </TouchableOpacity>
          ),
        }}
      /> */}
      {/* <Stack.Screen name="Product" component={Product} /> */}
      <Stack.Screen name="Cart" component={Cart} />
      {/* <Stack.Screen name="Detail" component={Detail} /> */}
      {/* <Stack.Screen name="Address" component={Address} /> */}
      {/* <Stack.Screen name="Address" component={Address} /> */}
    </Stack.Navigator>
  );
}
