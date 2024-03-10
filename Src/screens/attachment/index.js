import { StyleSheet, Text, View, Image, Alert,TextInput, TouchableOpacity, ToastAndroid } from 'react-native'
import React from 'react'

const SignUp = () => {
    const MySolution = () => {
        //function to make two option alert
        Alert.alert(
        
          'Hello',
         
          'I am two option alert. Do you want to cancel me ?',
        
          
        );
      };
    
    return (
        <View style={styles.maincontainer}>
            <View style={styles.imgMargin}>
                <TouchableOpacity>
                    <Image source={require('../../../assets/images/let.png')} style={styles.img} />
                </TouchableOpacity>
            </View>

            <View style={styles.imgmarginTop}>
                <Image source={require('../../../assets/images/image1.jpg')} style={styles.img1} />

            </View>
            <View style={styles.txtmargintop}>
                <Text style={styles.txt}>Sign Up</Text>

            </View>

            <View style={styles.botmTop}>
                <View style={styles.imgflex}>
                    <Image source={require('../../../assets/images/atsign.png')} style={styles.img2} />
                    <TextInput placeholderTextColor='black' placeholder='Email' style={styles.txtinput} />
                </View>
                <View style={styles.underline}>
                </View>
            </View>

            <View style={styles.botmMiddle}>
                <View style={styles.imgflex}>
                    <Image source={require('../../../assets/images/user1.png')} style={styles.img2} />
                    <TextInput placeholderTextColor='black' placeholder='Full Name' style={styles.txtinput} />
                </View>
                <View style={styles.underline}>
                </View>
            </View>


            <View style={styles.botmMiddle}>
                <View style={styles.imgflex}>
                    <Image source={require('../../../assets/images/telephone.png')} style={styles.img2} />
                    <TextInput placeholderTextColor='black' placeholder='Mobile' style={styles.txtinput} />
                </View>
                <View style={styles.underline}>
                </View>
            </View>
            <View style={styles.atlast}>
                <View style={styles.imgflex}>
                    <Text style={styles.txt1}>By signing up,  you're agree to our</Text>
                    <TouchableOpacity>
                        <Text style={styles.txt2}>Terms and conditions</Text>

                    </TouchableOpacity>
                </View>
                <View style={styles.txttop}>
                    <Text style={styles.txtblue}>and Privacy Policies.</Text>
                </View>
            </View>
            <View style={styles.TouchableOpacity}>
                <TouchableOpacity onPress={MySolution} style={styles.backgroundColor}>
                    <Text style={styles.padding}>Continue </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.down}>
                <Text style={styles.txt3}>Joined us before ?</Text>
                <Text style={styles.txt4}> Login</Text>


            </View>
        </View>
    )
}

export default SignUp

const styles = StyleSheet.create({

    maincontainer: {
        flex: 1,
        backgroundColor: 'white'
    },

    imgMargin: {
        marginTop: 20,
        marginLeft: 30
    },

    img: {
        width: 40,
        height: 40
    },
    img1: {
        width: 200,
        height: 200
    },

    img2: {
        width: 20,
        height: 20,
        borderWidth: 1,
        marginTop: 7,
        opacity:0.5
    },
    imgmarginTop: {
        alignItems: 'center',
        marginTop: '10%',
    },

    txtmargintop: {
        marginTop: 30
    },

    txt: {
        fontSize: 37,
        color: 'black',
        fontWeight: '500',
        marginLeft: '10%'
    },

    txt1: {
        fontSize: 15,
        color: 'black',
        marginLeft: '10%'
    },

    txt2: {
        fontSize: 15,
        color: 'blue',
        marginLeft: '3%'
    },
    txt3: {
        fontSize: 17,
        color: 'black',
        marginLeft: '10%'
    },
    txt4: {
        fontSize: 17,
        color: 'blue',
        fontWeight: 'bold'
    },

    txttop: {
        marginTop: 5
    },
    txtblue: {
        fontSize: 15,
        color: 'blue',
        marginLeft: '10%'
    },
    TouchableOpacity: {
        marginTop: 20,
        alignItems: 'center'
    },

    backgroundColor: {
        backgroundColor: '#0065ff',
        width: '80%',
        height: 50
        , borderRadius: 14
    },
    padding: {
        fontSize: 22,
        color: 'white',
        fontWeight: '700',
        alignSelf: 'center',
        paddingTop: 9
    },

    botmTop: {
        marginTop: 30,
        marginLeft: 40
    },
    botmMiddle: {
        marginTop: 20, marginLeft: 40
    },
    imgflex: {
        flexDirection: 'row'
    },
    txtinput: {
        fontSize: 22,
        width: '80%',
        height: 40,
        marginLeft: 7,
        opacity: 0.5,
        color:'black'
    },
    underline: {
        backgroundColor: 'black',
        width: '80%',
        height: 2,
        marginLeft: 25,
        opacity: 0.6
    },
    atlast: {
        marginTop: '10%'
    },
    down: {
        marginTop: '10%',
        flexDirection: 'row',
        alignSelf: 'center'
    }



})