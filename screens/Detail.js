import React, {useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {HomeStackParamList} from '../types';
import { ScrollView } from 'react-native-gesture-handler';
import images from '../constants/images';

type DetailScreenNavigationProp = StackNavigationProp<
  HomeStackParamList,
  'Detail',
>;

type Props = {
  navigation: DetailScreenNavigationProp,
};

const Detail: React.FC<Props> = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      headerShown: true
    });
  },[]);

  return (
    <View style={{height: '100%', width: '100%', backgroundColor:'#fafafa'}}>
      <ScrollView>

<View style={{height: 500, padding: 2}}>

<Image
 source={images.nikeMetcon3}
 resizeMode="contain"
 style = {{
     width: 400,
     height: 600,
 }}
/>
</View>

<View 
style={{
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  margin: 10,
}}>
  <View style={{flex: 1, alignItems: 'flex-start'}}>
  <Text>나이키</Text>
  </View>
  <View style={{flex: 1, alignItems: 'flex-end'}}>
  <Text>200,000</Text>
  </View>
</View>

<View
style={{
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  margin: 10,
}}>
 <View style={{flex: 1, alignItems: 'flex-start'}}>
            <Text>
              short description
            </Text>
          </View>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <Text>(40%)</Text>
          </View>
        </View>
      </ScrollView>


<View
style={{
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  width: '100%',
  position: 'relative',
  bottom: 0,
  height: 70,
  justifyContent: 'center',
  backgroundColor: '#fff',
}}>
  <View
  style={{
    flex: 1,
    backgroundColor: '#fafafa',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  }}>
    <TouchableOpacity
    onPress={() => {
      navigation.navigate('Cart');
    }}>
      <Text>ADD TO BAG</Text>
    </TouchableOpacity>
  </View>
  <View
          style={{
            flex: 1,
            backgroundColor: '#DA1C4C',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Cart');
            }}>
            <Text style={{ color: '#ffffff'}}>
              구매하기 
            </Text>
          </TouchableOpacity>
        </View>

</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  backText: {
    fontSize: 18,
  },
});

export default Detail;
