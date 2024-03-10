import { StyleSheet, Text, View,Dimensions,TouchableOpacity,Image,ScrollView,FlatList } from 'react-native'
import React,{useState} from 'react'
import { useSafeAreaFrame } from 'react-native-safe-area-context';
const { width, height } = Dimensions.get('screen');
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const Logo = require('../../../assets/images/today.png');

const dummyImages = [
    {
        restaurantImage: 'https://ff-prod.s3-us-east-2.amazonaws.com/7cb19bc0ab674e3a86e3b3813df5f1b2'
    },
    {
        restaurantImage: 'https://ff-prod.s3-us-east-2.amazonaws.com/7cb19bc0ab674e3a86e3b3813df5f1b2'
    },
    {
        restaurantImage: 'https://ff-prod.s3-us-east-2.amazonaws.com/7cb19bc0ab674e3a86e3b3813df5f1b2'
    },
    {
        restaurantImage: 'https://ff-prod.s3-us-east-2.amazonaws.com/7cb19bc0ab674e3a86e3b3813df5f1b2'
    },
    {
        restaurantImage: 'https://ff-prod.s3-us-east-2.amazonaws.com/7cb19bc0ab674e3a86e3b3813df5f1b2'
    },
    {
        restaurantImage: 'https://ff-prod.s3-us-east-2.amazonaws.com/7cb19bc0ab674e3a86e3b3813df5f1b2'
    },
    {
        restaurantImage: 'https://ff-prod.s3-us-east-2.amazonaws.com/7cb19bc0ab674e3a86e3b3813df5f1b2'
    }, {
        restaurantImage: 'https://ff-prod.s3-us-east-2.amazonaws.com/7cb19bc0ab674e3a86e3b3813df5f1b2'
    },
    {
        restaurantImage: 'https://ff-prod.s3-us-east-2.amazonaws.com/7cb19bc0ab674e3a86e3b3813df5f1b2'
    },
    {
        restaurantImage: 'https://ff-prod.s3-us-east-2.amazonaws.com/7cb19bc0ab674e3a86e3b3813df5f1b2'
    },
    {
        restaurantImage: 'https://ff-prod.s3-us-east-2.amazonaws.com/7cb19bc0ab674e3a86e3b3813df5f1b2'
    },
    {
        restaurantImage: 'https://ff-prod.s3-us-east-2.amazonaws.com/7cb19bc0ab674e3a86e3b3813df5f1b2'
    }
]


const FlatListImageExample = () => {

   

    const [image,setImage]=useState('');
    const [showimage,setShowImage]=useState(dummyImages);
   

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
                showimage.unshift({restaurantImage:imageUri})
               
            }
        });
    };

    const Selection=  ({ item, index })=> {
        return (
            <View style={{ flexDirection: 'row'}}>
                {index == 0 ? <TouchableOpacity style={{ height: 100, width: 100, marginTop: 40, backgroundColor: 'yellow', marginRight: 20 }} onPress={OpenImagePicker}>
                </TouchableOpacity> :
                    <Image source={{ uri: item.restaurantImage }} style={{height: 100,width: 100,marginTop: 40,margin:7}} />
                }
            </View>
        )
    }
  return (

    <ScrollView>

    <View style={{marginLeft:20}}>
    
{/* <View style={{flexDirection:'row'}}>
    <TouchableOpacity onPress={()=>OpenImagePicker()}>
    <View style={{backgroundColor:'white',width:130,height:130,marginTop:"10%",borderRadius:10,marginLeft:"4%",borderWidth:1,borderStyle:'dashed'}}>

    {
        image==''? <Image source={Logo}  style={{width:60,height:60,alignSelf:'center',marginTop:30}}/> :<Image source={{uri:image}} style={{width:60,height:60,alignSelf:'center',marginTop:'20%'}} />
    }

    </View>
    </TouchableOpacity>
    </View> */}

   
    {/* {
        showimage.map((item)=>{
            return(
                <View  key={item} style={{marginLeft:10,margin:5}}>

                <Image source={{uri:item}} style={{width:100,height:100}}/>
                </View>
            )
        })
    } */}

    <FlatList
                    data={showimage}
                    renderItem={Selection}
                    numColumns={3}
                    scrollEnabled={false}
                />
    
   
 
    </View>
    </ScrollView>

  )
}

export default FlatListImageExample

const styles = StyleSheet.create({})