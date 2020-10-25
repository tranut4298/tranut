/**
 * DETAILS SCREEN
 * 
 */
import React from'react';
import { Text, View, StyleSheet, Image, ScrollView, SafeAreaView } from 'react-native';
import { Button } from 'react-native-paper';
import { Ionicons, MaterialIcons } from 'react-native-vector-icons';
//---Do By Person---

const ProfileScreen = ({navigation}) =>{
    return(
     <SafeAreaView style={styles.container}>
       <ScrollView showsVerticalScrollIndicator={false}>
         <View style={{alignSelf: 'center'}}>
           {/* -Image- */}
           <View style={styles.profileImage}>
             <Image 
              source={require('../Zimage/avatar.jpg')}
              style={styles.image}
              resizeMode='center'
             />
           </View>
           {/* -NAME- */}
           <View style={styles.inforContainer}>
            <Text style={[styles.text, {fontWeight: '200', fontSize: 26}]}>桜の花</Text>
            <Text style={[styles.text, {color:'#AEB5BC', fontSize: 12 }]}>Photographer</Text>
           </View>
           {/* -- */}
           <View style={styles.statsContainer}>
            <View style={styles.statsBox}>
              <Text style={[styles.text, {fontSize: 20}]}>483</Text>
              <Text style={[styles.text, styles.subText]}>Posts</Text>
            </View>
            <View style={[styles.statsBox, {borderColor: '#DFD8C8', borderLeftWidth: 1, borderRightWidth: 1}]}>
              <Text style={[styles.text, {fontSize: 20}]}>45,844</Text>
              <Text style={[styles.text, styles.subText]}>Followers</Text>
            </View>
            <View style={styles.statsBox}>
              <Text style={[styles.text, {fontSize: 20}]}>302</Text>
              <Text style={[styles.text, styles.subText]}>Following</Text>
            </View>
           </View>
         </View>

         {/* -Media Image- */}
         <View style={{marginTop: 22}}>
           <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
               <View style={styles.mediaImageContainer}>
                <Image
                  source={require('../Zimage/avatar.jpg')} 
                  style={styles.image}
                  resizeMode='cover'
                />
               </View>
               <View style={styles.mediaImageContainer}>
                <Image
                  source={require('../Zimage/avatar2.jpg')} 
                  style={styles.image}
                  resizeMode='cover'
                />
               </View>
               <View style={styles.mediaImageContainer}>
                <Image
                  source={require('../Zimage/avatar3.jpg')} 
                  style={styles.image}
                  resizeMode='cover'
                />
               </View>
           </ScrollView>
           <View  style={styles.mediaCount}>
               <Text style={[styles.text, {fontSize: 20, color: '#DFD8C8', fontWeight: '300'}]}>34</Text>
               <Text style={[styles.text, {fontSize: 10, color: '#DFD8C8', textTransform: 'uppercase'}]}>Media</Text>
             </View>
         </View>

         <Text style={[styles.subText, styles.recent]}>Recent Activity</Text>  

         <View style={{alignItems: 'center'}}>
          <View style={styles.recentItem}>
            <View style={styles.recentItemIndicator}></View>
            <View  style={{width: 250}}>
              <Text style={[styles.text, {color: '#41444B', fontWeight: '100'}]}>Started following <Text style={{fontWeight: 'bold'}}>Jake Challeahe and <Text style={{fontWeight: 'bold'}}>DesingIntoCode</Text></Text></Text>
            </View>
          </View>
          <View style={styles.recentItem}>
            <View style={styles.recentItemIndicator}></View>
            <View  style={{width: 250}}>
              <Text style={[styles.text, { color: '#41444B', fontWeight: '100'}]}>Started following <Text style={{fontWeight: 'bold'}}>Luke Harper</Text></Text>
            </View>
          </View>
         </View> 
       </ScrollView>
     </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    text: {
      fontFamily: 'HelveticaNeue',
      color: '#52575D',
    },
    image: {
      flex: 1,
      width: undefined,
      height: undefined,
    },
    profileImage: {
      marginTop: 20,
      width: 150,
      height: 150,
      borderRadius: 100,
      overflow: 'hidden', 
    },
    inforContainer: {
      alignSelf: 'center',
      alignItems: 'center',
      marginTop: 16,
    },
    statsContainer: {
      flexDirection: 'row',
      alignSelf: 'center',
      marginTop:  22,
    },
    statsBox: {
      flex: 1,
      alignItems: 'center',
    },
    subText: {
      fontSize: 10,
      color: '#AEB5BC',
      textTransform: 'uppercase',
      fontWeight: '500',
    },
    mediaImageContainer: {
      width: 140,
      height: 200,
      overflow: 'hidden',
      marginHorizontal: 10,
    },
    mediaCount: {
      backgroundColor: '#41444B',
      position: 'absolute',
      top: '50%',
      marginTop: -70,
      marginLeft: 20,
      width: 80,
      height: 80,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 12,
      shadowColor: 'rgba(0, 0, 0, 0.38)',
      shadowOffset: {width: 0, height: 10},
      shadowRadius: 20,
      shadowOpacity: 1
    },
    recent: {
      marginLeft: 68,
      marginTop: 22,
      marginBottom: 6,
      fontSize: 10,
    },
    recentItem: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      marginBottom: 12,
    },
    recentItemIndicator: {
      backgroundColor: '#CABFAB',
      padding: 4,
      height: 12,
      width: 12,
      borderRadius: 6,
      marginTop: 5,
      marginRight: 18,
    }
});
export default ProfileScreen;