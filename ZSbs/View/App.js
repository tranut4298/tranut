/**
 * Sample React Native App
 * @Navigation - Stack - Screen
 * 
 */

import React, { useEffect } from 'react';
import { View, ActivityIndicator, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator} from '@react-navigation/drawer';
import ActionButton from 'react-native-action-button';
import AsyncStorage from '@react-native-community/async-storage';
import { createStackNavigator } from '@react-navigation/stack';
//-----Do By Person-----
import MainTabScreen from './mainScreen/2_MainTabScreen';
import DrawerContent from './mainScreen/1_DrawerContent';
import MainScreen from './beginScreen/0_Screen';
import {AuthContext} from '../Controller/Context';
import ProfileScreen from './mainScreen/4_ProfileScreen';
import DetailsProductScreen from './xScreen/1_DetailsProductScreen';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const App = () => {
//===============XU=LY=THAO=TAC=P1================
  // const [isloading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null);
  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };
  const loginReducer = (prevState, action) => {
    switch(action.type){
      case 'RETRIEVE_TOKEN': 
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT': 
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };
//===============XU=LY=THAO=TAC=P2================
  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);
  const authContext = React.useMemo(() =>({
    signIn: async(foundUser) => {
      // setUserToken('Fa-ke');
      // setIsLoading(false);
      const userToken = String(foundUser.TOKEN);
      const userName  = foundUser.USERNAME;
        try{
          userToken = 'Fa-ke';
          await AsyncStorage.setItem('userToken', userToken);
        }catch(e){
          console.log(e);
        } 
      dispatch({  type: 'LOGIN', id: userName, token: userToken});
    },
    signOut: async() => {
      // setUserToken(null);
      // setIsLoading(false);
      try{
        await AsyncStorage.removeItem('userToken');
      }catch(e){
        console.log(e);
      }
      dispatch({type: 'LOGOUT',});
    },
    signUp: () => {
      setUserToken('Fa-ke');
      setIsLoading(false);
    },
  }), []);

  useEffect(() =>{
    setTimeout(async() =>{
      // setIsLoading(false);
      let userToken;
      userToken = null;
      try{
        userToken = await AsyncStorage.getItem('userToken');
      }catch(e){
        console.log(e);
      }
      dispatch({  type: 'RETRIEVE_TOKEN', token: userToken});
    }, 1000);
  }, []);
//===========RETURN==============
  if( loginState.isloading ){
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <ActivityIndicator size='large' />
      </View>
    );
  }
  return (
    <AuthContext.Provider value={authContext}>
    <NavigationContainer>
      { loginState.userToken != null ?(
        <Drawer.Navigator drawerContent={props => <DrawerContent { ...props}/>} >
          <Drawer.Screen name ="HomeDrawer" component={MainTabScreen}/>
          <Drawer.Screen name ="ProfileDrawer" component={ProfileScreen}/>
          <Stack.Screen name ="DetailsProductStack" component={DetailsProductScreen}/>
          {/* <Stack.Screen name = "OverViewStack" component={OverView} /> */}
        </Drawer.Navigator>
        )
      :
      <MainScreen/>
    }
    </NavigationContainer>
    </AuthContext.Provider>
  );
};
export default App;
