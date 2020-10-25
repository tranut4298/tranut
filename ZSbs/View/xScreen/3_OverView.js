import React from 'react';
import { View, Text, ImageBackground, StyleSheet, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
//---Do By Person---
export default function OverView ({navigation}){
  const route = useRoute();
    return (
      <View style={styles.container}>
        <ImageBackground source={{uri: route.params.image}} style={styles.image} resizeMode="cover">
          <View style={{flex: 1}}>
            <Text style={[styles.text, {marginTop: 40, fontSize: 26, fontWeight: '600'}]}>{route.params.title}</Text>
            <Text style={[styles.text, {  fontSize: 12, fontWeight: '200'}]}>{route.params.code}</Text>
          </View>
          <View style={styles.footer}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Text style={{fontSize:  50}}>{route.params.description}</Text>             
            </ScrollView>
          </View>
        </ImageBackground> 
      </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
    },
    image: {
      flex: 1,
      height: 200,
      resizeMode: "cover",
      justifyContent: "center"
    },
    text: {
      color: "#fff",
      marginLeft:  20
    },
    footer:{
        flex: 4,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
      },
  });