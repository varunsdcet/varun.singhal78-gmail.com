
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

import React, {Component} from 'react';
import Button from 'react-native-button';
const GLOBAL = require('./Global');
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PulseIndicator } from 'react-native-indicators';
import Header from 'react-native-custom-headers';

class WorkScreen extends React.Component {
  constructor(props) {
    super(props);

     this.state={

       loading:'',

       FlatListItems: [],
}
  }

   showLoading() {
    this.setState({loading: true})
   }

    hideLoading() {
    this.setState({loading: false})
   }

   navigate=(work_out_name, id, image)=> {
    GLOBAL.workname = work_out_name
    GLOBAL.workid = id
    GLOBAL.workimage = image
  this.props.navigation.navigate('FullbodyScreen')

}

  renderItem=({item, index}) => {
return(
  <TouchableOpacity style={{width:'90%',height:66,marginTop:18,marginBottom:2,backgroundColor:'white',elevation:2,borderRadius:6,marginLeft:'5%',shadowColor:'#1617184D',shadowRadius:1}}
  onPress={()=>this.navigate(item.work_out_name, item.id, item.image)}>

     <View style={{flexDirection:'row',alignItems:'center',marginLeft:16,marginTop:15}}>

        <View style={{height:26,width:26,borderRadius:13,backgroundColor:'#161718',justifyContent:'center'}}>
        <Text style={{fontSize:14,fontFamily:'Exo2-Medium',color:'white',alignSelf:'center'}}>{index+1}</Text>
        </View>

        <View style={{flexDirection:'column',marginLeft:12}}>

         <Text style={{fontSize:12,fontFamily:'Exo2-Medium',color:'#1617184D'}}>Workout</Text>
         <Text style={{fontSize:15,fontFamily:'Exo2-Medium',color:'#161718'}}>{item.work_out_name}</Text>

        </View>




     </View>




  </TouchableOpacity>



 );
}


 componentDidMount() {



    this.showLoading()
       fetch('http://pumpfit.in/admin/webservices/getworkout', {
         method: 'POST',
        headers: {
            'x-api-key': 'c3a3cf7c211b7c07b2495d8aef9761fc',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user_id: GLOBAL.user_id
        }),
    }).then((response) => response.json())
        .then((responseJson) => {


              this.hideLoading()
             if (responseJson.status == true) {
                 this.setState({FlatListItems: responseJson.workout })
                  // alert(JSON.stringify(this.state.FlatListItems))
             }
             else{
              //  alert('Invalid Credentials!')
             }
        })
        .catch((error) => {
            console.error(error);
        });
}

_keyExtractor=(item, index)=>item.key;

  render() {
    return(
      <SafeAreaView style={styles.AndroidSafeArea}>
                      <StatusBar backgroundColor="#639ced" barStyle="light-content" />

                      <View style = {{height:70,backgroundColor:'black',flexDirection:'row',width:'100%',justifyContent:'space-between'}}>
                          <View>
                          <TouchableOpacity onPress= {()=>this.props.navigation.goBack()}>
                              <Image
                                  source={require('./arrowlogo2.png')}
                                  style={{width: 18, height: 20,marginLeft:20,marginTop:25,resizeMode:'contain'}}


                              />
                          </TouchableOpacity>
                          </View>


                          <Text style = {{alignSelf:'center',textAlign:'center',color:'white',fontFamily:'Exo2-Bold',fontSize: 18,paddingRight:30}}>

                          </Text>


                          <Text style = {{alignSelf:'center',textAlign:'center',color:'white',fontFamily:GLOBAL.heavy,fontSize: 18,paddingRight: 10}}>

                          </Text>

                      </View>

           <View style={{backgroundColor:'white'}}>

           <FlatList
            data={this.state.FlatListItems}

            keyExtractor={this._keyExtractor}
            renderItem={this.renderItem}
             />

           </View>

          </SafeAreaView>
    );
  }
}

export default WorkScreen;
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
