/* eslint-disable react-native/no-inline-styles */
import React, {userEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native'


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

const Category = () => {

  const renderItem = ({item}: any) => <Item title={item.title} />;

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
                <Text style={{
                  color: '#212121',
                  height:40,
                }}>Hellog
                </Text>
          </view>
                <View style={{flex:1, alignItems:'flex-end'}}>
                </View>
         </View>
        </TouchableOpacity>
    );
  }
  
  return (
    <View>
      <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
    </View>
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
    left:0,
    bottom:0,
    right:0,
  }
});
export default Category;
