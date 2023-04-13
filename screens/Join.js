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
import {Box, HStack, Avatar, VStack, Heading, Input} from 'native-base';
import {COLORS} from '../constants';
const Join = () => {
  return (
    <View style={styles.formContainer}>
      <View style={styles.formSpacer} > 
        <Heading fontSize="sm" marginBottom={2}>아이디</Heading>
        <Input placeholder="영문,숫자 5-11자" height={12} />
      </View>
      <View style={styles.formSpacer}>
        <Heading fontSize="sm" marginBottom={2}>비밀번호</Heading>
        <Input placeholder="숫자,영문,특수문자 조합 최소8자" height={12} marginBottom={3} />
        <Input placeholder="비밀번호 재입력" height={12} />
      </View>
      <View style={styles.formSpacer}>
        <Heading fontSize="sm" marginBottom={2}>이메일</Heading>
        <Input height={12} />
      </View>
      <View style={styles.formSpacer}>
        <Heading fontSize="sm" marginBottom={2}>친구 초대 추천인 아이디</Heading>
        <Input height={12} />
      </View>

      <View style={styles.formSpacer} marginTop={20}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Join')}>
          <Text style={styles.buttonText}>회원가입</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: COLORS.white,
    height: '100%',
    paddingHorizontal: 20,
  },
  formSpacer: {
    paddingVertical:20
  },
  inputSpacer: {
    paddingVertical: 5
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
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.black,
    padding: 10,
    height: 50,
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

export default Join;
