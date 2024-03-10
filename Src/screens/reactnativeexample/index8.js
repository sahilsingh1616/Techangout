import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const AsyncExample = () => {
const [number,setNumber] = useState("");
const [text,setText]= useState("");

const Visual=async() =>{
    await AsyncStorage.setItem ("email",number)
    await AsyncStorage.setItem("password",text)
}


const handlestorage=async() =>{
    const response=await AsyncStorage.getItem("email")
    const response1=await AsyncStorage.getItem("password")
    console.log(response)
    console.log(response1)
}


useEffect(()=>{
    handlestorage
},[])

const handleChange=()=>{
    alert("please fill all field")
}

 const ref=useRef();

  return (
    <View  style={{flex:1,backgroundColor:'aqua',justifyContent:'center'}}>

    <View style={{alignItems:'center'}}>
    <TextInput onSubmitEditing={()=>[ref.current.focus()]} placeholderTextColor='black' placeholder='Email' style={{width:'80%',height:50,backgroundColor:'white',borderRadius:20,paddingLeft:10,color:'black'}} onChangeText={setNumber}/>
  


<TextInput ref={ref} placeholderTextColor='black' placeholder='Password' style={{width:'80%',height:50,backgroundColor:'white',borderRadius:20,paddingLeft:10,marginTop:20,color:'black'}} onChangeText={setText}/>



    </View>

    <View style={{marginTop:20,marginLeft:40}}>
     <TouchableOpacity onPress={()=>[Visual(),handlestorage()]} style={{width:'88%',height:50,backgroundColor:'black',borderRadius:20}}>
     <Text style={{fontSize:22,color:'white',textAlign:'center',paddingTop:10,fontWeight:'bold'}}>LOGIN</Text>

     </TouchableOpacity>
</View>
    
   
    </View>
  )
}

export default AsyncExample;

const styles = StyleSheet.create({})