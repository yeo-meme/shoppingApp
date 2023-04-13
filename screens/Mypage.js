import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {
  Input,
  Heading,
  Box,
  Button,
  Center,
  NativeBaseProvider,
  VStack,
} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../constants';
import Join from './Join';

const MyPage = () => {

 const navigation = useNavigation();

  return (
    <View style={{height: '100%', width: '100%', backgroundColor: '#ffffff'}}>
      <View>
        <ScrollView>
          <VStack space={5} w="100%" px="3">
            <View style={{marginTop:40}}>
              <Text>아직도 회원이 아니신가요?</Text>
              <Heading fontSize="xl">
                회원만의 특별한 혜택을 누려보세요!
              </Heading>
            </View>

            <View style={{marginTop:30}}>
              <Input
                placeholder="id를 입력해주세요"
                w="100%"
                height={50}
                marginBottom={2}
              />
              <Input
                placeholder="비밀번호를 입력해주세요"
                w="100%"
                height={50}
                marginBottom={10}
              />
              <TouchableOpacity style={styles.button_login}>
                <Text style={styles.buttonText_login}>로그인</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button_join} onPress={()=>  navigation.navigate('Join')}>
                <Text style={styles.buttonText_join}>회원가입</Text>
              </TouchableOpacity>
            </View>

          </VStack>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
    paddingTop: 20,
  },
  submitBtn: {
    paddingTop: 40,
  },
  button_join: {
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 10,
    height: 50,
    borderColor: COLORS.black,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText_join: {
    color: 'black',
    fontWeight: 'bold',
  },
  buttonText_login: {
    color: 'white',
    fontWeight: 'bold',
  },
  button_login: {
    backgroundColor: 'blue',
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 10,
    height: 50,
    borderColor: COLORS.black,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MyPage;
