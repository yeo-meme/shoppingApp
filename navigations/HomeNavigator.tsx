import React from 'react';
import {useNavigation} from '@react-navigation/native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeStackParamList,
  HomeBottomtabParamList,
} from '../src/types/NavigationTypes';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {Text, View} from 'react-native';

// screens
import Category from '../screens/Categories';
import Home from '../screens/home';
import Cart from '../screens/Cart';

const Tab = createBottomTabNavigator<HomeBottomtabParamList>();
const Stack = createStackNavigator<HomeStackParamList>();

const First = () => {
  return (
    <View>
      <Text>This is first screen</Text>
    </View>
  );
};

const Second = () => {
  return (
    <View>
      <Text>This is second screen</Text>
    </View>
  );
};

// Bottom Sheet Menu
function HomeTabs() {
  return (
    <Tab.Navigator initialRouteName="Home">
      {/* bottom navi */}

      {/* 1: home */}
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />

      {/* 2: category */}
      <Tab.Screen
        name="category"
        component={Category}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="format-list-bulleted-square"
              color={color}
              size={size}
            />
          ),
        }}
      />
      {/* 3: Brand */}
      <Tab.Screen
        name="Brand"
        component={Home}
        listeners={{
          tabPress: e => {
            e.preventDefault();
          },
        }}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="cards-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />

      {/* 4: Account */}
      <Tab.Screen
        name="Account"
        component={Home}
        listeners={{
          tabPress: e => {
            e.preventDefault();
          },
        }}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="account-circle-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />

      {/* 5: MyBag */}
      <Tab.Screen
        name="MyBag"
        component={Cart}
        options={{
          title: 'My Bag',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="shopping-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// Drawer Sheet Navi
export default function HomeNavigator() {
  const navigation = useNavigation<StackNavigationProp<HomeStackParamList>>();
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeTabs}
        options={{headerShown: false, animationEnabled: false}}
      />

      <Stack.Screen name="Category" component={Category} />
      {/* <Stack.Screen name="ProductList" component={ProductList} />
      <Stack.Screen name="Product" component={Product} /> */}
      <Stack.Screen name="Cart" component={Cart} />




      {/* <Stack.Screen 
      name="Category" 
      component={Category}
      options={{headerShown: false, animationEnabled: false}}
       />

      <Stack.Screen name="ProductList" component={ProductList} /> */}
    </Stack.Navigator>
  );
}
