import React, {Component} from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet, Alert} from 'react-native';
import { Container, Header, Content, Left, Right, Body, } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import { getToolProductDelete, getToolProductEdit } from '../../../Model/news';

//---Do By Person---
class Tab2 extends Component {
    //==Xy Ly Thao Tac==
    constructor(props){
        super(props);
        this.route = props.route;
        this.navigation = props.navigation;
        this.state = {
            id: this.route.params.id,
            title: this.route.params.title,
            description: this.route.params.title,
            code: this.route.params.code,
        }
    }
    ActionClick_Delete(id){
        getToolProductDelete(id)
        .then((response) => response.text())
        .then((responseJson) => {
            //alert(responseJson);
            if(responseJson == 'Success'){
                Alert.alert(responseJson, 'You have successfully deleted the product. Click "OK" to go to the list.', [
                    {
                      text: 'Cancel',
                      onPress: () => console.log('Cancel Pressed'),
                    },
                    { text: 'OK', onPress: () => this.navigation.navigate('Home')}
                ])
            }
        }).catch((error) => {
            console.error(error);
        })
    }
    ActionClick_Update(id, title, description, code){
        getToolProductEdit(id, title, description, code)
        .then((response) => response.text())
        .then((responseJson) => {
            //alert(responseJson);
            if(responseJson == 'Success'){
                Alert.alert(responseJson, 'You have successfully updated the product. Click "OK" to go to the list.', [
                    {
                      text: 'Cancel',
                      onPress: () => console.log('Cancel Pressed'),
                    },
                    { text: 'OK', onPress: () => this.navigation.navigate('Home')}
                ])
            }else{
                Alert.alert(responseJson, 'That product has already existed.',[
                    {
                        text: 'OK',
                        onPress: () => console.log('OK Pressed'),
                    }
                ])
                //alert(responseJson);
            }
        }).catch((error) => {
            console.error(error);
        })
    }
    handleTitleChange(val){
        if(val.trim().length > 0){
            this.setState({
                title: val,
            })
        }
    }
    handleNumberChange(val){
        if(val.trim().length > 0){
            this.setState({
                code: val,
            })
        }
    }
    handleDescriptionChange(val){
        if(val.trim().length > 0){
            this.setState({
                description: val,
            })
        }
    }
    //==RETURN==
    render() {
        return (
            <Content style={styles.content}>
                {/* -IMAGE- */}
                <View style={{marginTop: 20}}>
                    <Image source={require('../../Zimage/logoApp.png')} style={{width: 100, height: 100}} />
                </View>
                <View style={{marginTop: 10}}>
                    {/* -ID_BB- */}
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.text}>ID: </Text>
                        <Text style={styles.text}>{this.route.params.id}</Text>
                    </View>
                    {/* -TITLE- */}
                    <Text style={styles.text}>Tittle</Text>
                    <View style={styles.action}>
                        <FontAwesome name="envelope-o" color="#05375a" size={20} style={styles.icon} /> 
                        <TextInput   
                            placeholder={this.route.params.title}
                            style={styles.textInput}
                            autoCapitalize='none'
                            onChangeText={(val) => this.handleTitleChange(val)}
                        />
                    </View>
                    {/* -NUMBER- */}
                    <Text style={styles.text}>Number</Text>
                    <View style={styles.action}>
                        <FontAwesome name="envelope-o" color="#05375a" size={20} style={styles.icon} /> 
                        <TextInput   
                            placeholder={this.route.params.code}
                            style={styles.textInput}
                            autoCapitalize='none'
                            onChangeText={(val) => this.handleNumberChange(val)}
                        />
                    </View>
                    {/* -DESCRIPTION- */}
                    <Text style={[styles.text, {marginBottom: 5}]}>DESCRIPTION</Text>
                    <View style={styles.actionDescription}>
                        <TextInput   
                            placeholder={this.route.params.description}
                            multiline={true}
                            style={{color:  '#05375a', marginTop: -10 }}
                            autoCapitalize='none'
                            onChangeText={(val) => this.handleDescriptionChange(val)}
                        /> 
                    </View>
                    {/* -BUTTON ADD- */}
                    <View style={styles.button} >
                        <TouchableOpacity onPress = {()  => this.ActionClick_Update(this.state.id, this.state.title, this.state.description, this.state.code)}
                            style={{borderRadius: 100,backgroundColor: '#009387', padding: 10, width: 300,}}
                        >
                            <Text style={{color:'white', textAlign:'center',}}>Update</Text>
                        </TouchableOpacity>
                    </View>
                    {/* -BUTTON CANCLE- */}
                    <View style={styles.button}>
                        <TouchableOpacity onPress = {() => this.ActionClick_Delete(this.state.id)}
                            style={{borderRadius: 100,borderColor: '#009387', borderWidth: 2, padding: 10, width: 300,  marginBottom: 20}}
                        >
                            <Text style={{color:'#000', textAlign:'center', }}>Delete</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Content>
        );
    }
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
});
export default Tab2;