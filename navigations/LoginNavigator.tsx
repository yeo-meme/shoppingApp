import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import  Login from '../screens/Login';

const Stack = createStackNavigator();

export default function LoginNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}
