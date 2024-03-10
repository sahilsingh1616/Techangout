import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
const  Sum =(props)=>{
    return(
       
        <View style={{flex:1,marginTop:'10%',alignSelf:'center'}}> 
          
        <TouchableOpacity style={{backgroundColor:'orange',width:300,height:50,alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontSize:22,color:'white',textAlign:'center'}}>I Best Friend name {props.name}</Text>
            </TouchableOpacity>
        
           
        </View>

    );
};
const ReactNativeExample1 = () => {
  return (
    <ScrollView>
    <View>
    <Sum name="Abhi"/>
    <Sum name="Manav"/>
    <Sum name="Rajan"/>
    <Sum name="Rohit"/>
    <Sum name="Kirat"/>
    <Sum name="Ankit"/>
    <Sum name="Harsh"/>
    <Sum name="Abhi"/>
    <Sum name="Manav"/>
    <Sum name="Rajan"/>
    <Sum name="Rohit"/>
    <Sum name="Kirat"/>
    <Sum name="Ankit"/>
    <Sum name="Harsh"/>
    </View>
    </ScrollView>
  )
}

export default ReactNativeExample1

const styles = StyleSheet.create({})