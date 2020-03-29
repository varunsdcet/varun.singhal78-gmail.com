import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
    Alert,
    FlatList,
    Dimensions,
    TouchableOpacity,
    ActivityIndicator,

    AsyncStorage
} from 'react-native';
const GLOBAL = require('./Global');
import {NavigationActions,StackActions} from 'react-navigation';
const window = Dimensions.get('window');
import Button from 'react-native-button';



import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default class Thankyou extends Component {
    state = {
        name :'',
    };

  static navigationOptions = ({navigation}) => {
    return {
      header: () => null,
    };
  };



    componentDidMount(){


    }
    _handlePress() {

    this.props.navigation.goBack()
       // this.props
       // .navigation
       // .dispatch(StackActions.reset({
       //   index: 0,
       //   actions: [
       //     NavigationActions.navigate({
       //       routeName: 'Tab',
       //       params: { someParams: 'parameters goes here...' },
       //     }),
       //   ],
       // }))
    }


    render() {

        return (

                <View style={styles.container}>



                    <Image style = {{width :300 ,height: 140,alignSelf:'center',marginTop:'30%',resizeMode: 'contain'}}
                           source={require('./thankyou.png')}/>


                    <Text style={{marginLeft : 5,marginTop:10,fontSize : 40,color :'black', height:'auto',fontFamily:'Exo2-SemiBold',alignSelf:'center'}}>

                        THANK YOU
                    </Text>

                    <Text style={{marginLeft : 5,marginTop:10,fontSize : 20,color :'black', height:'auto',fontFamily:'Exo2-SemiBold',alignSelf:'center'}}>

                       FOR YOUR PURCHASE
                    </Text>








                    <Button
                        style={{padding:4,marginTop:100,fontSize: 20, color: 'white',backgroundColor:'black',marginLeft:'5%',width:'90%',height:40,fontFamily:'Exo2-SemiBold',borderRadius:4}}
                        styleDisabled={{color: 'red'}}
                        onPress={() => this._handlePress()}>
                        BACK
                    </Button>





                </View>

        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
    },
    container: {

        backgroundColor :'#f1f1f1',
        height: window.height,
    },
    loading: {
        position: 'absolute',
        left: window.width/2 - 30,

        top: window.height/2,

        opacity: 0.5,

        justifyContent: 'center',
        alignItems: 'center'
    },
    slide1: {

        marginLeft : 50,

        width: window.width - 50,
        height:300,
        resizeMode:'contain',
        marginTop : window.height/2 - 200


    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    account :{
        marginTop : 20,
        textAlign : 'center',
        fontSize: 17,
        justifyContent:'center',
        color : '#262628',
        fontFamily:'Poppins-Regular',


    } ,
    createaccount :{
        marginLeft : 5,
        fontSize: 17,
        textAlign : 'center',
        marginTop : 30,
        color : '#0592CC',




    } ,

    createaccounts :{
        marginLeft : 5,
        fontSize: 17,
        textAlign : 'center',
        marginTop : 30,
        color : '#0592CC',
        textDecorationLine: 'underline',



    } ,
})
