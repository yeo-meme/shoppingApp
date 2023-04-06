import React, {useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {HomeStackParamList} from '../types';

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
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => {
          navigation.goBack();
        }}>
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Detail Screen</Text>
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
