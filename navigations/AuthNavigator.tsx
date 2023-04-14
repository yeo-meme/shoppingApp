
import React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { COLORS} from '../constants';
import { LoginStackParamList } from '../src/types/NavigationTypes';
// screens
import Mypage from "../screens/Mypage";
import Login from "../screens/Login";

const Stack = createStackNavigator()

export default function AuthNavigator() {
    const navigation = useNavigation<StackNavigationProp<LoginStackParamList>>()
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Mypage"component={Mypage}/>
            <Stack.Screen name="Login"component={Login}/>
        </Stack.Navigator>
    );
}