import React, {Component} from 'react';
import { View, Text, ImageBackground, StyleSheet, ScrollView} from 'react-native';
//---Do By Person---
class Tab1 extends Component {
    constructor(props){
        super(props);
        this.route = props.route;
    }
    render() {
        return (
            <View style={styles.container}>
              <ImageBackground source={{uri: this.route.params.image}} style={styles.image} resizeMode="cover">
                <View style={{flex: 1}}>
                  <Text style={[styles.text, {marginTop: 40, fontSize: 26, fontWeight: '600'}]}>{this.route.params.title}</Text>
                  <Text style={[styles.text, {  fontSize: 12, fontWeight: '200'}]}>{this.route.params.code}</Text>
                </View>
                <View style={styles.footer}>
                  <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={{fontSize:  50}}>{this.route.params.description}</Text>             
                  </ScrollView>
                </View>
              </ImageBackground>
            </View>
        );
    }
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
export default Tab1;