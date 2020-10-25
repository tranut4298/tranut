/**
 * 
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
//-----Do By Person-----
import MainTabScreen from './2_MainTabScreen';
import DrawerContent from './1_DrawerContent';
import DetailsProductScreen from '../xScreen/1_DetailsProductScreen';
import ProfileScreen from './4_ProfileScreen';
import InsertProduct from './5_InsertProduct';
import AppProduct from '../xScreen/2_RcommendedCardItem';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const AppMainScreen = () =>{
    return(
        <NavigationContainer>
            <Drawer.Navigator drawerContent={props => <DrawerContent { ...props}/>} >
                <Drawer.Screen name = "HomeDrawer" component={MainTabScreen}/>
                <Drawer.Screen name = "ProfileDrawer" component={ProfileScreen}/>
                <Stack.Screen name = "DetailsProductStack" component={DetailsProductScreen}/>
                <Stack.Screen name = "InsertProductStack" component={InsertProduct} />
                <Stack.Screen name = "HomeStack" component={AppProduct} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}
export default  AppMainScreen;