import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {COLORS, FONTS} from '../constants';
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

function HomeTabs() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Second" component={Second} />
    </Tab.Navigator>
  );
}

export default function HomeNavigator() {
  const navigation = useNavigation<StackNavigationProp<HomeStackParamList>>();
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeTabs} />
      {/* 
          <Stack.Screen
          name="Category"
          component={Category} />

          <Stack.Screen
          name="ProductList"
          component={ProductList} /> */}
    </Stack.Navigator>
  );
}
