import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import React from 'react';
import {AppDrawerParamList} from '../src/types/NavigationTypes';
import {createDrawerNavigator} from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import HomeNavigator from './HomeNavigator';
import { TouchableOpacity } from 'react-native';

// navigators
import MenuNavigator from './MenuNavigator';
import AddressNavigator from './AddressNavigator';
import ProductListNavigator from './ProductListnavigator';


const Drawer = createDrawerNavigator<AppDrawerParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{ headerShown: false }}>
        <Drawer.Screen
          name="HomePage"
          options={{
            drawerLabel: 'Home',
          }}
          component={HomeNavigator}
        />
        <Drawer.Screen
          name="Address"
          options={{drawerLabel: 'Address'}}
          component={AddressNavigator}
        />
         {/* <Drawer.Screen
         name="Login"
           options={{drawerLabel: 'Login'}}
           component={LoginNavigator}
         /> */}
         <Drawer.Screen
           name="ProductList"
           options={{drawerLabel: 'Products'}}
           component={ProductListNavigator}
         />
        <Drawer.Screen
          name="Categories"
          options={{drawerLabel: 'Events'}}
          component={MenuNavigator}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
