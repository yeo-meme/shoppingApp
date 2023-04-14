/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useLayoutEffect} from 'react';
import {Image} from 'native-base';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import {
  Input,
  Heading,
  HStack,
  Avatar,
  VStack,
  Spacer,
  Box,
  Button,
  Center,
  NativeBaseProvider,
} from 'native-base';
import {useFocusEffect} from '@react-navigation/native';
import eventData from '../constants/event_image';

import {ScrollView} from 'react-native-gesture-handler';
import { color } from 'native-base/lib/typescript/theme/styled-system';
import { COLORS } from '../constants';

const DATA = [
  {
    id: 1,
    title: 'First Item',
  },
  {
    id: 2,
    title: 'Second Item',
  },
  {
    id: 3,
    title: 'Third Item',
  },
];


const STORAGE_KEY = 'settings';

const Item = ({title}: any) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const data = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    fullName: '금/토/일 단 3일간',
    timeStamp: '~23/4/17',
    recentText: '인기 BEST',
    avatarUrl:
      'https://image.msscdn.net/images/goods_img/20220822/2731576/2731576_2_500.jpg',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    fullName: 'Change of Season',
    timeStamp: '~23/6/10',
    recentText: '주말 특가',
    avatarUrl:
      'https://image.msscdn.net/images/goods_img/20230213/3078392/3078392_16800769563057_500.jpg',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    fullName: '무신사 포커스',
    timeStamp: '~23/4/3',
    recentText: '트렌드 픽!',
    avatarUrl:
      'https://image.msscdn.net/images/goods_img/20220823/2734385/2734385_2_500.jpg',
  },
  {
    id: '68694a0f-3da1-431f-bd56-142371e29d72',
    fullName: '특가 스케줄 미리보기',
    timeStamp: '~23/4/30',
    recentText: '봄 이너',
    avatarUrl:
      'https://image.msscdn.net/images/goods_img/20190507/1036763/1036763_1_500.jpg',
  },
  {
    id: '28694a0f-3da1-471f-bd96-142456e29d72',
    fullName: '상의 카테고리 별 최저가 도전!',
    timeStamp: '~23/4/10',
    recentText: '랭킹',
    avatarUrl:
      'https://image.msscdn.net/images/goods_img/20220617/2622514/2622514_1_500.jpg',
  },
];

const Category = ({navigation}) => {

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

  // useEffect(() => {
  //   navigation.setOptions({
  //     title: `이벤트요정`,
  //   });
  // }, [navigation]);

  // const renderItem = ({item}: any) => <Item title={item.title} />;



  function renderCategoryList() {
    return (
      <TouchableOpacity
        onPress={() => {
          console.log('pressed on category');
          navigation.navigate('ProductList', {});
        }}>
        <View
          style={{
            height: 20,
            padding: 20,
            margin: 6,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}>
          <view style={{flex: 1, alignItems: 'flex-start'}}>
            <Text
              style={{
                color: '#212121',
                height: 40,
              }}>
              Hellog
            </Text>
          </view>
          <View style={{flex: 1, alignItems: 'flex-end'}}></View>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <ScrollView>
      <Box>
        {/* <Heading fontSize="xl" p="4" pb="3">
          2023 럭셔리 트렌드 스타일을 {'\n'}둘러 보세요
        </Heading> */}

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
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>쿠폰 다운로드</Text>
            </TouchableOpacity>

          </View>
        </VStack>

        <FlatList
          data={data}
          renderItem={({item}) => (
            <Box
              borderBottomWidth="1"
              _dark={{
                borderColor: 'muted.50',
              }}
              borderColor="muted.800"
              pl={['0', '4']}
              pr={['0', '5']}
              py="2">
              <HStack space={[2, 3]} justifyContent="space-between">
                <Avatar
                  size="60px"
                  source={{
                    uri: item.avatarUrl,
                    // item.avatarUrl
                  }}
                />

                <VStack>
                  <Text
                    _dark={{
                      color: 'warmGray.50',
                    }}
                    color="coolGray.800"
                    bold>
                    {item.fullName}
                  </Text>
                  <Text
                    color="coolGray.600"
                    _dark={{
                      color: 'warmGray.200',
                    }}>
                    {item.recentText}
                  </Text>
                </VStack>
                <Spacer />
                <Text
                  fontSize="xs"
                  _dark={{
                    color: 'warmGray.50',
                  }}
                  color="coolGray.800"
                  alignSelf="flex-start">
                  {item.timeStamp}
                </Text>
              </HStack>
            </Box>
          )}
          keyExtractor={item => item.id}
        />
      </Box>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#33FFCC',
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 50,
    borderWidth: 1,
    marginTop: 20,
    marginBottom: 50,
    borderColor: COLORS.black,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
});
export default Category;
