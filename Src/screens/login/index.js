import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useState } from 'react'
import React from 'react'


 
const Login = () => {
    const[state,setState ] =useState("yellow");

    const handleChangeColor=()=>{
        if(state=="yellow"){
            setState("white");
        }else{
            setState("yellow");
        }
    };

  return (
    <View style={styles.maincontainer}> 
    <View style={styles.Txtbutom}>
      <Text style={styles.txt}>Let's React Native Started</Text>
    </View>
    <View style={styles.txtinput}>
    <TextInput placeholderTextColor='black' placeholder='Email' style={styles.txtinputxt}></TextInput>

    </View>

    <View style={styles.txtinput1}>
    <TextInput placeholderTextColor='black' placeholder='Password' style={styles.txtinputxt}></TextInput>

    </View>
    <View style={styles.downcontainer}>
    <TouchableOpacity style={[styles.touchButn,{backgroundColor:state}]}  onPress={()=> handleChangeColor()}>
    <Text style={{fontSize:22,color:'black',fontWeight:'bold'}}>Next</Text>
    </TouchableOpacity>
    </View>
    </View>
  )
}

export default Login;

const styles = StyleSheet.create({
    maincontainer:{
        flex:1,
        backgroundColor:'aqua'
    },
    Txtbutom:{
        alignItems:'center',
        marginTop:'30%'
    },
    txt:{
        fontSize:32,
        color:'black',
        fontWeight:'500'
    },
    txtinput:{
        width:'80%',
        height:55,
        backgroundColor:'white',
        marginTop:50,
        marginLeft:40,
        borderRadius:10
    },
    txtinput1:{
        width:'80%',
        height:55,
        backgroundColor:'white',
        marginTop:20,
        marginLeft:40,
        borderRadius:10
    },
    txtinputxt:{
   fontSize:20,
   paddingLeft:10
 
    },
    downcontainer:{
        marginTop:30,
        alignItems:'center'
    },
    touchButn:{
        width:'50%',
        height:45,
        backgroundColor:'yellow',
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center'
    },

})