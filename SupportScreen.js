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
  Dimensions,
  AsyncStorage,




  } from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import React, {Component} from 'react';
import Button from 'react-native-button';
const GLOBAL = require('./Global');
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PulseIndicator } from 'react-native-indicators';
import Header from 'react-native-custom-headers';

class SupportScreen extends React.Component {
  render() {
    return(
      <SafeAreaView style={styles.AndroidSafeArea}>
                      <StatusBar backgroundColor="#639ced" barStyle="light-content" />

                      <View style = {{height:70,backgroundColor:'black',flexDirection:'row',width:'100%',justifyContent:'space-between'}}>


                      <TouchableOpacity onPress= {()=>this.props.navigation.goBack()}>
                          <Image
                              source={require('./arrowlogo2.png')}
                              style={{width: 18, height: 20,marginLeft:20,marginTop:25,resizeMode:'contain'}}


                          />
                      </TouchableOpacity>


                          <Text style = {{alignSelf:'center',textAlign:'center',color:'white',fontFamily:'Exo2-Bold',fontSize: 18,paddingRight:20}}>
                            Suppourt
                          </Text>

                          <View>

                          </View>


                      </View>
                      <KeyboardAwareScrollView
                       keyboardShouldPersistTaps = 'always'

                       style={{ backgroundColor: 'white',marginTop:0,height:'98%' }} >
                       <View>

            <TouchableOpacity style={{height:90,width:'90%',marginLeft:'5%',borderRadius:12,elevation:2,backgroundColor:'white',marginTop:20,shadowOffset: {width: 2,height: 2},shadowColor: '#00000014'}}>

              <Text style={{fontSize:16,fontFamily:'Exo2-Regular',color:'#242B3780',marginLeft:22,marginTop:20}}>Email</Text>
              <Text style={{fontSize:20,fontFamily:'Exo2-Regular',color:'#161718',marginLeft:22,marginTop:2}}>support@gym.in</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{height:90,width:'90%',marginLeft:'5%',borderRadius:12,elevation:2,backgroundColor:'white',marginTop:20,shadowOffset: {width: 2,height: 2},shadowColor: '#00000014'}}>

              <Text style={{fontSize:16,fontFamily:'Exo2-Regular',color:'#242B3780',marginLeft:22,marginTop:20}}>Phone</Text>
              <Text style={{fontSize:20,fontFamily:'Exo2-Regular',color:'#161718',marginLeft:22,marginTop:2}}>+91 987654321</Text>
            </TouchableOpacity>



         </View>
         </KeyboardAwareScrollView>
        </SafeAreaView>
    );
  }
}

export default SupportScreen;
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
