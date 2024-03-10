
import { useState } from 'react';
import { ActivityIndicator ,StyleSheet, StatusBar,Text,Image, TouchableOpacity, View,Alert, ImageBackground } from 'react-native'


const ReactNativeExample2 = () => {
    const [loading, setLoading] = useState(false);

    const startLoading = () => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      };
  return (
   
 <ImageBackground source={require('../../../assets/images/help.png')} style={{width:'80%',height:200,alignSelf:'center'}}>
                 <Image source={require('../../../assets/images/bts.png')} style={styles.img} />

 <Text style={{fontSize:33,color:'white'}}>Sahil</Text>

 </ImageBackground>
  )
}

export default ReactNativeExample2

const styles = StyleSheet.create({})