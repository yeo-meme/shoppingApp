/* eslint-disable react-native/no-inline-styles */

import {ScrollView} from 'react-native-gesture-handler';
import React, {startTransition} from 'react';
import {StyleSheet, View} from 'react-native';
import {makeMutable} from 'react-native-reanimated';
import {Text} from '@react-native-material/core';
import { StackRouter } from '@react-navigation/native';
import HomeNavigator from '../navigations/HomeNavigator';

const Cart = () => {
  return (
    <View style={{height: '100%', width: '100%'}}>
      <ScrollView>
        <View
          style={{
            padding: 20,
            display: 'flex',
            flexDirection: 'column',
            height: 260,
            margin: 10,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}>
            {/* 3 */}
            <View style={{flex: 2, justifyContent: 'space-evenly'}}>
              <Text style={{paddingBottom: 10}}>"Price"</Text>
              <Text style={{paddingBottom: 10}}>
                (40%) OFF Coupon Applicable
              </Text>
              <Text style={{paddingBottom: 10}}>Delivery By 21st July</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};


export default Cart;
