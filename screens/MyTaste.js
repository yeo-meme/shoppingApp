/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  FlatListProps,
  TouchableOpacity,
} from 'react-native';
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
  ZStack,
} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import icons from '../constants/icons';
import {ProductsDummyData} from '../src/data/ProductsDummyData';
import {ProductType} from '../src/types/DataTypes';
import images from '../constants/images';
import {COLORS} from '../constants/theme';
import tasteData from '../src/data/TasteData';
import {ScrollView} from 'react-native-gesture-handler';
import allSnapInfo from '../src/data/SnapData';
import snapImage from '../constants/snap_image';
import {MaterialBottomTabView} from '@react-navigation/material-bottom-tabs';

const MyTaste: React.FC = () => {
  const navigation = useNavigation();
  // const [product_list, setProductList] = useState<ProductType[]>(ProductsDummyData);

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
          height: 800,
          width: '100%',
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
            {/* 라벨 */}
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
                style={{height: 500, width: '100%'}}
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
              <View style={{marginTop: 5}}>
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
    <View>
      <Heading fontSize="xl" pl="17px" pt="20px">
        내 취향과 매치되는 크리에이터를 {'\n'}팔로우 해보세요
      </Heading>

      <FlatList
        data={allSnapInfo}
        renderItem={({item}) => (
          <Box
            _dark={{
              borderColor: 'muted.50',
            }}
            borderColor="muted.800"
            pl={['0', '4']}
            pr={['0', '5']}
            py="2">
              <HStack
                space={[2, 3]}
                justifyContent="space-between"
                marginBottom={3}
                marginTop={5}>
                <Avatar
                  size="35px"
                  source={{
                    uri: item.proimg,
                  }}
                />

                <VStack space={1}>
                  <Text
                    _dark={{
                      color: 'warmGray.50',
                    }}
                    color="coolGray.800"
                    bold>
                    {item.name}
                  </Text>
                  <Text
                    color="coolGray.600"
                    _dark={{
                      color: 'warmGray.200',
                    }}>
                    {item.brand_name}
                  </Text>
                </VStack>
                <Spacer />
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>팔로우</Text>
                </TouchableOpacity>
              </HStack>
            <View style={styles.likeit_container}>
                <Image source={item.img} style={styles.image} />

                <TouchableOpacity style={styles.heartIconContainer}>
                  <MaterialCommunityIcons
                    name="heart-multiple-outline"
                    size={35}
                  />
                </TouchableOpacity>
            </View>
          </Box>
        )}
        keyExtractor={item => item.id}
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
  button: {
    backgroundColor: 'white',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: COLORS.black,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 500,
  },
  likeit_container: {
    position: 'relative',
    marginBottom: 10,
  },
  heartIconContainer: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: 'transparent',
    padding: 15,
  },
});

export default MyTaste;
