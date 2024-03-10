import { StyleSheet, Text, TextInput, View,Image, TouchableOpacity, ScrollView, Button } from 'react-native'
import React from 'react'

const Favourite = () => {
  return (
    <ScrollView>
    <View style={styles.container}>
    <View style={{marginTop:30,marginLeft:10}}>
                <Image source={require('../../../assets/images/symbol.png')} style={{ width:50, height: 50 }} />

      </View>
      <View style={{marginTop:'10%'}}>
        <Text style={styles.txt}>Choose your{'\n'}Favourite Food</Text>
      </View>
      <View style={{marginTop:50,alignItems:'center'}}>
      <Image source={require('../../../assets/images/rice.png')} style={{ width:200, height:200 }} />

      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.container1}>
      <View style={{width:150,height:200,backgroundColor:'white',marginLeft:30,borderRadius:30}}>
      <Image source={require('../../../assets/images/online.png')} style={{ width:100, height:80,marginLeft:16,marginTop:10 }} />
       <Text style={styles.txt1}>Get Delivery at{'\n'} your DoorStep</Text>
        <TouchableOpacity>
        <Text style={{fontSize:21,color:'black',marginTop:20,textAlign:'center'}}>$130</Text>

        </TouchableOpacity>
      </View>
      <View style={{width:150,height:200,backgroundColor:'white',marginLeft:30,borderRadius:30}}>
      <Image source={require('../../../assets/images/review.png')} style={{ width:100, height:80,marginLeft:30,marginTop:10 }} />
       <Text style={styles.txt1}>We have 5000+{'\n'} Reviews</Text>
        <TouchableOpacity>
        <Text style={{fontSize:21,color:'black',marginTop:20,textAlign:'center'}}>check It</Text>

        </TouchableOpacity>
      </View>
      <View style={{width:150,height:200,backgroundColor:'white',marginLeft:30,borderRadius:30}}>
      <Image source={require('../../../assets/images/review.png')} style={{ width:100, height:80,marginLeft:30,marginTop:10 }} />
       <Text style={styles.txt1}>We have 5000+{'\n'} Reviews</Text>
        <TouchableOpacity>
        <Text style={{fontSize:21,color:'black',marginTop:20,textAlign:'center'}}>check It</Text>

        </TouchableOpacity>
      
      </View>
     
      </View>
      
      </ScrollView>
      <TouchableOpacity>
      <View style={{marginTop:20,marginLeft:40}}>
      <Text style={{fontSize:22,color:'black',marginLeft:50,fontWeight:'800'}}>See all details on next page</Text>
     
    </View>
    </TouchableOpacity>
    <View style={{marginTop:20}}>
    <TouchableOpacity style={{width:'70%',height:40,marginLeft:60,backgroundColor:'lightgreen',borderRadius:10,alignItems:"center"}}><Text style={{fontSize:22,color:'white',fontWeight:'bold',marginTop:4}}>Buy</Text></TouchableOpacity>

    </View>
    <View style={{width:150,height:200,backgroundColor:'white',marginLeft:30,borderRadius:30,marginTop:30}}>
      <Image source={require('../../../assets/images/review.png')} style={{ width:100, height:80,marginLeft:30,marginTop:10 }} />
       <Text style={styles.txt1}>We have 5000+{'\n'} Reviews</Text>
        <TouchableOpacity>
        <Text style={{fontSize:21,color:'black',marginTop:20,textAlign:'center'}}>check It</Text>

        </TouchableOpacity>
      
      </View>
    </View>
    </ScrollView>
  )
}

export default Favourite

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'yellow'
  },
  container1:{
   
    flexDirection:'row',
     marginTop:20,
    
  },
  txt:{
    marginLeft:36,
    fontSize:44,
    color:'black',
    fontWeight:'bold',
    
  },
  txt1:{
    fontSize:17,
    color:'black',
    marginTop:12,
    fontWeight:'600',
    textAlign:'center',
    opacity:0.6
  }
})