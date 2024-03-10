import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const ImageExample = () => {

  const [ImageA, setImageA] = useState(true);
  const [ImageB, setImageB] = useState(true);
  const [ImageC, setImageC] = useState(true);

  // const Centeral = () => {
  //   if (ImageA == true) {

  //   }
  //   else {
  //     setImageA(!forA)
  //   }
  // }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'orange' }}>
      <View style={{ flexDirection: 'row' }}>

        <View style={{ backgroundColor: 'white', width: 90, height: 90, borderRadius: 50 }}>
     

      
        
          <TouchableOpacity onPress={()=>[setImageA(!ImageA),setImageB(true),setImageC(true)]} >
          <Text style={{ fontSize: 20, color: 'black', marginTop: 30, marginLeft: 25 }}>Image1</Text>
          </TouchableOpacity>
          
        </View>


        <View style={{ backgroundColor: 'white', width: 90, height: 90, borderRadius: 50, marginLeft: 20 }}>

 {

  ImageB==true &&           <Image source={require('../../../assets/images/inde.png')} style={{ width: 60, height: 60, alignSelf: 'center', marginTop: 15 }} />
 }

 <TouchableOpacity onPress={()=>[setImageB(!ImageB),setImageC(true),setImageA(true)]} >
            <Text style={{ fontSize: 20, color: 'black', marginTop: 30, marginLeft: 25 }}>Image2</Text>
          </TouchableOpacity>
        </View>




        <View style={{ backgroundColor: 'white', width: 90, height: 90, borderRadius: 50, marginLeft: 20 }}>

        {
          ImageC== true &&     <Image source={require('../../../assets/images/woman.png')} style={{ width: 60, height: 60, alignSelf: 'center', marginTop: 15 }} />

        }
          <TouchableOpacity onPress={()=>[setImageC(!ImageC),setImageB(true),setImageA(true)]} >

            <Text style={{ fontSize: 20, color: 'black', marginTop: 30, marginLeft: 25 }}>Image3</Text>
          </TouchableOpacity>
        </View>

      </View>




    </View>

  )
}

export default ImageExample;


const styles = StyleSheet.create({})