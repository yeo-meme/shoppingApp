import React, {useEffect, useState} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    TextInput,
    Alert,
  } from 'react-native';
  import { useNavigation } from '@react-navigation/native';

const Mypage = () => {

    const navigation = useNavigation();
        return (
            <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text>뒤로가기</Text>
          </TouchableOpacity>
        );
      };

export default Mypage;
