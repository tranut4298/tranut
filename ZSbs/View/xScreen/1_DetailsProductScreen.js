/**
 * X SCREEN
 * 
 */
import React from 'react';
import { Container, Header, Content, Tab, Tabs, Left, Right, Body, Title } from 'native-base';
import { useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
//---Do By Person---
import Tab1 from './tabs/tab1';
import Tab2 from './tabs/tab2';

 function DetailsProductScreen({navigation}){
  const route = useRoute();
    return(
      <Container>
        <Header style={{backgroundColor: '#009387', height:40}} hasTabs>
            <Left>
            <Icon.Button name="chevron-back-outline" size={25} backgroundColor="#009387" onPress={()=>navigation.navigate('Home')}/>
            </Left>
              <Body>
                  <Title style={{color: 'white'}}>Detail Traffic Sign</Title>
              </Body>
              <Right/>
        </Header>
        <Tabs>
          <Tab  tabStyle={{backgroundColor: '#009387'}} 
          activeTabStyle={{backgroundColor: '#009387'}} 
          textStyle={{color: 'white'}} 
          activeTextStyle={{color: 'white'}} heading="Overview">
            <Tab1 route ={route} />
          </Tab>
          <Tab tabStyle={{backgroundColor: '#009387'}} 
          activeTabStyle={{backgroundColor: '#009387'}} 
          textStyle={{color: 'white'}} 
          activeTextStyle={{color: 'white'}} heading="Update">
            <Tab2 route={route} navigation={navigation} />
          </Tab>
        </Tabs>
      </Container>
    );
  }

export default DetailsProductScreen;