/**
 * SCREEN
 * Lien Ket Cac Screen Qua Stack
 */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
//---Do By Peson---
import BeginScreen  from './1_BeginScreen';
import SignInScreen from './2_SignInScreen';
import SignUpScreen from './3_SignUpScreen';


const Stack = createStackNavigator();

const MainScreen = () => {
  return (
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name="BeginScreen"  component={BeginScreen}/>
        <Stack.Screen name="SignInScreen" component={SignInScreen}/>
        <Stack.Screen name="SignUpScreen" component={SignUpScreen}/>
      </Stack.Navigator>
  );
};


export default MainScreen;
