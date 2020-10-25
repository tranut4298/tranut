/**
 *  MAIN TAB SCREEN 
 * 
 */
import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
//---Do by Person---
import HomeScreen from './3_HomeScreen';
import ProfileScreen from './4_ProfileScreen';
import InsertProduct from './5_InsertProduct';

//=========================================================================
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <>
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      barStyle={{ backgroundColor: '#009387' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} /> 
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Icon name="person" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="InsertProduct"
        component={InsertProductStackScreen}
        options={{
          tabBarLabel: 'Product',
          tabBarIcon: ({ color }) => (
            <Icon name="bookmark-outline" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  </>  
);

export default MainTabScreen;

//============================================================================
  //-HOME SCREEN-
  const HomeStackScreen = ({navigation}) => {
    return(
      <HomeStack.Navigator screenOptions={{
        headerStyle:{
          backgroundColor:'#009387',
        },
        headerTintColor:'#fff',
        headerTitleAlign:'center',
        headerTitleStyle:{
          fontWeight: 'bold',
        },
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={35} backgroundColor="#009387" onPress={()=>navigation.openDrawer()}/>
        ),
      }}> 
        <HomeStack.Screen name = "Home" component = {HomeScreen} options={{title:'Home Page', }}/>       
      </HomeStack.Navigator> 
    );       
  };
  //-PROFILE SCREEN-
  const ProfileStackScreen = ({navigation}) =>{
    return(
      <ProfileStack.Navigator screenOptions={{
        headerStyle:{
          backgroundColor:'#009387',
        },
        headerTintColor:'#fff',
        headerTitleAlign:'center',
        headerTitleStyle:{
          fontWeight: 'bold',
        },
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={35} backgroundColor="#009387" onPress={()=>navigation.openDrawer()}/>
          ),
      }}> 
      
        <ProfileStack.Screen name = "Profile" component = {ProfileScreen} options={{title: 'Profile', }}/>               
      </ProfileStack.Navigator>
    );        
  };
  //-INSERT PRODUCT-
  const InsertProductStackScreen = ({navigation}) =>{
    return(
      <ProfileStack.Navigator screenOptions={{
        headerStyle:{
          backgroundColor:'#009387',
        },
        headerTintColor:'#fff',
        headerTitleAlign:'center',
        headerTitleStyle:{
          fontWeight: 'bold',
        },
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={35} backgroundColor="#009387" onPress={()=>navigation.openDrawer()}/>
          ),
      }}> 
      
        <ProfileStack.Screen name = "InsertProduct" component = {InsertProduct} options={{title: 'Insert Product', }}/>               
      </ProfileStack.Navigator>
    );        
  };
