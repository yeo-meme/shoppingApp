/* eslint-disable prettier/prettier */
import {useNavigation} from '@react-navigation/native';
import React, {useContext, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  StatusBar,
  ImageBase,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {CloshtesContext} from '../src/context';
import {Box, HStack, Avatar, VStack, Image} from 'native-base';

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

const Item = ({data}: any) => (
  <View style={styles.item}>
    {/* <Text style={styles.title}>{data.fu}</Text> */}
    <Image source={data.avatarUrl} />
  </View>
);

const Home = () => {
  // demy item List text
  const renderItem = ({item}: any) => <Item data={item} />;

  const renderItem1 = ({item}: any) => {
    console.log(JSON.stringify(item));
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
      </HStack>
    </Box>;
  };

  //Clothes Data -- context missing
  //Clothes Data -- context missing
  //  const navigation = useNavigation()
  //  const appContext = useContext(CloshtesContext)
  //  const { recentlyViewed, trending, trendingClothes} = appContext

  //  const [showAddToBagModal, setShowAddToBackModal] = useState(false);
  //  const [selectedItem , setSelectedItem] = useState(null);
  //  const [selectedSize, setSelectedSize] = useState('');

  // function renderTrendingShoes(item, index) {
  //   var trendingStyle = {};

  //   if (index == 0) {
  //     trendingStyle = {marginLeft: 20};
  //   }  else {
  //     trendingStyle = {};
  //   }

  // }

  // View
  return (
    <View>
      <ScrollView>
        {/* 최상위View */}
        <View style={styles.container}>
          {/* 1번째 리스트 : 신발 */}
          <View style={{height: 260, marginTop: 5}}>
            <FlatList
              horizontal
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
                    <Image
                      size="200px"
                      source={{
                        uri: item.avatarUrl,
                        // item.avatarUrl
                      }}
                    />
                  </HStack>
                </Box>
              )}
              keyExtractor={item => item.id}
            />
          </View>

          {/* 2번 리스트: 베스트 clothes */}
          <View style={{height: 260, marginTop: 2}}>
            <FlatList
              horizontal
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
                    <Image
                      size="200px"
                      source={{
                        uri: item.avatarUrl,
                        // item.avatarUrl
                      }}
                    />
                  </HStack>
                </Box>
              )}
              keyExtractor={item => item.id}
            />
            {/* <FlatList
              horizontal
              data={DATA}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            /> */}
          </View>

          <View
            style={[
              {
                flex: 1,
                flexDirection: 'row',
                margoinTop: 10,
                borderTopLeftRadius: 40,
                borderTopRightRadius: 40,
              },
            ]}>
            {/* 3번 리스트: 여성복 */}
            <View
              style={{
                flex: 1,
                paddingBottom: 10,
              }}>
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
                      <Image
                        size="400px"
                        source={{
                          uri: item.avatarUrl,
                          // item.avatarUrl
                        }}
                      />
                    </HStack>
                  </Box>
                )}
                keyExtractor={item => item.id}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );

  //   const navigation = useNavigation();

  //   function rederTrendingShoes() {
  // return (
  //   <TouchableOpacity>
  //     style= {{height: 240, width: 180, justifyContent: 'center'}}
  //     <View>
  //       <Text style={{color: COLORS.gray, ...FONTS.h5}}>"hello"</Text>
  //       <View style={{height: '35%', justifyContent: 'space-between'}}>
  //         <Text style={{color: COLORS.white, ...FONTS.prod_list_title_text}}>
  //           {item.name}
  //         </Text>
  //         <Text style={{color: COLORS.white, ...FONTS.prod_list_price_text}}>
  //           {item.price}
  //         </Text>
  //       </View>
  //     </View>
  //     <View
  //       style={{
  //         position: 'absolute',
  //         top: 27,
  //         right: 0,
  //         width: '95%',
  //         height: '100%',
  //       }}>
  //       <Svg height="100%" width="100%">
  //         <Polygon points="0,0 160,0 160,80" fill="white" />
  //       </Svg>
  //     </View>
  //   </TouchableOpacity>
  // );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default Home;
