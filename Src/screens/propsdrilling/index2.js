import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import PropsDrillingD from './index3'
import { MyContext } from '../../../App'

const PropsDrillingC = ( ) => {
  const values=useContext(MyContext);
  return (
    <View style={{marginTop:50}}>

    <Text style={{fontSize:21,color:'black'}}>Component C{values}</Text>
     <PropsDrillingD />
    </View>
  )
}

export default PropsDrillingC

const styles = StyleSheet.create({})