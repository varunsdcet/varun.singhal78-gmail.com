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
  ActivityIndicator,




  } from 'react-native';
  import Loader from './Loader.js';
import React, {Component} from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Button from 'react-native-button';
const GLOBAL = require('./Global');

class SignupScreen extends React.Component {
  constructor() {
    super();
     this.state={

        phone:'',
        password:'',
        hidePassword: true,
        name:'',
        email:'',
        result:'',
        loading:''
     }
  }

        showLoading() {
        this.setState({loading: true})
       }

        hideLoading() {
        this.setState({loading: false})
       }

  managePasswordVisibility = () => {
     this.setState({ hidePassword: !this.state.hidePassword });
      }

      buttonClickListener = () =>{
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;


      if (this.state.name == ''){
       alert('Please Enter Username')
     }
     if (this.state.email == ''){
       alert('Please Enter Email id')
     }
      else if (this.state.email != '' && reg.test(this.state.email) === false){
       alert('Please Enter Valid Email')
     }
     else if (this.state.phone == ''){
       alert('Please Enter Mobile Number')
     }
     else if (this.state.password == ''){
       alert('Please Enter password')
     }

     else {

       this.showLoading()
   fetch('http://139.59.76.223/gym/webservices/otp', {
method: 'POST',
headers: {
  'x-api-key': 'c3a3cf7c211b7c07b2495d8aef9761fc',
  'Content-Type': 'application/json',
},
body: JSON.stringify({

       mobile: this.state.phone,


}),
}).then((response) => response.json())
 .then((responseJson) => {



    this.hideLoading()
    if (responseJson.status == true ) {

        GLOBAL.username = this.state.name
        GLOBAL.email = this.state.email
        GLOBAL.password = this.state.password
        GLOBAL.mobile = this.state.phone
        GLOBAL.otp = responseJson.otp



     alert('OTP Sent To Your Registered Mobile Number.')
     this.props.navigation.navigate('OtpScreen')
    }else {
        alert('Your Mobile Number Is Already Registered.')
    }
 })
 .catch((error) => {
   console.error(error);
 });
       }


      }


  render() {
    if(this.state.loading){
            return(
                <Loader>

                </Loader>

            )
        }
    return(
      <View style={{flex:1,backgroundColor:'transparent'}}>
      <ImageBackground style={{resizeMode:'contain',height:'100%',width:'100%'}} source={require('./signup.png')}>
      <KeyboardAwareScrollView>


      <Text style={{fontSize:42,fontFamily:'Exo2-Medium',color:'white',width:'65%',alignSelf:'center',textAlign:'center',marginTop:'31%'}}>Create New</Text>
      <Text style={{fontSize:42,fontFamily:'Exo2-Medium',color:'white',width:'65%',alignSelf:'center',textAlign:'center',marginTop:-8}}>Account</Text>

      <View style={{backgroundColor: 'rgba(0,0,0,0.3)',marginLeft:'5%',width:'90%',height:46,borderRadius:10,marginTop:26}}>
            <TextInput
              style={{fontSize:17,fontFamily:'Exo2-Medium',color:'rgba(255, 255, 255, 0.6)',width:'94%',height:46,marginLeft:'3%'}}
              placeholder="Name"
              placeholderTextColor="rgba(255, 255, 255, 0.6)"

              maxLength={50}
              onChangeText={(text) => this.setState({name: text})}
              value={this.state.name}
              />
      </View>

      <View style={{backgroundColor: 'rgba(0,0,0,0.3)',marginLeft:'5%',width:'90%',height:46,borderRadius:10,marginTop:10}}>
            <TextInput
              style={{fontSize:17,fontFamily:'Exo2-Medium',color:'rgba(255, 255, 255, 0.6)',width:'94%',height:46,marginLeft:'3%'}}
              placeholder="Email"
              placeholderTextColor="rgba(255, 255, 255, 0.6)"

              maxLength={30}
              onChangeText={(text) => this.setState({email: text})}
              value={this.state.email}
              />
      </View>

      <View style={{backgroundColor: 'rgba(0,0,0,0.3)',marginLeft:'5%',width:'90%',height:46,borderRadius:10,marginTop:10}}>
            <TextInput
              style={{fontSize:17,fontFamily:'Exo2-Medium',color:'rgba(255, 255, 255, 0.6)',width:'94%',height:46,marginLeft:'3%'}}
              placeholder="Mobile No."
              placeholderTextColor="rgba(255, 255, 255, 0.6)"
              keyboardType="numeric"
              maxLength={12}
              onChangeText={(text) => this.setState({phone: text})}
              value={this.state.phone}
              />
      </View>

      <View style={{backgroundColor: 'rgba(0,0,0,0.3)',marginLeft:'5%',width:'90%',height:46,borderRadius:10,marginTop:10,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
            <TextInput
              style={{fontSize:17,fontFamily:'Exo2-Medium',color:'rgba(255, 255, 255, 0.6)',width:'80%',height:46,marginLeft:'3%'}}
              placeholder="Password"
              secureTextEntry={this.state.hidePassword}
              placeholderTextColor="rgba(255, 255, 255, 0.6)"

              maxLength={30}
              onChangeText={(text) => this.setState({password: text})}
              value={this.state.password}
              />

         <TouchableOpacity style={{marginRight:18}}
           onPress = { this.managePasswordVisibility }>
         <Image
           style={{height:23,width:23,resizeMode:'contain'}}
           source={(this.state.hidePassword) ?   require('./hide1.png') : require('./show1.png') }
          />
          </TouchableOpacity>
      </View>



      <Button
        style={{fontSize: 18, color: '#161718',fontFamily:'Exo2-SemiBold'}}
        containerStyle={{height:50,width:'90%',alignSelf:'center',marginTop:32,borderRadius:10,backgroundColor:'white',justifyContent:'center'}}
        onPress={()=>this.buttonClickListener()}>
        CREATE ACCOUNT
      </Button>

      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:'56%',alignSelf:'center',marginTop:18}}>
        <Text style={{fontSize:18,fontFamily:'Exo2-Medium',color:'rgba(255, 255, 255, 0.6)'}}>Already a member?</Text>

        <Button
          style={{fontSize: 18, color: 'white',fontFamily:'Exo2-Medium'}}
          onPress={()=>this.props.navigation.goBack()}>

            Log In
        </Button>

      </View>




      </KeyboardAwareScrollView>
      </ImageBackground>
      </View>
    );
  }
}

export default SignupScreen;
