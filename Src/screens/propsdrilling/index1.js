import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PropsDrillingC from './index2'

const PropsDrillingB = () => {
  return (
    <View style={{marginTop:50}}>
    <Text style={{fontSize:21,color:'black'}}>Component B</Text>
     <PropsDrillingC />
    </View>
  )
}

export default PropsDrillingB

const styles = StyleSheet.create({})