/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  FlatListProps,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import icons from '../constants/icons';
import {ProductsDummyData} from '../src/data/ProductsDummyData';
import {ProductType} from '../src/types/DataTypes';
import images from '../constants/images';
import {COLORS} from '../constants/theme';
import tasteData from '../src/data/TasteData';

const ProductList: React.FC = () => {
  const navigation = useNavigation();
  // const [product_list, setProductList] = useState<ProductType[]>(ProductsDummyData);
  // console.log('내취향');

  useEffect(() => {
    navigation.setOptions({
      title: `브랜드별 카테고리`,
    });
  }, [navigation]);

  function renderProductList(item, index) {
    return (
      <View
        style={{
          backgroundColor: '#e5e5e5',
          padding: 1,
          height: 300,
          width: '50%',
        }}>
        <TouchableOpacity
          onPress={() => {
            // navigation.navigate('Cart');
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignContent: 'center',
              height: '100%',
            }}>
            <View style={{zIndex: 20, position: 'absolute'}}>
              <Image
                resizeMode="contain"
                source={icons.discount_tag}
                style={{
                  marginTop: 10,
                  height: 20,
                  width: 60,
                  zIndex: 10,
                  position: 'absolute',
                }}
              />
              <Text
                style={{
                  position: 'absolute',
                  padding: 10,
                  zIndex: 20,
                }}>
                {item.offer}
              </Text>
            </View>
            <View
              style={{flex: 7, backgroundColor: COLORS.white, marginBottom: 4}}>
              <Image
                resizeMode="contain"
                source={{uri: item.img}}
                style={{height: 240, width: '100%'}}
              />
            </View>

            <View
              style={{
                flex: 3,
                paddingLeft: 16,
                marginTop: 10,
              }}>
              <Text
                style={{
                  color: COLORS.cat_title_color,
                }}>
                {item.brand_name}
              </Text>
              <View style={{ marginTop: 5}}>
                <Text style={{color: COLORS.black}}>{item.name}</Text>
              </View>
              <Text
                style={{
                  color: COLORS.cat_title_color,
                }}>
                {/* {item.price} */}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={tasteData}
        numColumns={2}
        keyExtractor={item => item.id.toString()}
        renderItem={({item, index}) => renderProductList(item, index)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    height: '100%',
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default ProductList;
