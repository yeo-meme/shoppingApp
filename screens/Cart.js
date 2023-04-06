/* eslint-disable react-native/no-inline-styles */

import {ScrollView} from 'react-native-gesture-handler';
import React, {startTransition} from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {makeMutable} from 'react-native-reanimated';
import {Text} from '@react-native-material/core';
import {StackRouter} from '@react-navigation/native';
import HomeNavigator from '../navigations/HomeNavigator';
import {COLORS} from '../constants/theme';
import images from '../constants/images';
import icons from '../constants/icons';

const Cart = ({navigation}) => {
  const discount_value = Math.round(30000 / 40);
  const discounted_price = Math.round(60000 - discount_value);

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
            backgroundColor: COLORS.white,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}>
            {/* 3 */}
            <View style={{flex: 2, justifyContent: 'space-evenly'}}>
              <Text style={{paddingBottom: 10}}>상품명</Text>
              <Text style={{paddingBottom: 10}}>가격</Text>
              <Text
                style={{
                  paddingBottom: 10,
                  color: '#b71c1c',
                }}>
                (40%) Off Coupon Applicable
              </Text>
              <Text style={{color: COLORS.black}}>Delivery By 21st July</Text>
            </View>
            {/* 4 */}
            <View style={{flex: 1}}>
              <Image
                source={images.nikeMetcon3}
                resizeMode="contain"
                style={{
                  width: 100,
                  height: 120,
                }}
              />
            </View>
          </View>
          {/* 5 */}
          <View
            style={{
              padding: 10,
              position: 'absolute',
              bottom: 0,
              marginBottom: 20,
              marginLeft: 20,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignContent: 'flex-end',
            }}>
            {/* 6 */}
            <View
              style={{
                flex: 3,
                marginTop: 6,
                flexDirection: 'row',
                alignItems: 'center',
                alignContent: 'center',
              }}>
              <Image
                resizeMode="cover"
                source={icons.save_tag}
                style={{height: 20, width: 20}}></Image>
              <Text>SAVE</Text>
            </View>
          </View>
          <View style={{flex: 1}}>
            <Text>수량 : 1</Text>
          </View>
        </View>
        {/* 첫번째 View마직막 */}
        {/* 7 */}
        {/* 두번째박스 View시작 */}
        <View
          style={{
            display: 'flex',
            borderRadius: 4,
            marginLeft: 10,
            marginRight: 10,
            marginTop: 10,
            marginBottom: 60,
            padding: 10,
            minHeight: 200,
            height: '100%',
            flexDirection: 'column',
            backgroundColor: COLORS.white,
          }}>
          {/* 8 */}
          <View
            style={{
              marginTop: 10,
              marginLeft: 4,
              display: 'flex',
              flexDirection: 'row',
              alignContent: 'flex-end',
              justifyContent: 'flex-end',
            }}>
            {/* 9 */}
            <View style={{flex: 4}}>
              <Text>Bag Total</Text>
            </View>
            {/* 10 */}
            <View style={{flex: 1}}>
              <Text>
                {/* ₹{price} */}
                상품가격
              </Text>
            </View>
          </View>
          {/* 11 */}
          <View
            style={{
              marginTop: 10,
              marginLeft: 4,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}>
            {/* 12 */}
            <View style={{flex: 4}}>
              <Text>Shipping Charge</Text>
            </View>
            {/* 13 */}
            <View style={{flex: 1}}>
              <Text>
                {/* ₹{price} */}
                상품가격
              </Text>
            </View>
          </View>

          {/* 14 */}
          <View
            style={{
              marginTop: 10,
              marginLeft: 4,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}>
            {/* 15 */}
            <View style={{flex: 4}}>
              <Text>Product Discount</Text>
            </View>
            {/* 16 */}
            <View style={{flex: 1}}>
              <Text style={{color: '#00964D'}}>
                {/* - ₹{discount_value} */}23231
              </Text>
            </View>
          </View>
          {/* 17 */}
          <View
            style={{
              marginTop: 10,
              marginLeft: 4,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}>
            <View style={{flex: 4}}>
              <Text>Total Payable</Text>
            </View>
            <View style={{flex: 1}}>
              <Text>
                {/* ₹{discounted_price} */}
                34938492
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      
      {/* 두번째 박스마지막 */}
      {/* 결제하기 View 시작 */}
      <View
        style={{
          alignItems: 'center',
          width: '100%',
          position: 'absolute',
          bottom: 0,
          height: 70,
          backgroundColor: '#000',
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#DA1C4C',
            width: '100%',
            minHeight: 60,
            height: '80%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity onPress={() => {}}>
            <Text style={{color: COLORS.white}}>결제하기</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Cart;
