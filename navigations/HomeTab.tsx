import React from 'react';
import {useNavigation} from '@react-navigation/native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
    HomeStackParamList,
    HomeBottomtabParamList,
  } from '../src/types/NavigationTypes';

// screens
import Category from '../screens/Categories';
import Home from '../screens/home';
import Cart from '../screens/Cart';
import Detail from '../screens/Detail';

const Tab = createBottomTabNavigator<HomeBottomtabParamList>();
// Bottom Sheet Menu
function HomeTabs() {
    return (
      <Tab.Navigator initialRouteName="Home"
      screenOptions={{ headerShown: false }}
  >
        {/* bottom navi */}
  
        {/* 1: home */}
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: '홈',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),     }}
        />
  
        {/* 2: category */}
        <Tab.Screen
          name="category"
          component={Category}
          options={{
            tabBarLabel: '이벤트',
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
            tabBarLabel: '내취향',
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
            tabBarLabel: '마이페이지',
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
            tabBarLabel: '장바구니',
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