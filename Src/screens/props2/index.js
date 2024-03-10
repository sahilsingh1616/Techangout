import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Props2 = ({count}) => {
  return (
    <View style={{marginTop:30,alignSelf:'center'}}>
      <Text style={{width:200,height:90,backgroundColor:'white',color:'black'}}>{count}</Text>
    </View>
  )
}

export default Props2

const styles = StyleSheet.create({})