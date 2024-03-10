import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const ArrayExample = () => {
  const [myarr, setArr] = useState([]);
  const [value, setValue] = useState('');

  const ArrPush = () => {
    myarr.push(value)
    console.log(myarr)
  }
  return (

    <View style={{ flex: 1, backgroundColor: 'lightgreen', justifyContent: 'center', alignItems: 'center' }}>

      <TextInput placeholderTextColor='grey' placeholder='Email ' style={{ width: '80%', height: 50, backgroundColor: 'white', borderRadius: 10, padding: 10, color: 'black' }} onChangeText={(text) => setValue(text)} />

      <TouchableOpacity onPress={() => [ArrPush(), setValue(value)]} style={{ width: '30%', height: 40, backgroundColor: 'aqua', marginTop: 10, borderRadius: 10 }}>
        <Text style={{ fontSize: 19, color: 'black', fontWeight: '700', textAlign: 'center', paddingTop: 10 }}>Submit</Text>

      </TouchableOpacity>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 20 }}>
        {myarr.map((item) => {
          return (
            <View style={{ backgroundColor: '#e2f2f9', margin: 5, borderRadius: 10, padding: 5 }}>
              <Text style={{ fontSize: 18, color: '#0b2f47' }}>{item}</Text>
            </View>
          )
        })}
      </View>
    </View>
  )
}

export default ArrayExample

const styles = StyleSheet.create({})