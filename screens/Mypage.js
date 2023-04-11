import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput, Alert } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Input,Heading, Box,Button, Center, NativeBaseProvider, VStack } from "native-base";

const MyPage = () => {

    return(
        <View style={{height: '100%', width: '100%', backgroundColor:'#ececec',}}>
            <View>
                <ScrollView>
                    <VStack space={5}  w="100%" px="3">
                    <View>
                        <Heading>
                            배송지를 저장해보세요
                        </Heading>
                    </View>
                    <View>
                        <View>
                        <Box alignSelf="center" >
                        <View style={styles.container}>
                        <Text>
                            할인받을 코드를 입력하세요
                        </Text>
                        </View>

                        <Input placeholder="Input" w="80%"/>
                            {/* <TextInput style={{width: '100%',backgroundColor: '#ececec',}}
                             placeholder={'PinCode를 입력하세요'}
                             keyboardType={"numeric"}
                             maxLength={6}
                             returnKeyType={"done"}
                             placeholderTextColor={'#212121'} >
                            </TextInput> */}
                       </Box>
                        </View>

                        <Box alignSelf="center" >
                            <View style={styles.container}>
                        <Text>
                            성함
                        </Text>
                        </View>
                        <Input placeholder="Input" w="80%" />
                        </Box>
                        {/* <View>
                            <TextInput style={{backgroundColor: '#ececec',}}
                            placeholder={'이름을 입력해주세요'}
                            textContentType={"이름"}
                            maxLength={20}
                            returnKeyType={"done"}
                            placeholderTextColor={'#212121'} >
                                </TextInput>
                        </View> */}
                        <Box alignSelf="center" >
                        <View style={styles.container}>
                        <Text>연락처
                        </Text>
                        </View>
                        <Input placeholder="Input" w="80%" />
                        </Box>
                         {/* <View>
                       
              <TextInput style={{backgroundColor: '#ececec',}}
              placeholder={'예) 000-0000-0000'}
                         keyboardType={"numeric"}
                         maxLength={12}
                         returnKeyType={"done"}
                        //  onChangeText={phone => onHandleChange("예)010-0000-0000", phone)}
                         placeholderTextColor={'#212121'}></TextInput>
            </View> */}
                   
                    </View>


                    <Box alignItems="center">
                        <View style={styles.submitBtn}/>
      {/* <Button onPress={() => console.log("hello world")}>Click Me</Button> */}
    </Box>
    </VStack>
                    {/* <View>
                            <Text>
                                배송지 저장
                            </Text>
                        </TouchableOpacity>
                    </View> */}
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingBottom:10,
        paddingTop:20
    },
    submitBtn: {
        paddingTop:40
    }
})

export default MyPage;