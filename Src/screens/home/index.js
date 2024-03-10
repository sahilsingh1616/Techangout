import { StyleSheet, Text, View, Image, Button, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.direction}>
                <Image source={require('../../../assets/images/bts.png')} style={styles.img} />

                <Text style={styles.txt}>Dayzer</Text>
            </View>
            <View style={styles.space}>
                <Text style={styles.txt2}>To Simplify {'\n'}the way you {'\n'}work</Text>

            </View>
            <View style={styles.space1}>
                <Image source={require('../../../assets/images/sano.png')} style={styles.img2} />

                <View style={styles.container1}>
                    <Text style={styles.txt3}>Controlling Delveries in Reliable and{'\n'} No-Hassle wayvisual form of a document {'\n'}or a typeface without relying on meaningful{'\n'}Lorem ipsum may be used as a placeholder{'\n'} before final copy is available</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.BUTTON}>
                <Text style={styles.BUTTONTxt}>Get Free trial</Text>

            </TouchableOpacity>

            <View style={styles.Login}>
                <Text style={styles.LoginTxt}>Don't Register ? </Text>
                <Text style={styles.LoginTxt1}>Sign In</Text>

            </View>

        </View>


    )
}

export default Home

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#65FAC4'
    },
    img: {
        width: 50,
        height: 50,
        marginTop: 40,
        marginLeft: 20,

    },
    direction: {
        flexDirection: 'row'
    },

    txt: {
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',
        marginTop: '11%',
        marginLeft: 1,


    },
    space: {
        marginTop: 26,
        justifyContent: 'center',
        alignItems: 'center'

    },
    txt2: {
        fontSize: 49,
        fontWeight: 'bold',
        color: 'black',


    },
    container1: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    space1: {
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center'

    },

    img2: {
        width: 200,
        height: 200,

    },

    txt3: {
        fontSize: 20,

        fontWeight: 'Bold',
        color: 'black',
        marginTop: 15
    },
    BUTTON: {
        marginTop: '11%',
        marginLeft: '14%',
        borderWidth: 1,
        width: '70%',
        height: '6%',
        borderRadius: 10,
        backgroundColor: 'black'
    },
    BUTTONTxt: {
        fontSize: 20,
        paddingLeft: 20,
        color: 'white',
        marginTop: 8,
        paddingLeft: '30%'
    },
    Login: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 6
    },

    LoginTxt: {
        fontSize: 20,
        color: 'red'
    },


    LoginTxt1: {
        fontSize: 20,
        color: 'blue'
    }





})