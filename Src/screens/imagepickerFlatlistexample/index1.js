import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import { useState } from 'react';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import React from 'react'
const im1 = require('../../assets/images/aadmi2.png');

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
    }
]


const AnotherExample = () => {
    const [filePath, setfilePath] = useState();
    const [selected, setSelected] = useState();
    const [imgArr, setImage] = useState(dummyImages);
    const openImagePicker = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
        };

        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('Image picker error: ', response.error);
            } else {
                let imageUri = response.uri || response.assets?.[0]?.uri;
                setfilePath(imageUri);
                // setSelected(filePath);
                imgArr.unshift({ restaurantImage: imageUri });
                // console.log(imgArr);

            }
        });
    };
    function renderfnc({ item, index }) {
        return (
            <View style={{ flexDirection: 'row', flex: 1 }}>
                {index == 0 ? <TouchableOpacity style={{ height: 100, width: 100, marginTop: 40, backgroundColor: 'gray', marginRight: 20 }} onPress={openImagePicker}>
                </TouchableOpacity> :
                    <Image source={{ uri: item.restaurantImage }} style={styles.img1} />
                }
            </View>
        )
    }
    return (

        <ScrollView>

            <View style={{marginLeft:20}}>



                {/* <TouchableOpacity style={{ height: 100, width: 100, marginTop: 40, backgroundColor: 'gray', marginRight: 20 }} onPress={openImagePicker}>
                </TouchableOpacity> */}
                {/* {
                    imgArr.map((item) => {
                        console.log(item)
                        return (

                            <View key={item} style={{marginTop:40, height:120, width:120,}}>
                                <Image source={{ uri: item }} style={styles.img1} />
                            </View>
                        )

                    })
                }   */}

                <FlatList
                    data={imgArr}
                    renderItem={renderfnc}
                    numColumns={3}
                    scrollEnabled={false}
                />

            </View>
        </ScrollView>
    )
}

export default AnotherExample

const styles = StyleSheet.create({
    img1: {
        height: 100,
        width: 100,
        marginTop: 40

    }
})