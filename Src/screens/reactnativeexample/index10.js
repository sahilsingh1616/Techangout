import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const AsyncExample2 = () => {

    const [action,setAction]= useState("");
    const [state,setState]= useState("");

    const Selection=async()=>{
        await AsyncStorage.setItem ("Email",action);
        await AsyncStorage.setItem  ("Password",state)
    }

    const Deleteasyncstorage=async()=>{
        const response3=await AsyncStorage.removeItem("Email")
        const response4=await AsyncStorage.removeItem("Password")
    }

const handlestorage=async()=>{
 const response= await AsyncStorage.getItem("Email");
  const response1=await AsyncStorage.getItem("Password")
  console.log(response)
  console.log(response1)
}

useEffect(()=>{
    handlestorage();
},[])


 const ref=useRef();

  return (
    <View  style={{flex:1,backgroundColor:'aqua',justifyContent:'center'}}>

    <View style={{alignItems:'center'}}>
    <TextInput onSubmitEditing={()=>[ref.current.focus()]} placeholderTextColor='black' placeholder='Email' style={{width:'80%',height:50,backgroundColor:'white',borderRadius:20,paddingLeft:10,color:'black'}} onChangeText={setAction}/>
  


<TextInput ref={ref} placeholderTextColor='black' placeholder='Password' style={{width:'80%',height:50,backgroundColor:'white',borderRadius:20,paddingLeft:10,marginTop:20,color:'black'}} onChangeText={setState}/>



    </View>

    <View style={{marginTop:20,marginLeft:40}}>
     <TouchableOpacity onPress={()=>[Selection(),handlestorage()]} style={{width:'88%',height:50,backgroundColor:'black',borderRadius:20}}>
     <Text style={{fontSize:22,color:'white',textAlign:'center',paddingTop:10,fontWeight:'bold'}}>LOGIN</Text>

     </TouchableOpacity>
     <View style={{marginTop:10,marginLeft:7}}>
     <TouchableOpacity onPress={Deleteasyncstorage} style={{width:'90%',height:50,backgroundColor:'black',borderRadius:20}}>
     <Text style={{fontSize:22,color:'white',textAlign:'center',paddingTop:10,fontWeight:'bold'}}>Remove</Text>

     </TouchableOpacity>
</View>
    
   </View>
    </View>
  )
}

export default AsyncExample2;

const styles = StyleSheet.create({})