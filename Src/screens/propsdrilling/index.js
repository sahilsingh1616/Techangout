import { StyleSheet, Text, View } from 'react-native'
import React, { createContext } from 'react'
import PropsDrillingB from './index1'





const PropsDrillingA = () => {
  return (
    <View style={{}}>

    <Text style={{fontSize:21,color:'black'}}>Component A</Text>
   <PropsDrillingB value={'sahil'}/>


    </View>



  )
}

export default PropsDrillingA

const styles = StyleSheet.create({})