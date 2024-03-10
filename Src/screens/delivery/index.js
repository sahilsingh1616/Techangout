import { StyleSheet, Text, View, Image, TouchableOpacityBase, TouchableOpacity } from 'react-native'
import React from 'react'



const Delivery = () => {
    return (

        <View style={styles.container}>
            <Text style={styles.txt}>Get your Food</Text>
            <Text style={styles.txt1}>Delivery at your</Text>
            <Text style={{ fontSize: 50, fontWeight: '300', color: 'white', marginLeft: '8%', }}>DoorStep</Text>

            <View style={styles.container1}>
                <Text style={styles.txt2}>We have 5000+ Review and our customers{'\n'}Trust on our food and delivery service.</Text>


            </View>
            <View style={styles.container2}>
                <Image source={require('../../../assets/images/help.png')} style={{ width: 440, height: 320, marginRight: 60 }} />


            </View>
            <TouchableOpacity>
            <View style={{marginTop:'10%',alignItems:'center'}}>
            <Image source={require('../../../assets/images/right.png')} style={{ width:70, height: 70 }} />
           </View>
           </TouchableOpacity>
        </View>
    )
}

export default Delivery;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1AE3DD',

    },
    container1: {
        marginTop: '4%'
    },
    container2: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%'
    },
    txt: {
        fontSize: 50,
        fontWeight: '300',
        color: 'white',
        marginLeft: '8%',
        marginTop: '20%'

    },
    txt1: {
        fontSize: 50,
        fontWeight: 'bold',
        color: 'white',
        marginLeft: '8%'
    },
    txt2: {
        fontSize: 18,
        color: 'red',
         textAlign:'center',
        opacity: 0.3
    }

})