import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import { Container, Header, Content,Left, Right, Body,} from 'native-base';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import _ from 'lodash'
//---Do By Person---
import {getProduct} from '../../Model/news';
import OverView from './3_OverView';
import DetailsProductScreen from './1_DetailsProductScreen';

//===RECOMMENDED CARD ITEM===
class RcommendedCardItem extends Component{
  constructor(props){
      super(props);
      this.state={
          mangSV: [],
          fullmangSV: [],
          isLoading: true,
          error: null,
          query: '',
      }
  }
  componentDidMount(){
    this.requestAPI()
  }
  requestAPI = _.debounce(() =>{
    this.setState({isLoading: false});
    getProduct()
    .then((response)=>response.json())
    .then((responseJson)=>{
        //alert(responseJson)
        this.setState({
            mangSV: responseJson,
            fullmangSV: responseJson,
        });
    }).catch((error) => {
        this.setState({error, isLoading: true});
    })
  }, 1000)
  DetailProduct = (ID_BB, TITLE, IMAGE, DESCRIPTION, CODE) => {
    this.setState({isLoading: true});
    this.props.navigation.navigate('DetailsView',{
      id: ID_BB,
      title: TITLE,
      image: IMAGE,
      description: DESCRIPTION,
      code: CODE,
    });
  }
  renderFooter = () => {
    if (!this.state.isLoading) return null
    return (
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator animating={true} size="large" color="#00ff00" />
      </View>
    )
  }
  handleSeach = (val) =>{
    const formattedQuery = val.toLowerCase();
    const mangSV = _.filter(this.state.fullmangSV, item =>{
      if(item.TITLE.includes(formattedQuery)) {
        return true;
      }
      return false;
    })
    this.setState({mangSV: mangSV , query: val});
  }
  //---RETURN---
  render(){
      return(
        <Container style={{flexDirection: 'column'}}>

          <Header style={{backgroundColor: '#009387', flexDirection: 'row', paddingTop: 10, paddingBottom: 5}}>
            <View style={{flex: 1, alignItems:'center', justifyContent:'center'}}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeDrawer')}>
                <Image
                  source  = {require('../Zimage/logoApp.png')}
                  style={{width: 50, height: 50, marginBottom: 5}}
                />
              </TouchableOpacity>
            </View>
            <View style={{flex: 4}}> 
                <TextInput
                  placeholder='Search'
                  style={styles.textInput}
                  autoCapitalize='none'
                  onChangeText={(val) => {this.handleSeach(val)}}
                />
                <View style={styles.searchCircle} >
                  <Ionicons.Button name="search-circle-outline" 
                    marginRight={-10}
                    size={25} 
                    backgroundColor="#fff"
                    height={40}
                    color="gray"
                    onPress={() => alert('HELLO')} />
                </View>
            </View>
          </Header>

          <FlatList
          //ListFooterComponent = {this.renderFooter}
          data={this.state.mangSV}
          keyExtractor = {(item) => item.ID_BB}
          renderItem={({item}) => 
            <TouchableOpacity onPress={() => this.DetailProduct(item.ID_BB, item.TITLE, item.IMAGE, item.DESCRIPTION, item.CODE)} style={{margin: 10}}>
              <View style={styles.mediaImageContainer}>
                <Image
                  source={{uri: item.IMAGE}} 
                  style={styles.image}
                  resizeMode='cover'
                />
              </View>
              <View style={styles.mediaCount}>
                <Text style={[styles.text, {fontSize: 20, color: '#fff', fontWeight: '600'}]} numberOfLines={1}>{item.TITLE}</Text>
                <Text style={[styles.text, {fontSize: 10, color: '#fff', textTransform: 'uppercase'}]} numberOfLines={1}>{item.CODE}</Text>
              </View>
            </TouchableOpacity>
          }
          />

        </Container>
      );
  }
}
//===HOME  SCREEN===
function HomeScreen ({navigation}){
  return(
    <RcommendedCardItem navigation={navigation}/>
  );
}
const styles = StyleSheet.create({
  text: {
      fontFamily: 'HelveticaNeue',
      color: '#52575D',
    },
  image: {
      flex: 1,
      width: undefined,
      height: undefined,
      borderRadius: 20,
    },
    mediaImageContainer: {
      width: 320,
      height: 140,
      overflow: 'hidden',
      marginHorizontal: 10,
      
    },
    mediaCount: {
      position: 'absolute',
      top: '50%',
      marginTop: 10,
      marginLeft: 30,
      width: 180,
      height: 80,
      borderRadius: 12,
      shadowColor: 'rgba(0, 0, 0, 0.38)',
      shadowOffset: {width: 0, height: 10},
      shadowRadius: 20,
      shadowOpacity: 1
    },
    searchCircle:{
      position: 'absolute', 
      top: 0, 
      right: 25, 
      borderRadius: 10,
      borderLeftWidth: 1,
      borderLeftColor: 'gray',
    },
    textInput: {
      backgroundColor: '#fff',
      paddingLeft: 15,
      paddingRight: 30,
      color:  '#05375a',
      borderRadius: 10,
      height: 40,
      width: 240,
      marginRight: 20,
    },
})
//===App PRODUCT===
const Stack = createStackNavigator();
export default function AppProduct(){
  return(
      <Stack.Navigator initialRouteName="Home" headerMode='none'> 
        <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Product'}} />
        <Stack.Screen name="OverView" component={OverView}/>
        <Stack.Screen name="DetailsView" component={DetailsProductScreen} />
      </Stack.Navigator>
  );
}