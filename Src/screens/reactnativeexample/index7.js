import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const ImageExample1 = () => {
    const [imageA, setImageA] = useState("true");
    const [imageB, setImageB] = useState("true");
    const [imageC, setImageC] = useState("true");
    

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

            <View style={{ flexDirection: 'row' }}>

                <View style={{ backgroundColor: 'white', width: 110, height: 110, borderRadius: 50, alignItems: "center" }}>
                    {
                        imageA == true && <Image source={require('../../../assets/images/wizard.png')} style={{ width: 90, height: 90 }} />
                    }

                    <TouchableOpacity onPress={() => [setImageA(!imageA), setImageB(true), setImageC(true)]}>
                        <Text style={{ fontSize: 19, color: 'white', marginTop: 40 }}>Image 1</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginLeft: 20, backgroundColor: 'white', width: 110, height: 110, borderRadius: 50, alignItems: "center" }}>

                    {
                        imageB == true && <Image source={require('../../../assets/images/text.png')} style={{ width: 90, height: 90,marginTop:10 }} />

                    }
                    <TouchableOpacity onPress={() => [setImageB(!imageB), setImageA(true), setImageC(true)]}>
                        <Text style={{ fontSize: 19, color: 'white', marginTop: 30 }}>Image 2</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ marginLeft: 20, backgroundColor: 'white', width: 110, height: 110, borderRadius: 50, alignItems: "center" }}>
                    
                    {
                        imageC ==true &&       <Image source={require('../../../assets/images/magician.png')} style={{ width: 90, height: 90 }} />

                    }
                    <TouchableOpacity onPress={()=>[setImageC(!imageC),setImageA(true),setImageB(true)]}>
                        <Text style={{ fontSize: 19, color: 'white', marginTop: 40 }}>Image 3</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

export default ImageExample1;

const styles = StyleSheet.create({})