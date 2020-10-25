/**
 * SIGN UP SCREEN
 * 
 */
import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity, Dimensions, Image, Alert, Platform, TextInput, ScrollView} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import { set } from 'react-native-reanimated';
import { getToolAdd } from '../../Model/news';
//---DO By Person---

const SignUpScreen = ({navigation}) => {
//===============XU=LY=THAO=TAC=P1================
    const [data, setData] = React.useState({
        username: '',
        password: '',
        email: '',
        confirm_password: '',
        check_textInputChange: false,
        check_textEmailChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
        isValidConfrimPassword: true,
        isValidEmail: true,
        temp: '',
    });
    //---JSON---
    const insertUser = (username, temp, email) => {
        getToolAdd(username,temp,email)
        .then((response) => response.text())
        .then((responseJson) => {
            //alert(responseJson);
            if(responseJson == 'Success'){
                Alert.alert(responseJson, 'You have successfully registered. Sign in now!', [
                    {
                      text: 'Cancel',
                      onPress: () => console.log('Cancel Pressed'),
                    },
                    { text: 'OK', onPress: () => navigation.navigate('SignInScreen')}
                ])
            }else{
                Alert.alert(responseJson, 'This account has already existed.',[
                    {
                        text: 'OK',
                        onPress: () => console.log('OK Pressed'),
                    }
                ])
            }
        }).catch((error) => {
            console.error(error);
        })
    }
    //---USERNAME---
    const textIputChange = (val) =>{
        if(val.trim().length >= 8 && val.trim().length <=16 ){
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
                isValidUser: true,
            })
        }else{
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
                isValidUser: false,
            })
        }
    }
    //---PASSWORD---
    const handlePasswordChange = (val) =>{
        if(val.trim().length >= 8 && val.trim().length <=16){
            setData({
                ...data,
                password: val,
                isValidPassword: true,
            });
        }else{
            setData({
                ...data,
                password: val,
                isValidPassword: false,
            });
        }
    }
    const updateSecureTextEntry = () =>{
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry,
        });
    }
    //---CONFRIM-PASSWORD---
    const handleConfirmPasswordChange = (val, password) =>{
        if(val == password){
            setData({
                ...data,
                confirm_password: val,
                isValidConfrimPassword: true,
                temp: val,
            });
        }else{
            setData({
                ...data,
                confirm_password: val,
                isValidConfrimPassword: false,
                temp: '',
            });
        }
    }
    const updateConfirmSecureTextEntry = () =>{
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry,
        });
    }
    //---Email---
    const textEmailChange = (val) =>{
        if(val != ''){
            setData({
                ...data,
                email: val,
                check_textEmailChange: true,
                isValidEmail: true,
            })
        }
        else{
            setData({
                ...data,
                email: val,
                check_textEmailChange: false,
                isValidEmail: false,
            })
        }
    }
//===========RETURN==============
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.text_header}>Register Now!</Text>
        </View>
        <View style={styles.footer}>
            {/* -Username- */}
            <Text style={styles.text_footer}>Username</Text>
            <View style={styles.action}>
                <FontAwesome name="user-o" color="#05375a" size={20} />
                <TextInput
                    placeholder="Enter Your Username"
                    style={styles.textInput}
                    autoCapitalize='none'
                    onChangeText={(val) => textIputChange(val)}
                />
                {data.check_textInputChange ?
                <Animatable.View animation="bounceIn">
                    <Feather name="check-circle" color="green" size={20} />
                </Animatable.View>  
                : null}
            </View>
            {data.isValidUser ? null :
            <Animatable.View animation='fadeInLeft' durarion={500}>
                <Text style={styles.errorMsg}>Usernam must be 8-16 charaters long.</Text>
            </Animatable.View>
            }
            {/* -Password- */}
            <Text style={styles.text_footer}>Password</Text>
            <View style={styles.action}>
                <FontAwesome name="lock" color="#05375a" size={20} /> 
                <TextInput
                    placeholder="Enter Your Password"
                    secureTextEntry={data.secureTextEntry ? true : false}
                    style={styles.textInput}
                    autoCapitalize='none'
                    onChangeText={(val) => handlePasswordChange(val)}
                />
                <TouchableOpacity onPress={updateSecureTextEntry}>
                    {data.secureTextEntry ?
                    <Feather name="eye-off" color="grey" size={20} />
                    :
                    <Feather name="eye" color="grey" size={20} />
                    }
                </TouchableOpacity> 
            </View>
            {data.isValidPassword ? null :
            <Animatable.View animation='fadeInLeft' durarion={500}>
                <Text style={styles.errorMsg}>Password must be 8-16 charaters long.</Text>
            </Animatable.View>
            }
            {/* -Confirm Password- */}
            <Text style={styles.text_footer}> Confirm Password</Text>
            <View style={styles.action}>
                <FontAwesome name="lock" color="#05375a" size={20} /> 
                <TextInput
                    placeholder="Enter Your Confirm Password"
                    secureTextEntry={data.confirm_secureTextEntry ? true : false}
                    style={styles.textInput}
                    autoCapitalize='none'
                    onChangeText={(val) => handleConfirmPasswordChange(val, data.password, data.confirm_password)}
                />
                <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
                    {data.confirm_secureTextEntry ?
                    <Feather name="eye-off" color="grey" size={20} />
                    :
                    <Feather name="eye" color="grey" size={20} />
                    }
                </TouchableOpacity> 
            </View>
            {data.isValidConfrimPassword ? null : 
            <Animatable.View animation='fadeInLeft' durarion={500}>
                <Text style={styles.errorMsg}>Confirm password must be the same as password.</Text>
            </Animatable.View>
            }
            {/* -Email- */}
            <Text style={styles.text_footer}>Email</Text>
            <View style={styles.action}>
                <FontAwesome name="envelope-o" color="#05375a" size={20} />
                <TextInput
                    placeholder="Enter Your Email"
                    style={styles.textInput}
                    autoCapitalize='none'
                    onChangeText={(val) => textEmailChange(val)}
                />
                {data.check_textEmailChange ?
                <Animatable.View animation="bounceIn">
                    <Feather name="check-circle" color="green" size={20} />
                </Animatable.View>  
                : null}
            </View>
            {data.isValidEmail ? null :
            <Animatable.View animation='fadeInLeft' durarion={500}>
                <Text style={styles.errorMsg}>Usernam must be 8-16 charaters long.</Text>
            </Animatable.View>
            }
            {/* -Button Register- */}
            <View style={styles.button}>
                {data.isValidUser == true && data.isValidEmail == true && data.temp != '' ? (
                <TouchableOpacity onPress={() => {insertUser(data.username, data.temp, data.email)}}
                style={{borderRadius: 100,backgroundColor: '#009387', padding: 10, width: 300,}}
                >
                    <Text style={{color:'white', textAlign:'center'}}>Register</Text>
                </TouchableOpacity>

                ):(
                <TouchableOpacity onPress={() => {Alert.alert('Enter Fail', 'Would you like to enter again?',[
                    { text: 'OK', onPress: () => console.log('Enter again!')}
                ])}}
                style={{borderRadius: 100,backgroundColor: '#009387', padding: 10, width: 300,}}
                >
                    <Text style={{color:'white', textAlign:'center'}}>Register</Text>
                </TouchableOpacity>
                )}
            </View>
        </View>
    </View>
  );
};
//===========Style=Hieu=Ung==============
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#009387',
    },
    header:{
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50.
    },
    footer:{
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    text_header:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30,
    },  
    text_footer:{
        color: '#05375a',
        fontSize: 16,
    },
    action:{
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
        
    },
    textInput:{
        flex: 1,
        marginTop: Platform.OS == 'ios' ? 0 : -20,
        paddingLeft: 10,
        color:  '#05375a',
    },
    button:{
        alignItems: 'center',
        marginTop: 15,
    },
    logIn:{
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    textLogin:{
        fontSize: 16,
        fontWeight: 'bold',
    },
    errorMsg:{
        color: 'red',
        marginBottom: 10,
    },
});

export default SignUpScreen;