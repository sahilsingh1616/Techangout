import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const FirstPage = () => {
  return (
    <View style={styles.container}>

    <View style={styles.viewcontainer}>
    <Text style={styles.txt}>CYBORO</Text>
      
      </View>

      <View style={{marginLeft:'10%'}}>
      <View style={styles.imgdirection}>
      <Text style={styles.txt1}>Cyber Protection For Everyone</Text>
  
      <Image source={require('../../../assets/images/hp.png')} style={styles.img} />

      </View>
      </View>
      <View style={styles.txttop}>
      <Text style={styles.txt2}>Protect{'\n'}your digital{'\n'}identity*</Text>

      </View>
      <ScrollView>
      <TouchableOpacity>
         <View style={styles.botmtop}>
     
      <View style={styles.botmbackground}>
      <Text  style={styles.txt3}>Start your free trail</Text>

</View>


      </View>
      </TouchableOpacity>

     
    

      <View style={{marginTop:20}}>
      <View style={{flexDirection:'row'}}>
      <Image source={require('../../../assets/images/triangle.png')} style={[styles.img1,{ transform: [{ rotate: '-45deg'}]}]} />
      <View style={{backgroundColor:'aqua',width:180,height:180,marginTop:'19%',borderRadius:100}}>

</View>
     
 <Image source={require('../../../assets/images/witness.png')} style={[styles.img2,{ transform: [{ rotate: '45deg'}]}]} />
</View>
<View style={{flexDirection:'row'}}>
 <Image source={require('../../../assets/images/shape.png')} style={[styles.img3,{transform:[{rotate:'95deg'}]}]} />
       <Image source={require('../../../assets/images/square.png')} style={[styles.img4,{transform:[{ rotate:'45deg'}]}]} />
</View>
</View>
  




</ScrollView>
    </View>

  )
}

export default FirstPage

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f5f5f5'
    },
    viewcontainer:{
        marginTop:'10%',
        marginLeft:'10%'
    },
    txt:{
        fontSize:33,
        color:'black',
        fontWeight:'400'
    },

    txt1:{
        fontSize:20,
        fontWeight:'600',
        opacity:0.5,
        color:'black',
        marginTop:'16%'
    },
    txt2:{
        fontSize:64,
        color:'black',
        fontWeight:'400'
    },
    txt3:{
        fontSize:19,
        color:'black',
        textAlign:'center',
        fontWeight:'600',
        marginTop:10,
        opacity:0.8
    },
    imgdirection:{
        flexDirection:'row'
    },
    img:{
        height:100,
        width:100,
        marginLeft:10,
        marginTop:'11%'
     
    },
    img1:{
        height:100,
        width:100,
        marginLeft:10,
    },
    img2:{
        height:100,
        width:100,
       
    },
    img3:{
        height:100,
        width:100,
        marginLeft:10,
    },
    img4:{
        height:100,
        width:100,
        marginLeft:'40%',
        marginTop:6,
   
    },
    txttop:{
        marginTop:'1%',
        marginLeft:'10%',
    
    },
    botmtop:{
        marginTop:'10%',
        alignItems:'center',
    },
    botmbackground:{
        width:'70%',
        height:50,
        borderWidth:1,
        backgroundColor:'white'
    }
})