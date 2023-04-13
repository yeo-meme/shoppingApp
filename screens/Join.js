import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  onPress,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Box, HStack, Avatar, VStack, Heading, Input} from 'native-base';
import {COLORS} from '../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';


const STORAGE_KEY = 'members';
// const STORAGE_KEY = '@my_app_key';

const Join = () => {
  type FormValues = {
    id: string,
    password: string,
    email: string,
    recommendId: string,
  };

  //타입의 객체
  const [formValues, setFormValues] = useState({
    id: '',
    password: '',
    email: '',
    recommendId: '',
  });

  const saveData = async () => {
    try {
      await AsyncStorage.setItem(id, formValues);
    } catch (error) {
      console.log(error);
    }
  };


 

  const setMemberData = async () => {
    try {
        const jsonFormValues = JSON.stringify(formValues);
      await AsyncStorage.setItem(STORAGE_KEY, jsonFormValues);
      console.log('formValues:', jsonFormValues);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.formContainer}>
      <View style={styles.formSpacer}>
        <Heading fontSize="sm" marginBottom={2}>
          아이디
        </Heading>
        <Input
          placeholder="영문,숫자 5-11자"
          height={12}
          autoCapitalize='none'
          onChangeText={text => setFormValues({...formValues, id: text})}
          value={formValues.id}
        />
      </View>
      <View style={styles.formSpacer}>
        <Heading fontSize="sm" marginBottom={2}>
          비밀번호
        </Heading>
        <Input
          placeholder="숫자,영문,특수문자 조합 최소8자"
          height={12}
        //   secureTextEntry
          marginBottom={3}
          autoCapitalize='none'
          onChangeText={text => setFormValues({...formValues, password: text})}
          value={formValues.password}
        />
        <Input placeholder="비밀번호 재입력" 
        autoCapitalize='none'
        height={12} />
      </View>
      <View style={styles.formSpacer}>
        <Heading fontSize="sm" marginBottom={2}>
          이메일
        </Heading>
        <Input
          height={12}
          autoCapitalize='none'
          onChangeText={text => setFormValues({...formValues, email: text})}
          value={formValues.email}
        />
      </View>
      <View style={styles.formSpacer}>
        <Heading fontSize="sm" marginBottom={2}>
          친구 초대 추천인 아이디
        </Heading>
        <Input
          height={12}
          onChangeText={text =>
            setFormValues({...formValues, recommendId: text})
          }
          autoCapitalize='none'
          value={formValues.recommendId}
        />
      </View>

      <View style={styles.formSpacer} marginTop={20}>
        <TouchableOpacity style={styles.button} onPress={setMemberData}>
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
    paddingVertical: 20,
  },
  inputSpacer: {
    paddingVertical: 5,
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
