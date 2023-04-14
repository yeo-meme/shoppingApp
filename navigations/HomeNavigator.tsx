import React,{useEffect} from 'react';
import {DrawerActions, useNavigation, useRoute} from '@react-navigation/native';
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
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SIZES} from '../constants/theme';
import icons from '../constants/icons';
import {useIsFocused} from '@react-navigation/native';

// screens
import Category from '../screens/Categories';
import Home from '../screens/Home';
import Cart from '../screens/Cart';
import Detail from '../screens/Detail';
import Login from '../screens/Login';
import MyTaste from '../screens/MyTaste';
import Join from '../screens/Join';
import Mypage from '../screens/Mypage';

const Tab = createBottomTabNavigator<HomeBottomtabParamList>();
const Stack = createStackNavigator<HomeStackParamList>();

const isAuthenticated: boolean = true;

// Bottom Sheet Menu
function HomeTabs() {
  const isFocused = useIsFocused();

  

  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
      {/* bottom navi */}

      {/* 1: home  */}
      {/* <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: '홈',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="home-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />  */}

      {/* 2: category */}
      <Tab.Screen
        name="category"
        component={Category}
        options={{
          tabBarLabel: '이벤트',
          // tabBarVisible: getVisibility(route, 1),
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="history" color={color} size={size} />
          ),
        }}
      />

      {/* 3: category */}
      <Tab.Screen
        name="Brand"
        component={MyTaste}
        options={{
          tabBarLabel: '내취향',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="history" color={color} size={size} />
          ),
        }}
      />

      {/* 4: Account */}
      <Tab.Screen
        name="Account"
        component={Login}
        options={({route}) => ({
          tabBarLabel: '마이페이지',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="account-circle-outline"
              color={color}
              size={size}
            />
          ),
        })}
      />

      {/* mypage */}
      {/* {isAuthenticated && isFocused && (
        <Tab.Screen
          name="Mypage"
          component={Mypage}
          options={{
            tabBarLabel: 'Mypage',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
      )} */}

      {/* 5: mypage */}
      {/* <Tab.Screen name="Mypage" component={Mypage} /> */}

      {/* <Tab.Screen name="Mypage" component={Mypage} /> */}
      {/* 5: MyBag */}
      {/* <Tab.Screen
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
      /> */}
    </Tab.Navigator>
  );
}

// Drawer Sheet Navi
export default function HomeNavigator() {
  const navigation = useNavigation<StackNavigationProp<HomeStackParamList>>();
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: true}}>
      <Stack.Screen
        name="Home"
        component={HomeTabs}
        options={{
          title: '무신사',
          headerLeft: ({onPress}) => (
            <TouchableOpacity
              style={{marginLeft: SIZES.padding}}
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
      <Stack.Screen name="Category" component={Category} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="Join" component={Join} />
      <Stack.Screen name="Mypage" component={Mypage} />
      <Stack.Screen name="HomeTabs" component={HomeTabs} />
    </Stack.Navigator>
  );
}
