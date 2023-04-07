/* eslint-disable prettier/prettier */

import React, {useContext, useState, useLayoutEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  onPress,
  SafeAreaView,
  StatusBar,
  ImageBase,
} from 'react-native';
// import SvgUri from 'react-native-svg-uri';
import {ScrollView} from 'react-native-gesture-handler';
import {Box, HStack, Avatar, VStack} from 'native-base';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationPro,
} from '@react-navigation/stack';
import {HomeStackParamList} from '../src/types/NavigationTypes';
import Detail from '../screens/Detail';
import {SIZES, COLORS} from '../constants/theme';
import {ClothesContext} from '../src/context';
import { TrendingDummyData } from '../src/data/TrendingDummyData';
import musinsaWomen from '../src/data/musinsaWomen';
import newData from '../src/data/newData';
import recentData from '../src/data/RecentData'


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

const Home = () => {
  console.log('home.log');

  const navigation = useNavigation();
  const {recentlyViewed, trending, trendingClothes} = useContext(ClothesContext);
  const [showAddToBagModal, setShowAddToBagModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');

  const handleItemPress = itemId => {
    navigation.navigate('Detail', {id: itemId, headerShown: true});
    console.log('home.touch.log');
  };

  function renderTrendingShoes(item, index) {
    var trendingStyle = {};

    if (index == 0) {
      trendingStyle = {marginLeft: SIZES.padding};
    } else {
      trendingStyle = {};
    }

    // if (item.price.toString().includes('$')) { item.price = Math.round(item.price.replace('$', '')); }
    // else if (!item.price.toString().includes('₹')) { item.price = '₹' + item.price; }

    return (
      <TouchableOpacity
        style={{
          height: 240,
          width: 180,
          justifyContent: 'center',
          marginHorizontal: SIZES.base,
        }}
        onPress={() => {
          setSelectedItem(item);
          setShowAddToBagModal(true);
        }}>
        <Text style={{color: COLORS.gray}}>{item.type}</Text>

        <View
          style={[
            {
              flex: 1,
              justifyContent: 'flex-end',
              marginTop: SIZES.base,
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              marginRight: SIZES.padding,
              paddingLeft: SIZES.radius,
              paddingRight: SIZES.padding,
              paddingBottom: SIZES.radius,
              backgroundColor: item.bgColor,
            },
            styles.trendingShadow,
          ]}>
          <View style={{height: '35%', justifyContent: 'space-between'}}>
            <Text style={{color: COLORS.white}}>{item.name}</Text>
            <Text style={{color: COLORS.white}}>{item.price}</Text>
          </View>
        </View>

        <View
          style={{
            position: 'absolute',
            top: 27,
            right: 0,
            width: '95%',
            height: '100%',
          }}>
          {/* <Svg height="100%" width="100%">
                    <Polygon
                        points="0,0 160,0 160,80"
                        fill="white"
                    />
                </Svg> */}
        </View>

        <Image
          source={item.img}
          resizeMode="cover"
          style={{
            position: 'absolute',
            elevation: 10,
            top: 50,
            right: 0,
            width: '98%',
            height: 80,
            transform: [{rotate: '-15deg'}],
          }}
        />
      </TouchableOpacity>
    );
  }

  function renderLatestClothesTrendingItems(item, index) {
    var trendingStyle = {};

    if (index == 0) {
      trendingStyle = {marginLeft: SIZES.padding};
    } else {
      trendingStyle = {};
    }

    return (
      <TouchableOpacity
        style={{
          height: 320,
          width: 180,
          padding: 2,
        }}
        onPress={() => {
          // setSelectedItem(item)
          // setShowAddToBagModal(true)
          navigation.navigate('Product', {
            id: item.id,
            name: item.name,
            img: item.img,
            type: item.type,
            price: item.price,
          });
        }}>
        <View
          style={{
            height: 260,
            width: '100%',
            padding: 8,
            alignItems: 'flex-start',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
          }}>
          <Image
            source={{uri: item.img}}
            resizeMode="contain"
            style={{
              flex: 3,
              width: '100%',
              borderRadius: 8,
              height: 200,
            }}
          />
          <Text style={{flex: 1, color: COLORS.black}}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  function FlatListItemSeparator() {
    return (
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: COLORS.lightGray,
        }}
      />
    );
  }

  function renderShoeSizes() {
    return selectedItem.sizes.map((item, index) => {
      return (
        <TouchableOpacity
          key={index}
          style={{
            width: 35,
            height: 25,
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 5,
            marginBottom: 10,
            backgroundColor:
              selectedItem.sizes[index] == selectedSize ? COLORS.white : null,
            borderWidth: 1,
            borderColor: COLORS.white,
            borderRadius: 5,
          }}
          onPress={() => {
            setSelectedSize(item);
          }}>
          <Text
            style={{
              color:
                selectedItem.sizes[index] == selectedSize
                  ? COLORS.black
                  : COLORS.white,
            }}>
            {item}
          </Text>
        </TouchableOpacity>
      );
    });
  }

  function dummyRender (item, index) { 
    var trendingStyle = {};

    if (index == 0) {
      trendingStyle = {marginLeft: SIZES.padding};
    } else {
      trendingStyle = {};
    }

    return (
      <TouchableOpacity
        style={{
          height: 320,
          width: 180,
          padding: 2,
        }}
        onPress={() => {
          // setSelectedItem(item)
          // setShowAddToBagModal(true)
          navigation.navigate('Product', {
            id: item.id,
            name: item.name,
            img: item.img,
            type: item.type,
            price: item.price,
          });
        }}>
        <View
          style={{
            height: 260,
            width: '100%',
            padding: 8,
            alignItems: 'flex-start',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
          }}>
          <Image
            source={{uri: item.img}}
            resizeMode="contain"
            style={{
              flex: 3,
              width: '100%',
              borderRadius: 8,
              height: 200,
            }}
          />
          <Text style={{flex: 1, color: COLORS.black}}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  function renderRecentlyViewed(item, index) {
    if (item.price.toString().includes('$')) { item.price = Math.round(item.price.replace('$', '')); }
    else if (!item.price.toString().includes('₹')) { item.price = '₹' + item.price; }

    return (
        <TouchableOpacity
            style={{ flex: 1, flexDirection: 'row' }}
            onPress={() => {
                navigation.navigate('Product', {
                    id: item.id,
                    name: item.name,
                    img: item.img,
                    type: item.type,
                    price: item.price,
                });
            }}
        >
            <View style={{
                flex: 2, alignItems: 'center', justifyContent: 'center', padding: 4
            }}>
                <Image
                    source={{ uri: item.img }}
                    resizeMode="contain"
                    style={{
                        borderRadius: 10,
                        width: 110,
                        height: 120,
                        margin: 1,

                    }}
                />
            </View>
            <View style={{ flex: 3, marginLeft: SIZES.radius, justifyContent: 'center' }}>
                <Text style={{ color: COLORS.black}}>{item.name}</Text>
                <Text >{item.price}</Text>
                <Text > 30% Off</Text>
            </View>
        </TouchableOpacity>
    );
}

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

  return (
    <View>
      <ScrollView>
        {/* 최상위View */}
        <View style={styles.container}>
          {/* 1번째 리스트 : 신발 */}
          {/* <View style={{height: 260, marginTop: 5,backgroundColor: COLORS.white}}>
            <FlatList
              horizontal
              data={trending}
              showsHorizontalScrollIndicator={false}
              renderItem={({item, index}) => renderTrendingShoes(item, index)}
              keyExtractor={item => item.id.toString()}

              // (
              //   <Box
              //     borderBottomWidth="1"
              //     _dark={{
              //       borderColor: 'muted.50',
              //     }}
              //     borderColor="muted.800"
              //     pl={['0', '4']}
              //     pr={['0', '5']}
              //     py="2">
              //     <HStack space={[2, 3]} justifyContent="space-between">
              //       <Image
              //         size="200px"
              //         source={{
              //           uri: item.avatarUrl,
              //           // item.avatarUrl
              //         }}
              //       />
              //     </HStack>
              //   </Box>
              // )
              // }
              // keyExtractor={item => item.id}
            />
          </View> */}


           <View style={{height: 260, marginTop: 5,backgroundColor: COLORS.white}}>
            <FlatList
              horizontal
              data={trending}
              showsHorizontalScrollIndicator={false}
              renderItem={({item, index}) => renderTrendingShoes(item, index)}
              keyExtractor={item => item.id.toString()}
            />
          </View>

          <View style={{height: 260, marginTop: 5,backgroundColor: COLORS.white}}>
            <FlatList
              horizontal
              data={musinsaWomen}
              showsHorizontalScrollIndicator={false}
              renderItem={({item, index}) => dummyRender(item, index)}
              keyExtractor={item => item.id.toString()}
            />
          </View>

          {/* 2번 리스트: 베스트 clothes */}

          <View style={{height: 260, marginTop: 2, backgroundColor: COLORS.light1}}>
            <FlatList
              horizontal
              data={recentData}
              renderItem={({item, index}) => renderLatestClothesTrendingItems(item, index)}
              keyExtractor={item => item.id.toString()}
            />
          </View>

{/* 3번째 */}
          {/* <View
            style={[
              {
                flex: 1,
                flexDirection: 'row',
                marginTop: SIZES.padding,
                borderTopLeftRadius: 40,
                borderTopRightRadius: 40,
                backgroundColor: COLORS.white,
              },
              styles.recentContainerShadow,
            ]}>
            <View style={{flex: 1, paddingBottom: SIZES.padding}}>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={recentlyViewed}
                keyExtractor={item => item.id.toString()}
                ItemSeparatorComponent={FlatListItemSeparator}
                renderItem={({item, index}) =>
                  renderRecentlyViewed(item, index)
                }
              />
            </View>
          </View> */}

          {/* 내데이터 */}
          <View
            style={[
              {
                flex: 1,
                flexDirection: 'row',
                marginTop: SIZES.padding,
                borderTopLeftRadius: 40,
                borderTopRightRadius: 40,
                backgroundColor: COLORS.white,
              },
              styles.recentContainerShadow,
            ]}>
            <View style={{flex: 1, paddingBottom: SIZES.padding}}>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={newData}
                keyExtractor={item => item.id.toString()}
                ItemSeparatorComponent={FlatListItemSeparator}
                renderItem={({item, index}) =>
                  renderRecentlyViewed(item, index)
                }
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
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
