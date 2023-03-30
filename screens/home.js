/* eslint-disable prettier/prettier */
import {useNavigation} from '@react-navigation/native';
import React, {useContext, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

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

const Item = ({title}: any) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Home = () => {
  const renderItem = ({item}: any) => <Item title={item.title} />;

  return (
    <View>
      <ScrollView>
        {/* 최상위View */}
        <View style={styles.container}>
          {/* 1번째 리스트 : 신발 */}
          <View style={{height: 260, marginTop: 5}}>
            <FlatList
              horizontal
              data={DATA}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          </View>
          {/* 2번 리스트: 베스트 clothes */}
          <View style={{height: 260, marginTop: 2}}>
            <FlatList
              horizontal
              data={DATA}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
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
                data={DATA}
                renderItem={renderItem}
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
