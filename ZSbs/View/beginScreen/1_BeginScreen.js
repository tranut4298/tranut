/** 
 * BEGIN SCREEN
 * 
*/
import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
//---Do By Person---

const BeginScreen = ({navigation}) => {
  return (
    /* =Header= */
    <View style={styles.container}>
      <View style={styles.header}>
        <Animatable.Image 
            animation='bounceIn'
            duraton='1500'
          source={require('../Zimage/logoApp.png')}
          style={styles.logo}
          resizeMode='stretch'
        />
      </View>
      {/* =Footer= */}
      <Animatable.View style={styles.footer}
        animation='fadeInUpBig'
      >
        <Text style={styles.title}>Street traffic, don't try!</Text>
        <Text style={styles.text}>Log in with account</Text>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
              <LinearGradient
                colors={['#08d4c4','#01ab9d']}
                style={styles.signIn}
              >
                  <Text style={styles.textSign}>Get Started {'>'}</Text>
              </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#009387'
  },
  header:{
    flex: 2,
    justifyContent:  'center',
    alignItems: 'center',
  },
  footer:{
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo:{
    width: height_logo,
    height: height_logo,
  },
  title:{
    color: '#05375a',
    fontSize: 30,
    fontWeight: 'bold'
  },
  text:{
    color: 'gray',
    marginTop: 5,
  },
  button:{
    alignItems: 'flex-end',
    marginTop: 30,
  },
  signIn:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 40,  
    borderRadius: 50, 
  },
  textSign:{
    color: 'white',
    fontWeight: 'bold',
  },

});

export default BeginScreen;
