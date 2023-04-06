import React from 'react';
import {DrawerActions, useNavigation} from '@react-navigation/native';

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
import {Image, Text, View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SIZES } from '../constants/theme';
import icons from '../constants/icons';

// screens
import Category from '../screens/Categories';
import Home from '../screens/home';
import ProductList from '../screens/ProductList';
import Cart from '../screens/Cart';
import Detail from '../screens/Detail';
import MyPage from '../screens/Mypage'



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
        component={ProductList}
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
        component={MyPage}
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

// Drawer Sheet Navi
export default function HomeNavigator() {
  const navigation = useNavigation<StackNavigationProp<HomeStackParamList>>();
  return (
    <Stack.Navigator initialRouteName="Home"
    screenOptions={{ headerShown: true }}>

      <Stack.Screen
        name="Home"
        component={HomeTabs}
        options={{
          title:'무신사',
          headerLeft: ({ onPress }) => (
            <TouchableOpacity
            style={{ marginLeft: SIZES.padding }}
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                <Image
                    source={icons.menu}
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
      <Stack.Screen 
      name="Category" 
      component={Category}
      />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Detail" component={Detail} />

    </Stack.Navigator>
  );
}
