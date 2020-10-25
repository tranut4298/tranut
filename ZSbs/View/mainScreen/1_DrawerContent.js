/**
 * DRAWER CONTENT
 * 
 */
import React from 'react';
import {View, StyleSheet, TouchableOpacity } from 'react-native';
import{ Avatar, Title, Caption, Paragraph, Drawer} from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem, } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
//---Do By Person---
import { AuthContext } from '../../Controller/Context';

function DrawerContent(props){

    //const {signOut} = React.useContext(AuthContext);

    return(
        <View style={{flex: 1}}>
            <DrawerContentScrollView { ...props}>
                <View style={styles.drawerContent}> 
                    {/* ==P1== */}
                    <View style={styles.userInfoSection}>
                        {/* -1- */}
                        <View style={{flexDirection:'row', marginTop: 15}}>
                            <TouchableOpacity  onPress={() => {props.navigation.navigate('ProfileDrawer')}}>
                                <Avatar.Image
                                    source={require('../Zimage/avatar.jpg')}
                                    size={50}    
                                />
                            </TouchableOpacity>
                            <View style={{flexDirection:'column', marginLeft: 15,}}>
                                <Title style={styles.title}>桜の花</Title>
                                <Caption style={styles.caption}>Photographer@Total</Caption>
                            </View>
                        </View> 
                        {/* -2- */}
                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={styles.paragraph}>302</Paragraph>
                                <Caption style={styles.caption}>Following</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={styles.paragraph}>45,844</Paragraph>
                                <Caption style={styles.caption}>Follows</Caption>
                            </View>
                        </View>
                    </View>
                    {/* ==P2== */}
                    <Drawer.Section style={styles.drawerSection}>
                        {/* -1- */}
                        <DrawerItem 
                            label="Home"
                            icon = {({color, size}) => (
                                <Icon name="home-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                        {/* -2- */}
                        <DrawerItem 
                            label="Profile"
                            icon = {({color, size}) => (
                                <Icon name="account-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            onPress={() => {props.navigation.navigate('ProfileDrawer')}}
                        />
                        {/* -3- */}
                        <DrawerItem 
                            label="Bookmarks"
                            icon = {({color, size}) => (
                                <Icon name="bookmark-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            onPress={() => {props.navigation.navigate('InsertProductStack')}}
                        /> 
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    label="Sign Out"
                    icon = {({color, size}) => (
                        <Icon name="exit-to-app"
                            color={color}
                            size={size}
                        />
                    )}
                    //onPress={() => {signOut()}}
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent:{
        flex: 1,
    },
    userInfoSection:{
        paddingLeft: 20,
    },
    title:{
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption:{
        fontSize: 14,
        lineHeight: 14,
    },
    row:{
        marginTop:  20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section:{
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph:{
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection:{
        marginTop: 15,
    },
    bottomDrawerSection:{
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
    },
    preference:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});
export default DrawerContent; 
