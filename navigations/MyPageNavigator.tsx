import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import  Mypage from '../screens/Mypage';

const Stack = createStackNavigator();

export default function MyPageNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Mypage">
      <Stack.Screen name="Mypage" component={Mypage} />
    </Stack.Navigator>
  );
}
