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
  TextInput,
  Image,
  ImageBackground,
  Linking,
  FlatList,
  AsyncStorage,
  Dimensions,




  } from 'react-native';

import React, {Component} from 'react';
import Swiper from 'react-native-swiper';


 class StyleScreen extends React.Component {
   render() {
     return(

      <View style={{flex:1,flexDirection:'column'}}>

        <Swiper
           onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
           dot={<View style={{backgroundColor: '#ffffff', width: 8, height: 8, borderRadius: 4, marginLeft: 5, marginRight: 5}} />}
           activeDot={<View style={{backgroundColor: '#ffffff', width: 30, height:10, borderRadius: 5, marginLeft: 5, marginRight: 5}} />}
            paginationStyle={{position:'absolute',bottom:78,left:'73.5%',width:'20%'}} loop>

           <View style={{backgroundColor: 'transparent',flexDirection:'column'}}>
            <ImageBackground style={{resizeMode:'cover',height:'100%',width:'100%'}} source={require('./style1.png')} >

            <View style={{flex:4}}>
            </View>
            <View style={{flex:3}}>
            <Text style={{fontSize:32,fontFamily:'Exo2-SemiBold',color:'white',width:'70%',marginLeft:'7%',marginTop:'4%'}}>Unsleadh your inner athlete.</Text>
            <Text style={{fontSize:15,fontFamily:'Exo2-Medium',color:'white',width:'84%',marginLeft:'7%',marginTop:10}}>High intensity training: anytime & anywhere. Start training today!</Text>
            <TouchableOpacity style={{height:60,width:150,backgroundColor:'white',borderRadius:10,marginTop:50,marginLeft:'7%',justifyContent:'center'}}
            onPress={()=> this.props.navigation.replace('LoginScreen')}>
            <Text style={{fontSize:17,fontFamily:'Exo2-SemiBold',color:'#161718',alignSelf:'center'}}>Get Started</Text>
            </TouchableOpacity>
            </View>
            </ImageBackground>
            </View>

           <View style={{flex:1,backgroundColor: 'transparent'}}>
            <ImageBackground style={{resizeMode:'cover',height:'100%',width:'100%'}} source={require('./style2.png')}>

            <View style={{flex:4}}>
            </View>
            <View style={{flex:3}}>
            <Text style={{fontSize:32,fontFamily:'Exo2-SemiBold',color:'white',width:'70%',marginLeft:'7%',marginTop:'4%'}}>Unsleadh your inner athlete.</Text>
            <Text style={{fontSize:15,fontFamily:'Exo2-Medium',color:'white',width:'84%',marginLeft:'7%',marginTop:10}}>High intensity training: anytime & anywhere. Start training today!</Text>
            <TouchableOpacity style={{height:60,width:150,backgroundColor:'white',borderRadius:10,marginTop:50,marginLeft:'7%',justifyContent:'center'}}
            onPress={()=> this.props.navigation.replace('LoginScreen')}>

            <Text style={{fontSize:17,fontFamily:'Exo2-SemiBold',color:'#161718',alignSelf:'center'}}>Get Started</Text>
            </TouchableOpacity>
            </View>


            </ImageBackground>
           </View>

           <View style={{backgroundColor: 'transparent'}}>

            <ImageBackground style={{resizeMode:'cover',height:'100%',width:'100%'}} source={require('./style3.png')}>

            <View style={{flex:4}}>
            </View>
            <View style={{flex:3}}>
            <Text style={{fontSize:32,fontFamily:'Exo2-SemiBold',color:'white',width:'70%',marginLeft:'7%',marginTop:'4%'}}>Unsleadh your inner athlete.</Text>
            <Text style={{fontSize:15,fontFamily:'Exo2-Medium',color:'white',width:'84%',marginLeft:'7%',marginTop:10}}>High intensity training: anytime & anywhere. Start training today!</Text>
            <TouchableOpacity style={{height:60,width:150,backgroundColor:'white',borderRadius:10,marginTop:50,marginLeft:'7%',justifyContent:'center'}}
            onPress={()=> this.props.navigation.replace('LoginScreen')}>
            <Text style={{fontSize:17,fontFamily:'Exo2-SemiBold',color:'#161718',alignSelf:'center'}}>Get Started</Text>
            </TouchableOpacity>
            </View>

           </ImageBackground>

           </View>





         </Swiper>



      </View>
     );
   }
 }

 export default StyleScreen;
