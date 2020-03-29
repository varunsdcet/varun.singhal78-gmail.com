import {
  SafeAreaView,
  Platform,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Alert,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
  Modal,
  Image,
  ImageBackground,
  Linking,
  FlatList,
  AsyncStorage,
  Dimensions,





  } from 'react-native';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import { StackActions } from '@react-navigation/native';
import {
NavigationContainer,
CommonActions,
} from '@react-navigation/native';

import React, {Component} from 'react';
import Button from 'react-native-button';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Header from 'react-native-custom-headers';


class SettingScreen extends React.Component {

   navigateToScreen1 = (route) => () => {

        Alert.alert('Logout!','Are you sure you want to Logout?',
            [{text:"Cancel"},
                {text:"Yes", onPress:()=>this._YesLogout()
                },
            ],
            {cancelable:false}
        )

    }

    _YesLogout=()=>{

      AsyncStorage.removeItem('userID');
      this.props.navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [
                {
                  name: 'LoginScreen',
                  params: { user: 'jane', key: this.props.route.key },
                },
                { name: 'LoginScreen' },
              ],
            })
          )

      // this.props.navigation.dispatch(
      //          StackActions.push('LoginScreen')
      //        )
    //  this.props.navigation.dispatch(StackActions.popToTop())
    //  StackActions.replace('LoginScreen')

      // this.props
      //       .navigation
      //       .dispatch(StackActions.reset({
      //
      //           index: 0,
      //           actions: [
      //               NavigationActions.navigate({
      //                   routeName: 'LoginScreen',
      //                   params: { someParams: 'parameters goes here...' },
      //               }),
      //           ],
      //       }))
    }

    chaloFacebook=()=> {
      Linking.openURL(`https://www.facebook.com/PUMP-Fitness-App-100861344881115/`)
    }

    chaloInstagram=()=> {
      Linking.openURL('instagram://user?pumpfitnessapp')
      //  Linking.openURL(`@pumpfitnessapp`)
    }

  render() {
    return(
      <SafeAreaView style={styles.AndroidSafeArea}>
                      <StatusBar backgroundColor="#639ced" barStyle="light-content" />

                      <View style = {{height:70,backgroundColor:'black',flexDirection:'row',width:'100%',justifyContent:'space-between'}}>



                          <Text style = {{alignSelf:'center',textAlign:'center',color:'white',fontFamily:'Exo2-Bold',fontSize: 18,marginLeft:30}}>
                            Settings
                          </Text>




                      </View>
                      <KeyboardAwareScrollView
                       keyboardShouldPersistTaps = 'always'

                       style={{ backgroundColor: 'white',marginTop:0,height:'90%' }} >
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:'90%',marginTop:25,alignSelf:'center'}}>

      <TouchableOpacity style={{width:161,height:163,borderRadius:12,backgroundColor:'white',elevation:2,shadowColor: '#000000',shadowOpacity: 1.0}}
      onPress={()=> this.props.navigation.navigate('ProfileScreen')}>
        <Image source={require('./profile.png')}
         style={{height:40,width:40,resizeMode:'contain',marginLeft:18,marginTop:29}}/>

         <Text style={{fontSize:18,fontFamily:'Exo2-Regular',color:'#242B37',marginTop:50,marginLeft:16}}>My Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{width:162,height:163,borderRadius:12,backgroundColor:'white',elevation:3,shadowColor: '#000000',shadowOpacity: 1.0}}
       onPress={()=>      Linking.openURL('http://pumpfit.in/index.html')}>

      <Image source={require('./about.png')}
       style={{height:40,width:40,resizeMode:'contain',marginLeft:23,marginTop:29}}/>

       <Text style={{fontSize:18,fontFamily:'Exo2-Regular',color:'#242B37',marginTop:50,marginLeft:17}}>About Us</Text>

      </TouchableOpacity>
      </View>

      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:'90%',marginTop:16,alignSelf:'center'}}>

      <TouchableOpacity style={{width:161,height:163,borderRadius:12,backgroundColor:'white',elevation:2,shadowColor: '#000000',shadowOpacity: 1.0}}
   onPress={()=>      Linking.openURL('http://pumpfit.in/term.html')}>
        <Image source={require('./t&c.png')}
         style={{height:43,width:35,resizeMode:'contain',marginLeft:17,marginTop:20}}/>

         <Text style={{fontSize:18,fontFamily:'Exo2-Regular',color:'#242B37',marginTop:39,marginLeft:17,width:'80%'}}>Terms and Conditions</Text>
      </TouchableOpacity>


       <View style={{flexDirection:'column'}}>

      <TouchableOpacity style={{flexDirection:'row',width:162,height:75,borderRadius:12,backgroundColor:'white',elevation:3,shadowColor: '#000000',shadowOpacity: 1.0,alignItems:'center'}}
       onPress={()=>      Linking.openURL('http://pumpfit.in/privacy.html')}>

      <Image source={require('./privacy.png')}
       style={{height:32,width:32,resizeMode:'contain',marginLeft:19}}/>

       <Text style={{fontSize:18,fontFamily:'Exo2-Regular',color:'#242B37',marginLeft:12}}>Privacy</Text>

      </TouchableOpacity>

      <TouchableOpacity style={{flexDirection:'row',width:162,height:75,borderRadius:12,marginTop:14,backgroundColor:'white',elevation:3,shadowColor: '#000000',shadowOpacity: 1.0,alignItems:'center'}}
       onPress={()=>this.props.navigation.navigate('SupportScreen')}>

      <Image source={require('./support.png')}
       style={{height:33,width:30,resizeMode:'contain',marginLeft:19}}/>

       <Text style={{fontSize:18,fontFamily:'Exo2-Regular',color:'#242B37',marginLeft:14}}>Support</Text>

      </TouchableOpacity>

      </View>

     </View>

     <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:'90%',marginTop:15,alignSelf:'center'}}>

     <TouchableOpacity style={{flexDirection:'row',width:162,height:75,borderRadius:12,backgroundColor:'white',elevation:3,shadowColor: '#000000',shadowOpacity: 1.0,alignItems:'center'}}      onPress={()=>this.props.navigation.navigate('Notification')}>

     <Image source={require('./notify.png')}
      style={{height:32,width:27,resizeMode:'contain',marginLeft:19}}/>

      <Text style={{fontSize:18,fontFamily:'Exo2-Regular',color:'#242B37',marginLeft:9}}>Notification</Text>

     </TouchableOpacity>


     <TouchableOpacity style={{flexDirection:'row',width:162,height:75,borderRadius:12,backgroundColor:'white',elevation:3,shadowColor: '#000000',shadowOpacity: 1.0,alignItems:'center'}}
     onPress={this.navigateToScreen1('LoginScreen')}

     >

     <Image source={require('./logout.png')}
      style={{height:30,width:30,resizeMode:'contain',marginLeft:18}}/>

      <Text style={{fontSize:18,fontFamily:'Exo2-Regular',color:'#242B37',marginLeft:15}}>Logout</Text>

     </TouchableOpacity>

     </View>

      <View style={{flexDirection:'row',marginTop:15,alignItems:'center',justifyContent:'space-between',width:'90%',marginTop:16,alignSelf:'center'}}>


      <TouchableOpacity style={{flexDirection:'row',width:162,height:75,borderRadius:12,backgroundColor:'white',elevation:3,shadowColor: '#000000',shadowOpacity: 1.0,alignItems:'center'}}
     onPress={()=>this.chaloFacebook()}>

     <Image source={require('./Fb.png')}
      style={{height:28,width:28,resizeMode:'contain',marginLeft:17}}/>

     <Text style={{fontSize:18,fontFamily:'Exo2-Regular',color:'#242B37',marginLeft:14,alignSelf:'center'}}>Facebook</Text>

     </TouchableOpacity>

     <TouchableOpacity style={{flexDirection:'row',width:162,height:75,borderRadius:12,backgroundColor:'white',elevation:3,shadowColor: '#000000',shadowOpacity: 1.0,alignItems:'center'}}
     onPress={()=>this.chaloInstagram()}>

     <Image source={require('./insta.png')}
      style={{height:28,width:28,resizeMode:'contain',marginLeft:17}}/>

     <Text style={{fontSize:18,fontFamily:'Exo2-Regular',color:'#242B37',marginLeft:14,alignSelf:'center'}}>Instagram</Text>

     </TouchableOpacity>

      </View>

</KeyboardAwareScrollView>




      </SafeAreaView>
    );
  }


}

export default SettingScreen;
const styles = StyleSheet.create({

    container: {
        flex:1,
        backgroundColor :'white',

    },
    containers: {

        backgroundColor :'white'
    },
    AndroidSafeArea: {
       flex: 0,
       backgroundColor:'black',
       paddingTop: Platform.OS === "android" ? 0 : 0
   },
    loading: {
        position: 'absolute',
        left: window.width/2 - 30,

        top: window.height/2,

        opacity: 0.5,

        justifyContent: 'center',
        alignItems: 'center'
    },

})
