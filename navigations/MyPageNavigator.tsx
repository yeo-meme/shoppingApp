import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import  Mypage from '../screens/Mypage';

const Stack = createStackNavigator();

export default function MypageNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Mypage" screenOptions={{ headerShown:false}}>
      <Stack.Screen name="Mypage" component={Mypage} />
    </Stack.Navigator>
  );
}
