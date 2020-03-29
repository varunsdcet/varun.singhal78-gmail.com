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
Modal



  } from 'react-native';


import React, {Component} from 'react';
import Button from 'react-native-button';
const GLOBAL = require('./Global');
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PulseIndicator } from 'react-native-indicators';
import VideoPlayer from 'react-native-video-controls';
import NoteScreen from './NoteScreen.js';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

class VideoScreen extends React.Component {
  constructor(props) {
    super(props);
     this.state={
       img_change:0,
       button_one:0,
       button_two:0,
       button_three:0,
       showimage: true,
       modalVisible: false,

     }
  }



  setModalVisible=(visible)=> {
      this.setState({modalVisible: visible});
    }

  manageImageVisibility= () => {
    this.setState({ showimage: !this.state.showimage });
  }

  onChangeButton1=()=> {
    this.setState({ button_one:1 });
    this.setState({ button_two:0 });
    this.setState({ button_three:0 });

  }

  onChangeButton2=()=> {

    this.setState({ button_one:0 });
    this.setState({ button_two:1 });
    this.setState({ button_three:0 });

  }

  onChangeButton3=()=> {

    this.setState({ button_one:0 });
    this.setState({ button_two:0 });
    this.setState({ button_three:1 });


  }

  componentDidMount(){
    this.onChangeButton2()
  //  this.setState({button_one:1})
  //   alert(JSON.stringify(GLOBAL.image))

  }


  render() {

    if(this.state.button_two){
      return(
        <SafeAreaProvider>
        <View style={{flex:1,backgroundColor:'white'}}>



          <View style={{width:'100%',height:Dimensions.get('window').height-200,backgroundColor:'white'}}>
          <VideoPlayer
              source={{ uri:GLOBAL.video }}
              navigator={ this.props.navigator }
              repeat = {true}
              onBack={()=>this.props.navigation.goBack()}
          />
          </View>


{/*              <TouchableOpacity style={{alignSelf:'flex-end',marginTop:20,marginRight:20}}
             onPress={this.manageImageVisibility}>
             <Image source={(this.state.showimage) ?   require('./whitelike.png') : require('./redheart.png')}
              style={{width:24,height:22,resizeMode:'contain'}}/>
              </TouchableOpacity>

              <Image source={require('./youtube1.png')}
               style={{width:54,height:38,resizeMode:'contain',marginTop:110,alignSelf:'center'}}/>
*/}

{this.state.button_two ==1&&(

 <View style={{flexDirection:'row',marginLeft:'5%',width:'90%',alignItems:'center',justifyContent:'space-between',marginTop:16}}>
 <TouchableOpacity style={{flexDirection:'row',height:42,width:'48%',backgroundColor:'#161718',alignItems:'center',borderRadius:6}}>

   <Image source={require('./dolle.png')}
    style={{width:21,height:22,resizeMode:'contain',marginLeft:8}}/>

    <View style={{flexDirection:'column',marginLeft:24,textAlign:'left'}}>
    <Text style={{fontSize:15,fontFamily:'Exo2-Medium',color:'white'}}>Body Parts</Text>
    <Text style={{fontSize:13,fontFamily:'Exo2-Regular',color:'#FFFFFF66',marginTop:-2}}>{GLOBAL.parts}</Text>
    </View>
 </TouchableOpacity>

 <TouchableOpacity style={{flexDirection:'row',height:42,width:'48%',backgroundColor:'#161718',alignItems:'center',borderRadius:6}}>

 <Image source={require('./dumbbel.png')}
  style={{width:24,height:13,resizeMode:'contain',marginLeft:9}}/>

  <View style={{flexDirection:'column',marginLeft:24,textAlign:'left'}}>
  <Text style={{fontSize:15,fontFamily:'Exo2-Medium',color:'white'}}>You Need</Text>
  <Text style={{fontSize:13,fontFamily:'Exo2-Regular',color:'#FFFFFF66',marginTop:-3}}>{GLOBAL.needs}</Text>
  </View>

 </TouchableOpacity>
 </View>

)}

           <View style={{flexDirection:'row',marginLeft:'5%',width:'90%',alignItems:'center',justifyContent:'space-between',marginTop:25}}>


            { this.state.button_one == 0 && (

            <TouchableOpacity style={{flexDirection:'row',height:34,width:'31.5%',backgroundColor:'#16171866',alignItems:'center',borderRadius:6}}
            onPress={()=>this.onChangeButton1()}>

               <Image source={require('./gallery.png')}
                style={{height:16,width:16,resizeMode:'contain',marginLeft:8}} />

                <Text style={{fontSize:17,fontFamily:'Exo2-Regular',color:'#FFFFFF',marginLeft:18}}>IMAGE</Text>
            </TouchableOpacity>

            )}


            { this.state.button_one == 1 && (

              <TouchableOpacity style={{flexDirection:'row',height:34,width:'31.5%',backgroundColor:'#161718',alignItems:'center',borderRadius:6}}>

                 <Image source={require('./gallery.png')}
                  style={{height:16,width:16,resizeMode:'contain',marginLeft:8}} />

                  <Text style={{fontSize:17,fontFamily:'Exo2-Regular',color:'#FFFFFF',marginLeft:18}}>IMAGE</Text>
              </TouchableOpacity>

            )}





            { this.state.button_two == 0 && (

            <TouchableOpacity style={{flexDirection:'row',height:34,width:'31.5%',backgroundColor:'#16171866',alignItems:'center',borderRadius:6}}
            onPress={()=>this.onChangeButton2()}>

            <Image source={require('./youtube2.png')}
             style={{height:22,width:16,resizeMode:'contain',marginLeft:8}} />

             <Text style={{fontSize:17,fontFamily:'Exo2-Regular',color:'#FFFFFF',marginLeft:18}}>VIDEO</Text>

            </TouchableOpacity>

            )}

            { this.state.button_two == 1 && (
              <TouchableOpacity style={{flexDirection:'row',height:34,width:'31.5%',backgroundColor:'#161718',alignItems:'center',borderRadius:6}}>

              <Image source={require('./youtube2.png')}
               style={{height:22,width:16,resizeMode:'contain',marginLeft:8}} />

               <Text style={{fontSize:17,fontFamily:'Exo2-Regular',color:'#FFFFFF',marginLeft:18}}>VIDEO</Text>

              </TouchableOpacity>
            )}










           </View>
{/*
           <Button
             style={{fontSize: 19, color: '#FFFFFF',fontFamily:'Exo2-Medium'}}
             containerStyle={{height:50,width:'90%',borderRadius:6,backgroundColor:'#161718',justifyContent:'center',position:'absolute',left:'5%',bottom:40}}>
             Download Video
           </Button>
*/}



        </View>
        </SafeAreaProvider>

      )
    }

  else if(this.state.button_three){
    return (        <SafeAreaProvider>
              <KeyboardAwareScrollView style={{backgroundColor:'white'}}>

                 <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:20,width:'90%',marginLeft:'5%'}}>

                   <Text style={{fontSize:17, fontFamily:'Exo2-SemiBold', color:'#242B37'}}>Instructions:</Text>

                   <TouchableOpacity style={{marginRight:5}}
                   onPress={()=> this.setModalVisible(true)}>
                   <Image source={require('./note1.png')}
                    style={{height:22,width:22,resizeMode:'contain'}} />
                   </TouchableOpacity>

                 </View>

                 <Text style={{fontSize:16,fontFamily:'Exo2-Medium',color:'#242B3780',marginTop:10,marginLeft:'5%',width:'90%',textAlign:'left'}}>{GLOBAL.description}</Text>




                 <View style={{flexDirection:'row',marginLeft:'5%',width:'90%',alignItems:'center',justifyContent:'space-between',marginTop:25, marginBottom:10}}>


                  { this.state.button_one == 0 && (

                  <TouchableOpacity style={{flexDirection:'row',height:34,width:'31.5%',backgroundColor:'#16171866',alignItems:'center',borderRadius:6}}
                  onPress={()=>this.onChangeButton1()}>

                     <Image source={require('./gallery.png')}
                      style={{height:16,width:16,resizeMode:'contain',marginLeft:8}} />

                      <Text style={{fontSize:17,fontFamily:'Exo2-Regular',color:'#FFFFFF',marginLeft:18}}>IMAGE</Text>
                  </TouchableOpacity>

                  )}


                  { this.state.button_one == 1 && (

                    <TouchableOpacity style={{flexDirection:'row',height:34,width:'31.5%',backgroundColor:'#161718',alignItems:'center',borderRadius:6}}>

                       <Image source={require('./gallery.png')}
                        style={{height:16,width:16,resizeMode:'contain',marginLeft:8}} />

                        <Text style={{fontSize:17,fontFamily:'Exo2-Regular',color:'#FFFFFF',marginLeft:18}}>IMAGE</Text>
                    </TouchableOpacity>

                  )}





                  { this.state.button_two == 0 && (

                  <TouchableOpacity style={{flexDirection:'row',height:34,width:'31.5%',backgroundColor:'#16171866',alignItems:'center',borderRadius:6}}
                  onPress={()=>this.onChangeButton2()}>

                  <Image source={require('./youtube2.png')}
                   style={{height:22,width:16,resizeMode:'contain',marginLeft:8}} />

                   <Text style={{fontSize:17,fontFamily:'Exo2-Regular',color:'#FFFFFF',marginLeft:18}}>VIDEO</Text>

                  </TouchableOpacity>

                  )}

                  { this.state.button_two == 1 && (
                    <TouchableOpacity style={{flexDirection:'row',height:34,width:'31.5%',backgroundColor:'#161718',alignItems:'center',borderRadius:6}}>

                    <Image source={require('./youtube2.png')}
                     style={{height:22,width:16,resizeMode:'contain',marginLeft:8}} />

                     <Text style={{fontSize:17,fontFamily:'Exo2-Regular',color:'#FFFFFF',marginLeft:18}}>VIDEO</Text>

                    </TouchableOpacity>
                  )}









                 </View>
                 <Modal
                         animationType="slide"
                         transparent={true}
                         visible={this.state.modalVisible}
                         onRequestClose={() => {
              //             Alert.alert('Modal has been closed.');
                           this.setModalVisible(!this.state.modalVisible)
                         }}>
                         <TouchableOpacity
                          style={{
                                   flex: 1,
                                   flexDirection: 'column',
                                   justifyContent: 'center',backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                   alignItems: 'center'}}
                          activeOpacity={1}
                          onPressOut={() => {this.setModalVisible(false)}}
                        >
                         <View style={{

                                   flexDirection: 'column',
                                   justifyContent: 'center',backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                   alignItems: 'center'}}>
                             <View style={{
                                     width: 300,backgroundColor: 'white',
                                     height: 300}}>
                                     <View style={{width: '95%', margin: 10}}>

                                     <TextInput
                                       style={{fontSize:17,fontFamily:'Exo2-Medium',color:'#242B3766',width:'98%',height:'auto'}}
                                       placeholder="Your text here…"
                                       placeholderTextColor="#242B3766"
                                       keyboardType="numeric"
                                       maxLength={12}
                                       onChangeText={(text) => this.setState({phone: text})}
                                       value={this.state.phone}
                                       />


                                    <View style={{borderBottomWidth:2,borderColor:'#0000004D',width:'98%',marginTop:'63%'}}>
                                    </View>

                                    <View style={{flexDirection:'row',width:'55%',alignItems:'center',justifyContent:'space-between',marginTop:17,alignSelf:'flex-end',marginRight:6}}>

                                     <Button
                                      style={{fontSize:17,fontFamily:'Exo2-Medium',color:'#242B37'}}>
                                      CANCEL
                                     </Button>

                                     <Button
                                      style={{fontSize:17,fontFamily:'Exo2-Medium',color:'#242B37'}}>
                                      CONFIRM
                                     </Button>

                                     </View>

                                    </View>


                             </View>

                         </View>
                         </TouchableOpacity>
                       </Modal>








              </KeyboardAwareScrollView>
            </SafeAreaProvider>
)
  }
  else{
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
                            
                          </Text>

                          <View>

                          </View>


                      </View>
         <View style={{backgroundColor:'white'}}>


        <Image source={{uri: GLOBAL.image}}
          style={{width:'100%',height:Dimensions.get('window').height/2,marginTop:20,resizeMode:'contain'}}  />


{this.state.button_two ==1&&(

  <View style={{flexDirection:'row',marginLeft:'5%',width:'90%',alignItems:'center',justifyContent:'space-between',marginTop:16}}>
  <TouchableOpacity style={{flexDirection:'row',height:42,width:'48%',backgroundColor:'#161718',alignItems:'center',borderRadius:6}}>

    <Image source={require('./dolle.png')}
     style={{width:21,height:22,resizeMode:'contain',marginLeft:8}}/>

     <View style={{flexDirection:'column',marginLeft:24,textAlign:'left'}}>
     <Text style={{fontSize:15,fontFamily:'Exo2-Medium',color:'white'}}>Body Parts</Text>
     <Text style={{fontSize:13,fontFamily:'Exo2-Regular',color:'#FFFFFF66',marginTop:-2}}>Abs</Text>
     </View>
  </TouchableOpacity>

  <TouchableOpacity style={{flexDirection:'row',height:42,width:'48%',backgroundColor:'#161718',alignItems:'center',borderRadius:6}}>

  <Image source={require('./dumbbel.png')}
   style={{width:24,height:13,resizeMode:'contain',marginLeft:9}}/>

   <View style={{flexDirection:'column',marginLeft:24,textAlign:'left'}}>
   <Text style={{fontSize:15,fontFamily:'Exo2-Medium',color:'white'}}>You Need</Text>
   <Text style={{fontSize:13,fontFamily:'Exo2-Regular',color:'#FFFFFF66',marginTop:-3}}>Yoga Mat</Text>
   </View>

  </TouchableOpacity>
  </View>

)}

            <View style={{flexDirection:'row',marginLeft:'5%',width:'90%',alignItems:'center',justifyContent:'space-between',marginTop:25}}>


             { this.state.button_one == 0 && (

             <TouchableOpacity style={{flexDirection:'row',height:34,width:'31.5%',backgroundColor:'#16171866',alignItems:'center',borderRadius:6}}
             onPress={()=>this.onChangeButton1()}>

                <Image source={require('./gallery.png')}
                 style={{height:16,width:16,resizeMode:'contain',marginLeft:8}} />

                 <Text style={{fontSize:17,fontFamily:'Exo2-Regular',color:'#FFFFFF',marginLeft:18}}>IMAGE</Text>
             </TouchableOpacity>

             )}


             { this.state.button_one == 1 && (

               <TouchableOpacity style={{flexDirection:'row',height:34,width:'31.5%',backgroundColor:'#161718',alignItems:'center',borderRadius:6}}>

                  <Image source={require('./gallery.png')}
                   style={{height:16,width:16,resizeMode:'contain',marginLeft:8}} />

                   <Text style={{fontSize:17,fontFamily:'Exo2-Regular',color:'#FFFFFF',marginLeft:18}}>IMAGE</Text>
               </TouchableOpacity>

             )}





             { this.state.button_two == 0 && (

             <TouchableOpacity style={{flexDirection:'row',height:34,width:'31.5%',backgroundColor:'#16171866',alignItems:'center',borderRadius:6}}
             onPress={()=>this.onChangeButton2()}>

             <Image source={require('./youtube2.png')}
              style={{height:22,width:16,resizeMode:'contain',marginLeft:8}} />

              <Text style={{fontSize:17,fontFamily:'Exo2-Regular',color:'#FFFFFF',marginLeft:18}}>VIDEO</Text>

             </TouchableOpacity>

             )}

             { this.state.button_two == 1 && (
               <TouchableOpacity style={{flexDirection:'row',height:34,width:'31.5%',backgroundColor:'#161718',alignItems:'center',borderRadius:6}}>

               <Image source={require('./youtube2.png')}
                style={{height:22,width:16,resizeMode:'contain',marginLeft:8}} />

                <Text style={{fontSize:17,fontFamily:'Exo2-Regular',color:'#FFFFFF',marginLeft:18}}>VIDEO</Text>

               </TouchableOpacity>
             )}










            </View>
{/*
            <Button
              style={{fontSize: 19, color: '#FFFFFF',fontFamily:'Exo2-Medium'}}
              containerStyle={{height:50,width:'90%',borderRadius:6,backgroundColor:'#161718',justifyContent:'center',position:'absolute',left:'5%',bottom:40}}>
              Download Video
            </Button>
*/}



         </View>
         </SafeAreaView>
    );

  }

  }
}

export default VideoScreen;
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
