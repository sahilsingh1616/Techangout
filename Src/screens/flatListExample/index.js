import { useRef, useState } from 'react'
import { StyleSheet, Text, View,Image, TextInput, TouchableOpacity,ToastAndroid } from 'react-native'
import React from 'react'
 
const FlatListExample = () => {

  const handleTextChange = ( ) => {
    ToastAndroid.show('Please fill all details', ToastAndroid.SHORT);
}

const ref=useRef();
  return (
    <View style={styles.maincontainer}>
      <View style={styles.imgheight}>
    <Image source={require('../../../assets/images/old.png')} style={styles.imgwidth} />


      </View>
      <View style={styles.txtheight}>
      <Text style={styles.txt}>Instagram </Text>
      </View>
         

        <View style={{marginTop:'15%',alignItems:'center'}}>
        <TextInput onSubmitEditing={()=>ref.current.focus() }  placeholderTextColor='white'  placeholder='Username' style={{width:'80%',height:50,borderRadius:10,backgroundColor:'#d4779c',paddingLeft:10,fontSize:20,elevation:20}} maxLength={20}></TextInput>
           
        </View>
        <View style={{marginTop:'6%',alignItems:'center'}}>
        <TextInput ref={ref}  secureTextEntry={true} placeholderTextColor='white'  placeholder='Password' style={{width:'80%',height:50,borderRadius:10,backgroundColor:'#d4779c',paddingLeft:10,fontSize:20,elevation:20}} maxLength={10}></TextInput>
           
        </View>
        <View style={{marginTop:'6%',alignItems:'center'}}>
         <TouchableOpacity  onPress={handleTextChange} style={{borderWidth:2,borderColor:'white',width:'80%',height:60,backgroundColor:'#d4779c',opacity:0.9,borderRadius:7}}> 
        <Text style={{fontSize:28,fontWeight:'300',color:'white',textAlign:'center',marginTop:9}}>Log In </Text>   
             </TouchableOpacity> 
        </View>
        <View style={{flexDirection:'row',marginTop:'6%',alignSelf:'center'}}>
        <Text style={{fontSize:15,color:'white'}}>Forget your login details?</Text>
        <Text style={{fontSize:15,color:'white',fontWeight:'700'}}>  Get Help In Signing in.</Text>
        </View>
        <View style={{flexDirection:'row'}}>
        <View style={{marginTop:'6%',width:'33%',height:0.9,backgroundColor:'white',marginLeft:'12%',opacity:0.6}}>
        </View>
       
        <Text style={{fontSize:21,color:'white',marginLeft:'3%',marginTop:11}}>OR</Text>
        <View style={{marginTop:'6%',width:'33%',height:0.9,backgroundColor:'white',marginLeft:10,opacity:0.6}}>
           </View>
        </View>
        <View style={{flexDirection:'row',marginTop:'6%',alignSelf:'center'}}>
        <Image source={require('../../../assets/images/tint.png')} style={{width:40,height:40,tintColor:'white'}} />
        <Text style={{fontSize:21,color:'white',fontWeight:'bold',marginLeft:'3%',marginTop:10}}>Log in with Facebook</Text>

        </View>
    </View>
  )
}

export default FlatListExample
 
const styles = StyleSheet.create({
  maincontainer:{
    flex:1,
    backgroundColor:'#bf1676'
  },
  imgheight:{
    alignItems:'center',
    marginTop:'20%'
  },
  imgwidth:{
    height:160,
    width:160,
    marginLeft:30
  },
  txtheight:{
    marginTop:'10%',
    alignItems:'center'
  },
  txt:{
    fontSize:43,
    color:'white',
    fontWeight:'bold'
  }
})