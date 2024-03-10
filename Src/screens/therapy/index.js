import { StyleSheet, Text, View,Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'


const Therapy = () => {
  return (
    <View style={styles.container}>

    <View style={styles.container1}>
     <Image source={require('../../../assets/images/hanright.png')} style={{height:160,width:160,marginLeft:30}} />
     <Image source={require('../../../assets/images/hanleft.png')} style={{height:160,width:160,marginRight:30}} />



    </View>
    <View style={{marginTop:50}}>
    <Text style={{fontSize:45,color:'black',fontWeight:'800',textAlign:'center'}}>Therapy & Care</Text>

    </View>
    <View style={{marginTop:20}}>
    <Text style={{fontSize:22,color:'black',textAlign:'center'}}>We help proffesional therapists{'\n'}and patients find each other</Text>

    </View>

    <View style={{marginTop:110,justifyContent:'center',alignItems:'center'}}>
    <TouchableOpacity>
    <View style={{backgroundColor:'white',borderRadius:20,borderColor:'white',width:200,height:70}}>
    <Text style={{fontSize:20,color:'black',textAlign:'center',paddingTop:20}}>Get Started</Text>

    </View>
    </TouchableOpacity>


    </View>
    <View style={{marginTop:20,flexDirection:'row',alignSelf:'center'}}>
    <Text style={{fontSize:20,color:'black'}}>Create a new account?</Text>
    <TouchableOpacity>
    <Text style={{fontSize:20,color:'blue'}}>  Login </Text>
     </TouchableOpacity>
    </View>

     
    </View>
  )
}

export default Therapy;

const styles = StyleSheet.create({
    
    container:{
        flex:1,
        backgroundColor:'yellow'
    },
    container1:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
   marginTop:80
    },
})