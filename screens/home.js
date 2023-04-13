/* eslint-disable prettier/prettier */

import React, {useContext, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  onPress,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Box, HStack, Avatar, VStack} from 'native-base';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationPro,
} from '@react-navigation/stack';
import {ClothesContext} from '../src/context';

//dataStruct
import {HomeStackParamList} from '../src/types/NavigationTypes';

//screen
import Detail from './Detail';

//style
import {SIZES, COLORS} from '../constants/theme';

//Data
import musinsaWomen from '../src/data/MusinsaWomen';
import newData from '../src/data/NewData';
import recentData from '../src/data/RecentData';


const Home = () => {

  const navigation = useNavigation();
  const {recentlyViewed, trending, trendingClothes} =
    useContext(ClothesContext);
  const [showAddToBagModal, setShowAddToBagModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');


  function renderTrendingShoes(item : Item, index: number) {
    // var trendingStyle = {};
    var trendingStyle: {marginLeft? : number} ={};

    if (index == 0) {
      trendingStyle = {marginLeft: SIZES.padding};
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
          // navigation.navigate('Detail');
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
  };

  function renderLatestClothesTrendingItems(item : Item, index: number) {
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
          navigation.navigate('Detail', {
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

  function twoLineListRender(item : Item, index: number) {
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
          navigation.navigate('Detail', {
            // id: item.id,
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

  function renderRecentlyViewed(item : Item, index: number) {
    if (item.price.toString().includes('₩')) {
      item.price = Math.round(item.price.replace('₩', ''));
    } else if (!item.price.toString().includes('₩')) {
      item.price = '₩' + item.price;
    }

    return (
      <TouchableOpacity
        style={{flex: 1, flexDirection: 'row'}}
        onPress={() => {
          navigation.navigate('Detail', {
            id: item.id,
            name: item.name,
            img: item.img,
            type: item.type,
            price: item.price,
          });
        }}>
        <View
          style={{
            flex: 2,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 4,
          }}>
          <Image
            source={{uri: item.img}}
            resizeMode="contain"
            style={{
              borderRadius: 10,
              width: 110,
              height: 120,
              margin: 1,
            }}
          />
        </View>
        <View
          style={{flex: 3, marginLeft: SIZES.radius, justifyContent: 'center'}}>
          <Text style={{color: COLORS.black}}>{item.name}</Text>
          <Text>{item.price}</Text>
          <Text> 30% Off</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View>
      <ScrollView>
        {/* 최상위View */}
        <View style={styles.container}>
          {/* 1번째 리스트 : 신발 */}
          <View
            style={{height: 260, marginTop: 5, backgroundColor: COLORS.white}}>
            <FlatList
              horizontal
              data={trending}
              showsHorizontalScrollIndicator={false}
              nestedScrollEnabled={false}
              renderItem={({item, index}) => renderTrendingShoes(item, index)}
              keyExtractor={item => item.id.toString()}
            />
          </View>

          <View
            style={{height: 260, marginTop: 2, backgroundColor: COLORS.white}}>
            <FlatList
              horizontal
              data={musinsaWomen}
              nestedScrollEnabled={false}
              showsHorizontalScrollIndicator={false}
              renderItem={({item, index}) => twoLineListRender(item, index)}
              keyExtractor={item => item.id.toString()}
            />
          </View>

          {/* 2번 리스트: 베스트 clothes */}

          <View
            style={{height: 260, marginTop: 2, backgroundColor: COLORS.light1}}>
            <FlatList
              horizontal
              data={recentData}
              nestedScrollEnabled={false}
              renderItem={({item, index}) =>
                renderLatestClothesTrendingItems(item, index)
              }
              keyExtractor={item => item.id.toString()}
            />
          </View>

          {/* 3번째 */}
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
                nestedScrollEnabled={false}
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
    marginTop: 0,
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
