import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'

const UserefExample = () => {
const [number,setNumber] = useState("");
const [text,setText]= useState("");
const [val,setVal] =useState("");


const handleChange=()=>{
    alert("please fill all field")
}

const printAlrt =()=>{
  if(number==[null] && text==[null]){

  }
  alert("your value will be printed")
}

const PrintFun=()=>{
  setVal(number)
}

 const ref=useRef();

  return (
    <View  style={{flex:1,backgroundColor:'aqua',justifyContent:'center'}}>

    <View style={{alignItems:'center'}}>
    <Text style={{fontSize:11,color:'black'}}>{val}</Text>
    <TextInput onSubmitEditing={()=>[ref.current.focus()]} placeholderTextColor='black' placeholder='Email' style={{width:'80%',height:50,backgroundColor:'white',borderRadius:20,paddingLeft:10,color:'black'}} onChangeText={setNumber}/>
  


<TextInput ref={ref} placeholderTextColor='black' placeholder='Password' style={{width:'80%',height:50,backgroundColor:'white',borderRadius:20,paddingLeft:10,marginTop:20,color:'black'}} onChangeText={setText}/>



    </View>

    <View style={{marginTop:20,marginLeft:40}}>
     <TouchableOpacity onPress={PrintFun} style={{width:'88%',height:50,backgroundColor:'black',borderRadius:20}}>
     <Text style={{fontSize:22,color:'white',textAlign:'center',paddingTop:10,fontWeight:'bold'}}>LOGIN</Text>

     </TouchableOpacity>
</View>
    
   
    </View>
  )
}

export default UserefExample;

const styles = StyleSheet.create({})