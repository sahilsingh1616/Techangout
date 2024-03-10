import { StyleSheet, Alert, Text, View, Image, TouchableOpacity, TextInput, ToastAndroid } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'

const ReactNativeExample3 = () => {

    const [num, setNum] = useState("");
    const [pass, setpass] = useState("");
   const [val,setVal]=useState(" ")


    // useEffect(() => {
    //    number()
    // },[num])

const PrintFun=()=> {
  setVal(num)
}
    // const handleTextChange = () => {
    //     ToastAndroid.show('A pikachu appeared nearby !', ToastAndroid.SHORT);
    // }


    const ref = useRef();
    

    console.log(num)
    const Toast=()=>{
        if(num==[null] && (pass==[null])){
        ToastAndroid.show('Please field all details', ToastAndroid.CENTER);
        }
    }
    return (
        <View style={styles.maincontainer}>
            <View style={styles.imgmargin}>
            <Text>{val}</Text>
                <TouchableOpacity>

                    <Image source={require('../../../assets/images/groupme.png')} style={styles.img} />
                </TouchableOpacity>
            </View>
            
            <View style={styles.containerTxt}>
                <Text style={styles.maintxt}>Welcome Back</Text>
                <Text style={styles.smltxt}>Sign in to continue</Text>



            </View>

            <View style={styles.emailcont}>

                <TextInput onSubmitEditing={() => [ref.current.focus(),PrintFun ()]}  placeholderTextColor='white' placeholder='Email' style={styles.txtInput} onChangeText={(text) => setNum(text)} maxLength={10}></TextInput>
                <View style={styles.emailline}>

                </View>




            </View>
            <View style={{ marginTop: '8%' }}>
                <View style={{ flexDirection: 'row' }}>
                    <TextInput ref={ref} placeholderTextColor='white' placeholder='Password' style={styles.passwordtxt} onChangeText={setpass}></TextInput>
                    <Image source={require('../../../assets/images/eye.png')} style={styles.psswrdImg} />

                </View>

                <View style={styles.psswrdline}>
                </View>
                <View style={styles.forgetView}>
                    <Text style={styles.forgetxt}>Forget Password?</Text>
                </View>
            </View>

            <View style={styles.containerTxt}>
                <TouchableOpacity onPress={()=>PrintFun() } style={{ width: 230, height: 46, backgroundColor: '#8c4c3f', alignSelf: 'center', borderRadius: 10 }}>
                    <Text style={{ fontSize: 21, color: 'white', alignSelf: 'center', paddingTop: 10, fontWeight: '800' }}>Login</Text>
                </TouchableOpacity>
            </View>


            <View style={{ marginTop: '21%', flexDirection: 'row' }}>
                <Text style={{ fontSize: 15, color: 'white', marginLeft: '28%' }}>Don't have an Account ?</Text>
                <Text style={{ fontSize: 15, color: 'red', marginLeft: 4 }}>Sign up</Text>



            </View>








        </View>
    )
}

export default ReactNativeExample3

const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
        backgroundColor: 'pink',

    },
    imgmargin: {
        marginTop: '30%'
    },

    img: {
        width: 120,
        height: 120,
        alignSelf: 'center'
    },

    containerTxt: {
        marginTop: '10%'
    },
    maintxt: {
        fontSize: 36,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    smltxt: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
        fontWeight: '200'
    },
    emailcont: {
        marginTop: '20%',
        marginLeft: '13%'
    },
    txtInput: {
        width: 250,
        height: 40,
        marginLeft: 2
    },

    emailline: {
        width: 290,
        height: 1,
        backgroundColor: 'white'
    },
    passwordtxt: {
        width: 250,
        height: 40,
        marginLeft: '13%'
    },
    psswrdImg: {
        width: 20,
        height: 20,
        marginTop: 15,
        marginLeft: 10
    },
    psswrdline: {
        width: 290,
        height: 1,
        backgroundColor: 'white'
        , marginLeft: '13%'
    },

    forgetView: {
        alignSelf: 'flex-end',
        marginRight: 50,
        marginTop: 4
    },
    forgetxt: {
        fontSize: 11,
        color: 'red',
        fontWeight: 'bold'
    }

})