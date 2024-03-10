import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { MyContext } from '../../../App';


const PropsDrillingD = ( ) => {
const values=useContext(MyContext);
  return (
    <View style={{marginTop:50}}>
      <Text style={{fontSize:21,color:'black'}}>Component D</Text>
      <Text style={{fontSize:11,color:'black'}}>{values}</Text>
    </View>
  )
}

export default PropsDrillingD

const styles = StyleSheet.create({})