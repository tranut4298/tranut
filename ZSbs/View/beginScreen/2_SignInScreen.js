/**
 * SIGN IN SCREEN
 * 
 */
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Dimensions, Image, Alert, Platform, TextInput} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
//---Do By Person---
import {AuthContext} from '../../Controller/Context';
import { getAccount } from '../../Model/news';


const SignInScreen = ({navigation}) => {
//===============XU=LY=THAO=TAC=P1================
    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        mangSV: []
    });
    //-----JSON------
    const {signIn} = React.useContext(AuthContext);

    const loginHandle = (username, password, mangSV) => {
        getAccount(username,password)
        .then((response) => response.text())
        .then((responseJson) => {
            if(responseJson == 'Failed!'){
                Alert.alert('Invalid User!', 'Username or Password is incorrect!',[
                {text: 'Okay'}
                ]);
            }else{
                setData({
                    ...data,
                    mangSV: responseJson,
                });
                const foundUser = mangSV.filter(item =>{
                    return item.USERNAME, item.TOKEN;;
                });
                signIn(foundUser);
                //console.log(mangSV);
            }
        }).catch((error) => {
            console.error(error);
        })
    }
    //-----USERNAME------
    const textIputChange = (val) =>{
        if(val != ''){
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
            })
        }else{
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
            })
        }
    }
    //-----PASSWORD------
    const handlePasswordChange = (val) =>{
        setData({
            ...data,
            password: val,
        });
    }
    const updateSecureTextEntry = () =>{
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry,
        });
    }
    
//===========RETURN==============
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.text_header}> Wellcome!</Text>
        </View>
        <View style={styles.footer}>
            {/* -Usernam/Email- */}
            <Text style={styles.text_footer}>Username</Text>
            <View style={styles.action}>
                <FontAwesome name="user-o" color="#05375a" size={20} />
                <TextInput
                    placeholder="Your Username"
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
            {/* -Password- */}
            <Text style={styles.text_footer}>Password</Text>
            <View style={styles.action}>
                <FontAwesome name="lock" color="#05375a" size={20} /> 
                <TextInput
                    placeholder="Your Password"
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
            {/* -Forgot Password- */}
            <View style={{ flexDirection: 'row'}}>
                <TouchableOpacity onPress={() => Alert.alert('Forgot Password', 'We are setting again!')}>
                    <Text style={{color: '#009387',}}>Forgot Password!</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
                    <Text style={{color: '#009387', marginLeft: 126}}>Register Now!</Text>
                </TouchableOpacity>
            </View>
            
            {/* -Button- */}
            <View style={styles.button}>
                <TouchableOpacity onPress={() => {loginHandle( data.username, data.password, data.mangSV)}}
                    style={[styles.signIn, {backgroundColor: '#009387', padding: 10,}]}
                >
                    <Text style={{color:'white', textAlign:'center'}}>Sign In</Text>
                </TouchableOpacity>
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
        marginBottom: 20,
    },
    textInput:{
        flex: 1,
        marginTop: Platform.OS == 'ios' ? 0 : -20,
        paddingLeft: 10,
        color:  '#05375a',
    },
    button:{
        alignItems: 'center',
        marginTop: 30,
    },
    signIn:{
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        width: 300,
    },
    textSign:{
        fontSize: 16,
        fontWeight: 'bold',
    }
});

export default SignInScreen;