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
import RazorpayCheckout from 'react-native-razorpay';
  import HTML from 'react-native-render-html';
import React, {Component} from 'react';
import Button from 'react-native-button';
const GLOBAL = require('./Global');
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PulseIndicator } from 'react-native-indicators';
import VideoPlayer from 'react-native-video-controls';
import Header from 'react-native-custom-headers';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
class NewSubscription extends React.Component {
  constructor(props) {
    super(props)
     this.state={

       FlatListItems: [],
       loading:'',
       image:[],
       mystaus:false,


}
  }

    showLoading() {
    this.setState({loading: true})
   }

    hideLoading() {
    this.setState({loading: false})
   }


  renderItem=({item}) => {
return(
<>

    <View>

         <View style={{flexDirection:'row',width:'90%',marginTop:12,marginLeft:'5%',alignItems:'center',justifyContent:'space-between'}}>

            <Text style={{fontSize:18,fontFamily:'Exo2-Regular',color:'#161718'}}>{item.title}</Text>

            <Button
             style={{fontSize: 12, color: '#161718',fontFamily:'Exo2-Medium'}}
             onPress={()=>this.navigate2(item.title, item.all_package)}>
             View All
           </Button>

            </View>





            <View style={{marginLeft:10,marginTop:5}}>
             <FlatList
              data={item.all_package}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={this._keyExtractor2}
              renderItem={this.renderItem2}
              />
             </View>
   </View>
</>

 )
}


navigate2=(title, all_package)=> {
  //alert(JSON.stringify(all_package))

   GLOBAL.maintitle = title
   GLOBAL.packageall = all_package
   this.props.navigation.navigate('LibraryScreen')

   }

_keyExtractor=(item, index)=>item.key;

navigate=(no_of_week, id)=> {
  GLOBAL.weeks = no_of_week
  GLOBAL.package_id = id
  this.props.navigation.navigate('WeekScreen')

}

access = (item) =>{


var amount = parseInt(item.amount) * 100

var d = `Order_Package_${GLOBAL.user_id}_${item.id}`

  var options = {
      description: d,
image: item.image,
      currency: 'INR',
      key: 'rzp_test_9FNVaaXL2WKZMI',
      amount:amount,


      name: 'varun',
      prefill: {
          email: 'varun.singhal78@gmail.com',
          contact: '9896904632',
          name: 'varun'
      },
      theme: {color: 'black'}
  }

  RazorpayCheckout.open(options).then((data) => {
      var a = data.razorpay_payment_id
      this.props.navigation.navigate('Thankyou')
    //  this.capture(a,b,id);



  }).catch((error) => {
      // handle failure
     // this.myPayments(s,error.description,'')

  });
  RazorpayCheckout.onExternalWalletSelection(data => {



  });


}
renderItem2=({item}) => {
return(

<>
{ item.payment_status== 'Free' && (
<TouchableOpacity
onPress={()=>this.navigate(item.no_of_week,item.id)}>
 <ImageBackground source={{uri:item.image}}
  style={{width:220,height:120}}>

  <View style={{flexDirection:'row',width:'82%',marginLeft:'9%',marginTop:17,alignItems:'center',justifyContent:'space-between'}}>

  <Button
    style={{fontSize: 10, color: '#242B37',fontFamily:'Exo2-Medium'}}
    containerStyle={{width:76,height:23,borderRadius:3,backgroundColor:'white',justifyContent:'center'}}>
    {item.package_type}
  </Button>



  </View>

  <Text style={{fontFamily:17,fontFamily:'Exo2-Medium',color:'white',marginTop:26,marginLeft:'9%',width:'75%'}}>{item.package_name}</Text>
 </ImageBackground>

</TouchableOpacity>

)}

{ item.payment_status== 'Paid' && (
<TouchableOpacity
 onPress={()=>this.access(item)}>
 <ImageBackground source={{uri:item.image}}
  style={{width:220,height:120}}>

  <View style={{flexDirection:'row',width:'82%',marginLeft:'9%',marginTop:17,alignItems:'center',justifyContent:'space-between'}}>

  <Button
    style={{fontSize: 10, color: '#242B37',fontFamily:'Exo2-Medium'}}
    containerStyle={{width:76,height:23,borderRadius:3,backgroundColor:'white',justifyContent:'center'}}>
    {item.package_type}
  </Button>


  <Image source={require('./memlock.png')}
   style={{width:16,height:20}}/>



  </View>

  <Text style={{fontFamily:17,fontFamily:'Exo2-Medium',color:'white',marginTop:26,marginLeft:'9%',width:'75%'}}>{item.package_name}</Text>
 </ImageBackground>

</TouchableOpacity>

)}
 </>

)
}
componentDidMount() {





     this._unsubscribe = this.props.navigation.addListener('focus', () => {
    this.showLoading()
       fetch('http://pumpfit.in/admin/webservices/get_package_intro', {
         method: 'POST',
        headers: {
            'x-api-key': 'c3a3cf7c211b7c07b2495d8aef9761fc',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user_id: GLOBAL.user_id,
            package_id:  GLOBAL.package_id
        }),
    }).then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson)

              //   alert(JSON.stringify(responseJson))
              this.hideLoading()
            if (responseJson.status == true) {
              if (responseJson.package_intro.length == 0){
                  this.setState({mystaus:false})
              }else{
                this.setState({FlatListItems: responseJson.package_intro })
                this.setState({image:responseJson.package_intro[0]})
                this.setState({mystaus:true})
              }

            }
            else{
              //  alert('Invalid Credentials!')
            }
        })
        .catch((error) => {
            console.error(error);
        });
      }
    )
}

  _keyExtractor2=(item, index)=>item.key;

// renderItem3=({item}) => {
// return(

// <TouchableOpacity>
//  <ImageBackground source={item.add3}
//   style={{width:220,height:120}}>

//   <View style={{flexDirection:'row',width:'82%',marginLeft:'9%',marginTop:17,alignItems:'center',justifyContent:'space-between'}}>

//   <Button
//     style={{fontSize: 10, color: '#242B37',fontFamily:'Exo2-Medium'}}
//     containerStyle={{width:75,height:23,borderRadius:3,backgroundColor:'white',justifyContent:'center'}}>
//     {item.add}
//   </Button>

//   <Image source={ item.add4}
//    style={{width:16,height:20}}/>
//   </View>

//   <Text style={{fontFamily:17,fontFamily:'Exo2-Medium',color:'white',marginTop:26,marginLeft:'9%',width:'75%'}}>No Equipment Home Beginner</Text>
//  </ImageBackground>

// </TouchableOpacity>


// )
// }

// _keyExtractor3=(item, index)=>item.key;

// renderItem4=({item}) => {
// return(

// <TouchableOpacity>
//  <ImageBackground source={item.add3}
//   style={{width:220,height:120}}>

//   <View style={{flexDirection:'row',width:'82%',marginLeft:'9%',marginTop:17,alignItems:'center',justifyContent:'space-between'}}>

//   <Button
//     style={{fontSize: 10, color: '#242B37',fontFamily:'Exo2-Medium'}}
//     containerStyle={{width:75,height:23,borderRadius:3,backgroundColor:'white',justifyContent:'center'}}>
//     {item.add}
//   </Button>

//   <Image source={ item.add4}
//    style={{width:16,height:20}}/>
//   </View>

//   <Text style={{fontFamily:17,fontFamily:'Exo2-Medium',color:'white',marginTop:26,marginLeft:'9%',width:'75%'}}>No Equipment Home Beginner</Text>
//  </ImageBackground>

// </TouchableOpacity>


// )
// }

// _keyExtractor4=(item, index)=>item.key;

  render() {
    return(
      <SafeAreaView style={styles.AndroidSafeArea}>
                      <StatusBar backgroundColor="#639ced" barStyle="light-content" />



{this.state.mystaus == true && (



           <KeyboardAwareScrollView style={{backgroundColor:'white'}}>

           <View style={{width:'100%',height:300,backgroundColor:'white'}}>

  <VideoPlayer
      source={{ uri:this.state.image.video }}
      navigator={ this.props.navigator }
      repeat = {true}
      onBack={()=>this.props.navigation.goBack()}
  />


           </View>
            <Text style={{fontSize:18,fontFamily:'Exo2-Regular',color:'#161718',margin:10}}>Amount : Rs {GLOBAL.getPack.amount}</Text>
           <View style = {{margin:5}}>


           <HTML style = {{margin:10}} html={this.state.image.title} imagesMaxWidth={Dimensions.get('window').width} />

{this.state.image.payment_status == "Paid" && (
  <Button onPress={()=> this.access(GLOBAL.getPack)}
   style={{fontSize:17,paddingTop:10,marginTop:10,backgroundColor:'black',fontFamily:'Exo2-Medium',color:'white',width:'90%',alignSelf:'center',height:40}}>
   PAY
  </Button>
)}
{this.state.image.payment_status != "Paid" && (
  <Button onPress={()=> this.props.navigation.navigate('WeekScreen')}
   style={{fontSize:17,marginTop:10,paddingTop:10,backgroundColor:'black',fontFamily:'Exo2-Medium',color:'white',width:'90%',alignSelf:'center',height:40}}>
   PROCEED
  </Button>
)}

           </View>






<Text style = {{height:10}}>
</Text>

           </KeyboardAwareScrollView>
)}
           {this.state.mystaus == false && (
             <Image style={{height:'100%',width:'100%',marginTop:0,resizeMode:'contain',borderRadius:20,backgroundColor:'white'}}
              source={require('./download.png')} />
           )}
         </SafeAreaView>
    );
  }
}

export default NewSubscription;
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
