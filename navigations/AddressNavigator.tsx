import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { AddressStackParamList } from '../src/types/NavigationTypes';
//screens
import Address from '../screens/Forms/Address.js';

const Stack = createStackNavigator<AddressStackParamList>()

export default function AddressNavigator() {
    const navigation = useNavigation<StackNavigationProp<AddressStackParamList>>()
    return (
        <Stack.Navigator initialRouteName={'Address'}>
            <Stack.Screen
                name="Address"
                component={Address}
                options={{
                    title: 'Address',
                    headerStyle: {
                        //backgroundColor: '#f4511e',
                    },
                    headerLeft: ({ onPress }) => (
                        <TouchableOpacity
                            style={{ marginLeft: 30 }}
                            onPress={() => navigation.navigate('Home')}>
                            {/* <Image
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                }}
                            /> */}
                        </TouchableOpacity>
                    ),
                }}
            />
        </Stack.Navigator>
    );
}