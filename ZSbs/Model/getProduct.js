import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { Container, Header, Content,Left, Right, Body,} from 'native-base';
//---Do By Person---
import {getProduct} from './news';
export default class GetProduct extends Component{
  constructor(props){
      super(props);
      this.state={
          mangSV: []
      }
  }
  componentDidMount(){
      getProduct()
      .then((response)=>response.json())
      .then((responseJson)=>{
          alert(responseJson)
          this.setState({
              mangSV:responseJson
          });
      }).catch((error) => {
          console.error(error);
      })
  }
  //---RETURN---
  render(){
      return(
        <Container>
        <FlatList
        data={this.state.mangSV}
        keyExtractor = {(item) => item.ID_BB}
        renderItem={({item}) => 
          <TouchableOpacity onPress={() => alert('HELLO')} style={{margin: 10}}>
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
        //backgroundColor: '#41444B',
        position: 'absolute',
        top: '50%',
        marginTop: 10,
        marginLeft: 30,
        width: 180,
        height: 80,
        //alignItems: 'center',
        //justifyContent: 'center',
        borderRadius: 12,
        shadowColor: 'rgba(0, 0, 0, 0.38)',
        shadowOffset: {width: 0, height: 10},
        shadowRadius: 20,
        shadowOpacity: 1
      },
})
