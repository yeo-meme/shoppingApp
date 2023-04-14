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
import {ScrollView} from 'react-native-gesture-handler';
import {
  Input,
  Heading,
  Box,
  Button,
  Center,
  Avatar,
  NativeBaseProvider,
  VStack,
  Spacer,
  HStack,
} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../constants';
import Join from './Join';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AuthNavigator from '../navigations/AuthNavigator';
import HomeNavigator from '../navigations/HomeNavigator';
import MypageNavigator from '../navigations/MyPageNavigator';

const STORAGE_KEY = 'members';

const Login = () => {
  type LoginValues = {
    id: string,
    password: string,
  };

  type MainData = {
    id: string,
    password: string,
    email: string,
    recommendId: string,
    logState: Boolean,
    follow: number,
    coupon: number,
  };

  type UserValue = {
    userCheck: Boolean,
    // logCheck: Boolean,
  };

  const [mainData, setMainData] = useState({
    id: '',
    password: '',
    email: '',
    recommendId: '',
    logState: false,
    follow: 0,
    coupon: 0,
  });

  const [loginValues, setLoginValues] = useState({
    id: '',
    password: '',
  });

  const [userValue, setUserValue] = useState({
    userCheck: false,
  });

  const navigation = useNavigation();
  const isFocused = useIsFocused();

  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem(STORAGE_KEY);
        if (value !== null) {
          setMainData(JSON.parse(value));
          console.log('login first 어씽크 가져온값:', JSON.stringify(mainData));
        }
      } catch (error) {
        console.log('로그인 first 불러오기' + error);
      }
    };
    getData();
  }, []);

  const storeData = async updateInfo => {
    try {
      const jsonValue = JSON.stringify(updateInfo);
      await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
      console.log('업데이트 완료:' + jsonValue);
      // navigation.navigate('Mypage');
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = () => {
    console.log('로그인밸류', loginValues.id);
    console.log('폼밸류 어씽크 미리불러옴 ', mainData.id);
    if (
      mainData.id === loginValues.id &&
      mainData.password === loginValues.password
    ) {
      const updateInfo = {...mainData, logState: true};
      setMainData(updateInfo);

      console.log('true 변경후 :', updateInfo);

      storeData(updateInfo);
    } else {
      Alert.alert('로그인 실패', '아이디 또는 비밀번호를 확인해주세요.');
    }
  };

  const logoutState = () => {
    const updateInfo = {...mainData, logState: false};
    setMainData(updateInfo);

    console.log('true 변경후 :', updateInfo);

    storeData(updateInfo);

    navigation.replace('HomeTabs');
  };

  console.log('mainData. : ' + mainData.logState);
  return (
    <View style={{height: '100%', width: '100%', backgroundColor: '#ffffff'}}>
      {mainData.logState == true ? (
        <View style={styles.container}>
          <View>
            <HStack style={{backgroundColor: 'black', height: 150}}>
              <View style={styles.circle} />
              <View style={styles.profile}>
                <Text>{mainData.id}</Text>
              </View>
            </HStack>
          </View>
          <View>
            {/* 프로필 */}
            <HStack
              space={[2, 3]}
              justifyContent="space-between"
              marginBottom={3}
              marginTop={5}>
              <Avatar
                size="35px"
                source={
                  {
                    // uri: item.proimg,
                  }
                }
              />
              <VStack space={1}>
                <Text
                  _dark={{
                    color: 'warmGray.50',
                  }}
                  color="coolGray.800"
                  bold>
                  {mainData.id}
                </Text>
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: 'warmGray.200',
                  }}>
                  {/* {item.brand_name} */}
                </Text>
              </VStack>
              <Spacer />
              <View>
                <TouchableOpacity
                  style={styles.button_logout}
                  onPress={logoutState}>
                  <Text>로그아웃</Text>
                </TouchableOpacity>
              </View>
            </HStack>

            {/* 팔로우 */}
            <HStack
              space={[2, 3]}
              justifyContent="space-between"
              marginBottom={3}
              marginTop={5}>
              <Avatar
                size="35px"
                source={
                  {
                    // uri: item.proimg,
                  }
                }
              />
              <VStack space={1}>
                <Text
                  _dark={{
                    color: 'warmGray.50',
                  }}
                  color="coolGray.800"
                  bold>
                팔로우
                </Text>
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: 'warmGray.200',
                  }}>
                    {mainData.follow}
                </Text>
              </VStack>
              <Spacer />
              <View>
                <TouchableOpacity
                  style={styles.button_logout}
                  >
                  <Text>관리</Text>
                </TouchableOpacity>
              </View>
            </HStack>

             {/* 쿠폰 */}
             <HStack
              space={[2, 3]}
              justifyContent="space-between"
              marginBottom={3}
              marginTop={5}>
              <Avatar
                size="35px"
                source={
                  {
                    // uri: item.proimg,
                  }
                }
              />
              <VStack space={1}>
                <Text
                  _dark={{
                    color: 'warmGray.50',
                  }}
                  color="coolGray.800"
                  bold>
                쿠폰
                </Text>
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: 'warmGray.200',
                  }}>
                    {mainData.coupon}
                </Text>
              </VStack>
              <Spacer />
              <View>
                <TouchableOpacity
                  style={styles.button_logout}
                  >
                  <Text>관리</Text>
                </TouchableOpacity>
              </View>
            </HStack>
          </View>
        </View>
      ) : (
        <View>
          <ScrollView>
            <VStack space={5} w="100%" px="3">
              <View style={{marginTop: 40}}>
                <Text>아직도 회원이 아니신가요?</Text>
                <Heading fontSize="xl">
                  회원만의 특별한 혜택을 누려보세요!
                </Heading>
              </View>

              <View style={{marginTop: 30}}>
                <Input
                  placeholder="id를 입력해주세요"
                  w="100%"
                  height={50}
                  marginBottom={2}
                  autoCapitalize="none"
                  value={loginValues.id}
                  onChangeText={text =>
                    setLoginValues({...loginValues, id: text})
                  }
                />
                <Input
                  placeholder="비밀번호를 입력해주세요"
                  w="100%"
                  height={50}
                  marginBottom={10}
                  autoCapitalize="none"
                  value={loginValues.password}
                  onChangeText={text =>
                    setLoginValues({...loginValues, password: text})
                  }
                />
                <TouchableOpacity
                  style={styles.button_login}
                  onPress={handleLogin}>
                  <Text style={styles.buttonText_login}>로그인</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.button_join}
                  onPress={() => {
                    navigation.navigate('Join');
                  }}>
                  <Text style={styles.buttonText_join}>회원가입</Text>
                </TouchableOpacity>
              </View>
            </VStack>
          </ScrollView>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
    paddingTop: 20,
  },
  submitBtn: {
    paddingTop: 40,
  },
  button_join: {
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 10,
    height: 50,
    borderColor: COLORS.black,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText_join: {
    color: 'black',
    fontWeight: 'bold',
  },
  buttonText_login: {
    color: 'white',
    fontWeight: 'bold',
  },
  button_login: {
    backgroundColor: 'blue',
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 10,
    height: 50,
    borderColor: COLORS.black,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText_logout: {
    color: 'white',
    fontWeight: 'bold',
  },
  button_logout: {
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 10,
    height: 30,
    borderColor: COLORS.black,
    padding: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Login;
