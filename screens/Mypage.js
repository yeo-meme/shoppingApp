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
import {HStack, VStack} from 'native-base';
import {COLORS} from '../constants';

const STORAGE_KEY = 'members';

const Mypage = () => {
  const navigation = useNavigation();
  const [mainData, setMainData] = useState({
    id: '',
    password: '',
    email: '',
    recommendId: '',
    logState: false,
    follow: 0,
    coupon: 0,
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
  };

  const storeData = async updateInfo => {
    try {
      const jsonValue = JSON.stringify(updateInfo);
      await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
      console.log('업데이트 완료:' + jsonValue);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* {!mainData.logState ? (
        <LoginNavigator />
      ) : ( */}
        <View style={styles.container}>

          <View>
              <VStack>
          <Image
            source={eventData.event_banner}
            style={{height: 600, width: '100%', resizeMode: 'contain'}}
          />
          <Heading fontSize="xl" pl="17px" pt="70px">
            깜짝 위클리 10% 쿠폰까지
          </Heading>
          <Text style={{paddingLeft: 17}}>
            트렌드 럭셔리 구매 고객이라면 누구나
          </Text>

          <View style={{ padding: 20, paddingBottom: 0}}>
            <Image
              source={eventData.coupon1}
              resizeMode="stretch"
              style={{height: 140, width: '100%'}}
            />
             <Image
              source={eventData.coupon2}
              resizeMode="stretch"
              style={{height: 140, width: '100%'}}
            />
            <TouchableOpacity style={styles.button}
             onPress={() => handlePress(mainData.logState)}>
              <Text style={styles.buttonText}>쿠폰 다운로드</Text>
            </TouchableOpacity>

          </View>
        </VStack>
            <HStack style={{backgroundColor: 'black'}}>
              <View style={styles.circle} />
              <View style={styles.profile}>
                <Text>{mainData.id}</Text>
              </View>

              <View>
                <TouchableOpacity
                  style={styles.button_logout}
                  onPress={logoutState}>
                  <Text>로그아웃</Text>
                </TouchableOpacity>
              </View>
            </HStack>
          </View>
          <View>
            <HStack>
              <Text>사용가능한 쿠폰:</Text>
              <Text>3개</Text>
            </HStack>
            <HStack>
              <Text>팔로우:</Text>
              <Text>3개</Text>
            </HStack>
          </View>
        </View>
      {/* )} */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    height: '100%',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  profile: {
    width: '100%',
    flex: 1,
    marginLeft: 10,
    verticalAlign: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'gray',
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

export default Mypage;
