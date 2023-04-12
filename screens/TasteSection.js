/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import icons from '../constants/icons';
import {ProductsDummyData} from '../src/data';
import {ProductType} from '../src/types/DataTypes';
import images from '../constants/images';
import { ScrollView } from 'react-native-gesture-handler';

const TasteSection: React.FC = () => {
  const navigation = useNavigation();
  // const [product_list, setProductList] = useState<ProductType[]>(ProductsDummyData);

  function renderProductList(item: ProductType, index: number) {
    console.log("내취향");
    return (
      <ScrollView>
      <View>
      
      <View
        style={{
          backgroundColor: '#e5e5e5',
          padding: 1,
          height: 300,
          width: 150,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Product');
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
                아이템
              </Text>
            </View>
            <View
              style={{ flex: 7,  marginBottom: 4 }}>
              <Image
                resizeMode="contain"
                source={ images.nikeMetcon4 }
                style={{ height: 240, width: 400 }}
              />
            </View>

          </View>
        </TouchableOpacity>
      </View>
      </View>
      </ScrollView>
    );
  }
};

export default TasteSection;
