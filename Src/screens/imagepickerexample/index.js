import { StyleSheet, Text, View,Dimensions,TouchableOpacity,Image } from 'react-native'
import React,{useState} from 'react'
import { useSafeAreaFrame } from 'react-native-safe-area-context';
const { width, height } = Dimensions.get('screen');
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const Logo = require('../../../assets/images/today.png');
const ImagePickkerExample = () => {

    const [image,setImage]=useState('');
    const [showimage,setShowImage]=useState([]);
   

    const OpenImagePicker = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
        };
        
        launchImageLibrary(options, (response) => {
            // console.log('Response = ', response);
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('Image picker error: ', response.error);
            } else {
                let imageUri = response.uri || response.assets?.[0]?.uri;
                // setSelectedImage(imageUri);

                setImage(imageUri);
                showimage.unshift(imageUri)
               
            }
        });
    };
  return (
    <View style={{backgroundColor:'aqua',height:height,borderWidth:1}}>
<View style={{flexDirection:'row'}}>
    <TouchableOpacity onPress={()=>OpenImagePicker()}>
    <View style={{backgroundColor:'white',width:130,height:130,marginTop:"10%",borderRadius:10,marginLeft:"4%",borderWidth:1,borderStyle:'dashed'}}>

    {
        image==''? <Image source={Logo}  style={{width:60,height:60,alignSelf:'center',marginTop:30}}/> :<Image source={{uri:image}} style={{width:60,height:60,alignSelf:'center',marginTop:'20%'}} />
    }

    </View>
    </TouchableOpacity>

    <View style={{flexDirection:'row',flexWrap:'wrap',borderWidth:1}}>

    {
        showimage.map((item)=>{
            return(
                <View  key={item} style={{marginLeft:10,margin:5}}>

                <Image source={{uri:item}} style={{width:100,height:100}}/>
                </View>
            )
        })
    }
    </View>
   
    </View> 
    </View>

  )
}

export default ImagePickkerExample

const styles = StyleSheet.create({})