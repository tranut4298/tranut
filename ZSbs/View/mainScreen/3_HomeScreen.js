/**
 * HOME SCREEN
 * 
 */
import React, {Component, useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image,Alert,} from 'react-native';
import { Container, Header, Content, Tab, Tabs, Left, Right, Body, Title , Card, CardItem} from 'native-base';
//---Do By Person---
 const HomeScreen = ({navigation}) =>{
   //==XY LY THAO TAC==
   const [data, setData] = React.useState({
     mang:  [],
     title:'',
     check_search: false,
     dataValue: false,
   })
   
   //==RETURN==
    return(
      <Container style={{flexDirection: 'column'}}>
        <Content style={{backgroundColor: '#fff', flex: 1,  marginHorizontal: 25, marginTop : 40}}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.viewItem}>
              <TouchableOpacity onPress = {() => navigation.navigate('HomeStack')}>
                <Image 
                  source={require('../Zimage/logoApp.png')}
                  style={styles.image}
                />
                <Text style={[styles.text, {textAlign: 'center', fontWeight: 'bold'}]}>Traffic Sign</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.viewItem}>
              <TouchableOpacity>
                <Image 
                  source={require('../Zimage/logoApp.png')}
                  style={styles.image}
                />
                <Text style={[styles.text, {textAlign: 'center', fontWeight: 'bold'}]}>News</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.viewItem}>
              <TouchableOpacity>
                <Image 
                  source={require('../Zimage/logoApp.png')}
                  style={styles.image}
                />
                <Text style={[styles.text, {textAlign: 'center', fontWeight: 'bold'}]}>Scan</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.viewItem}>
              <TouchableOpacity>
                <Image 
                  source={require('../Zimage/logoApp.png')}
                  style={styles.image}
                />
                <Text style={[styles.text, {textAlign: 'center', fontWeight: 'bold'}]}>Messenger</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
  const styles = StyleSheet.create({
    text: {
      fontFamily: 'HelveticaNeue',
      color: '#52575D',
    },
    animatableView: {
      flexDirection: 'row'
    },
    viewItem:{ 
      marginVertical: 10,
      marginRight: 10,
      borderColor: 'grey', 
      borderWidth: 2, 
      borderRadius: 20, 
      width: 150, 
      height: 150, 
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: '#fff',
    },
    image:{
      width: 100,
      height: 100,
      borderRadius: 20,
    },
  })
export default HomeScreen;