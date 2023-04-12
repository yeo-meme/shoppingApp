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
import {COLORS} from '../constants';

const MyPage = () => {
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

              <TouchableOpacity style={styles.button_join}>
                <Text style={styles.buttonText_join}>회원가입</Text>
              </TouchableOpacity>
            </View>

            {/* <View>
              <View>
                <Box alignSelf="center">
                  <View style={styles.container}>
                    <Text>할인받을 코드를 입력하세요</Text>
                  </View>
                </Box>
              </View>

              <Box alignSelf="center">
                <View style={styles.container}>
                  <Text>성함</Text>
                </View>
                <Input placeholder="Input" w="80%" />
              </Box>

              <Box alignSelf="center">
                <View style={styles.container}>
                  <Text>연락처</Text>
                </View>
                <Input placeholder="Input" w="80%" />
              </Box>
              <View>
                <TextInput
                  style={{backgroundColor: '#ececec'}}
                  placeholder={'예) 000-0000-0000'}
                  keyboardType={'numeric'}
                  maxLength={12}
                  returnKeyType={'done'}
                  placeholderTextColor={'#212121'}></TextInput>
              </View>
            </View> */}

            {/* <Box alignItems="center">
              <View style={styles.submitBtn} />
            </Box> */}
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
