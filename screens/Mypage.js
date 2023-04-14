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
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginNavigator from '../navigations/LoginNavigator';

const STORAGE_KEY = 'members';

const Mypage = () => {
  const navigation = useNavigation();
  const [mainData, setMainData] = useState({
    id: '',
    password: '',
    email: '',
    recommendId: '',
    logState: false,
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem(STORAGE_KEY);
        if (value !== null) {
          setMainData(JSON.parse(value));
          console.log('my page 어씽크 가져온값:', JSON.parse(value));
        }
      } catch (error) {
        console.log('불러오기' + error);
      }
    };
    getData();
  }, []);

  

  const logoutState = () => {

    const updateInfo = {...mainData, logState: 'false'};
    setMainData(updateInfo);

    console.log('true 변경후 :', updateInfo);

    storeData(updateInfo);

    navigation.replace('HomeTabs');
  }

  const storeData = async (updateInfo) => {
    try {
      const jsonValue = JSON.stringify(updateInfo);
      await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
      console.log('업데이트 완료:' + jsonValue);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <View>
      <View>
          <TouchableOpacity onPress={logoutState}>
            <Text>로그아웃</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
};

export default Mypage;
