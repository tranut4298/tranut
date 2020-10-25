/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
//import App from './App';
import {name as appName} from './app.json';
//---Do By Person---
//import App from './ZSbs/View/App';
import HomeScreen from './ZSbs/View/mainScreen/3_HomeScreen';
import AppMainScreen from './ZSbs/View/mainScreen/App';
import AppProduct from './ZSbs/View/xScreen/2_RcommendedCardItem';
import InsertProduct from './ZSbs/View/mainScreen/5_InsertProduct';
import GetProduct from './ZSbs/Model/getProduct';

AppRegistry.registerComponent(appName, () => AppMainScreen);
