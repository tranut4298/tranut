import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet, Alert} from 'react-native';
import { Container, Header, Content, Left, Right, Body, } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import { getToolProductAdd } from '../../Model/news';
//---Do By Person---
const InsertProduct = ({navigation}) =>{
    //==XY LY THAO TAC==
    const [data, setData] = React.useState({
        title: '',
        imageUri: 'https://scoutmytrip.com/blog/wp-content/uploads/2019/05/42623682_l-1024x1024.jpg',
        description: '',
        code: '',
        check_title: false,
        check_description: false,
        check_code: false,
        click_delete: false,

    })
    const insertProduct = (title, imageUri, description, code) =>{
        getToolProductAdd(title, imageUri, description, code)
        .then((response) => response.text())
        .then((responseJson) => {
            //alert(responseJson);
            if(responseJson == 'Success'){
                Alert.alert(responseJson, 'You have successfully inserted the product. Click "OK" to go to the list.', [
                    {
                      text: 'Cancel',
                      onPress: () => console.log('Cancel Pressed'),
                    },
                    { text: 'OK', onPress: () => console.log('OK Pressed')}
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
    // -TITLE-
    const handleTitleChange = (val) =>{
        if(val.trim().length > 0){
            setData({
                ...data,
                title: val,
                check_title: true,
            })
        }else{
            setData({
                ...data,
                title: val,
                check_title: false,
            })
        }
    }
    //-NUMBER-CODE-
    const handleNumberChange = (val) =>{
        if(val.trim().length > 0){
            setData({
                ...data,
                code: val,
                check_code: true,
            })
        }else{
            setData({
                ...data,
                code: val,
                check_code: false,
            })
        }
    }
    //-DESCRIPTION-
    const handleDescriptionChange = (val) =>{
        if(val.trim().length > 0){
            setData({
                ...data,
                description: val,
                check_description: true,
            })
        }else{
            setData({
                ...data,
                description: val,
                check_description: false,
            })
        }
    }
    const clickDelete  = () =>{
        alert('HEEEL');
    }
    //==RETURN==
    return(
        <Container>
            <Content style={styles.content}>
                {/* -IMAGE- */}
                <View style={{marginTop: 20}}>
                    <Image source={require('../Zimage/logoApp.png')} style={{width: 100, height: 100}} />
                </View>
                <View style={{marginTop: 20}}>
                    {/* -TITLE- */}
                    <Text style={styles.text}>Tittle</Text>
                    <View style={styles.action}>
                        <FontAwesome name="envelope-o" color="#05375a" size={20} style={styles.icon} /> 
                        <TextInput   
                            placeholder="Title of Traffic Sign: Stop"
                            style={styles.textInput}
                            autoCapitalize='none'
                            onChangeText={(val) => handleTitleChange(val)}
                        />
                        {data.check_title  ? 
                        <Animatable.View animation="bounceIn">
                            <Feather name="check-circle" color="green" size={20} style={styles.icon} />
                        </Animatable.View> 
                        : null}
                    </View>
                    {/* -NUMBER- */}
                    <Text style={styles.text}>Number</Text>
                    <View style={styles.action}>
                        <FontAwesome name="envelope-o" color="#05375a" size={20} style={styles.icon} /> 
                        <TextInput   
                            placeholder="Number of Traffic Sign: PN0321"
                            style={styles.textInput}
                            autoCapitalize='none'
                            onChangeText={(val) => handleNumberChange(val)}
                        />
                        {data.check_code ?  
                        <Animatable.View animation="bounceIn">
                            <Feather name="check-circle" color="green" size={20} style={styles.icon} />
                        </Animatable.View> 
                        : null}
                    </View>
                    {/* -Description- */}
                    <Text style={styles.text}>Description</Text>
                    <View style={styles.actionDescription}>
                        <TextInput   
                            placeholder="Description of Traffic Sign"
                            multiline={true}
                            style={{color:  '#05375a', marginTop: -10 }}
                            autoCapitalize='none'
                            onChangeText={(val) => handleDescriptionChange(val)}
                        /> 
                        {data.check_description ?  
                        <Animatable.View animation="bounceIn" style={styles.delete}>
                            <Feather.Button
                             onPress = {()  => clickDelete()} 
                             name="check-circle" color="green" size={10} style={{backgroundColor: '#fff'}} 
                            />
                        </Animatable.View> 
                        : null}
                    </View>
                    {/* -Button Add- */}
                    <View style={styles.button}>
                        {data.check_title==true && data.check_code==true ? 
                        <TouchableOpacity onPress = {()  => insertProduct(data.title, data.imageUri, data.description, data.code)}
                            style={{borderRadius: 100,backgroundColor: '#009387', padding: 10, width: 300,}}
                        >
                            <Text style={{color:'white', textAlign:'center',}}>Add</Text>
                        </TouchableOpacity>
                        : 
                        <TouchableOpacity onPress = {()  => Alert.alert('Enter Fail', 'Would you like to enter again?')}
                            style={{borderRadius: 100,backgroundColor: '#009387', padding: 10, width: 300,}}
                        >
                            <Text style={{color:'white', textAlign:'center'}}>Add</Text>
                        </TouchableOpacity>
                        }
                    </View>
                    {/* -Button Cancle- */}
                    <View style={styles.button}>
                        <TouchableOpacity onPress = {() => alert('HELLO')}
                            style={{borderRadius: 100,borderColor: '#009387', borderWidth: 2, padding: 10, width: 300,}}
                        >
                            <Text style={{color:'#000', textAlign:'center'}}>Cancle</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Content>
        </Container>
    );
}

const styles  = StyleSheet.create({
    content:{
        backgroundColor: '#fff', 
        flexDirection:'column', 
        marginHorizontal:  10
    },
    text:{
        color: '#05375a',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
    },
    action:{
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
        marginHorizontal: 10,
        
    },
    textInput:{
        flex: 1,
        marginTop: Platform.OS == 'ios' ? 0 : -20,
        paddingLeft: 10,
        color:  '#05375a',
    },
    actionDescription:{
        borderColor: 'grey', 
        borderWidth: 1, 
        height: 200, 
        width: 340, 
        paddingLeft: 10,
        paddingRight: 20,
    },
    button:{
        alignItems: 'center',
        marginTop: 15,
    },
    icon:{
        marginTop: -5,
    },
    delete:{
        position: 'absolute',
        top: 0,
        right: -13,

    }
})

export default InsertProduct;