import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState,useContext } from 'react'
import { MyContext } from './index2'

const NavigationExample = (props) => {
    const unique = ['Long Term', 'Short Term', 'WithDrawn', 'Disconnected', 'National shortage', 'Supply discruption']
    const [selection, setSelected] = useState([]);
    const {mix,six} = useContext(MyContext);



    const ScreenBack = () => {
        props.route.params.Receiver(selection)

    props.navigation.goBack('keyword')
      
    }
    return (

        <View>
            {unique.map((item) => {
                return (

                    <TouchableOpacity onPress={() => [selection.push(item), console.log(selection)]}  >
                        <View>
                            <View style={{ backgroundColor: 'green', margin: 5, borderRadius: 10, padding: 5,width:'97%',height:40 }}>

                                <Text style={{ fontSize: 20, color: '#0b2f47',textAlign:'center' }}>{item}</Text>
                            </View>
                        </View> 
                    </TouchableOpacity>
                )
            })}
            <TouchableOpacity onPress={() => { ScreenBack() }}>
                <View style={{ alignItems: 'center', backgroundColor: 'yellow', width: '50%', height: 45, marginLeft: "20%", marginTop: '4%', borderRadius: 15 }}>
                    <Text style={{ fontSize: 22, color: 'black', fontWeight: '600', textAlign: 'center', marginTop: 8 }}>Selected:{six}:{mix}</Text>
                   
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default NavigationExample

const styles = StyleSheet.create({})