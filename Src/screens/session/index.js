import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

const Session = () => {
    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <Image source={require('../../../assets/images/code.png')} style={styles.img} />
                <Text style={styles.txt}>Session</Text>

                <Image source={require('../../../assets/images/src.png')} style={styles.img1} />

            </View>
            <ScrollView>
                <View style={{ marginTop: 20 }}>
                    <View style={{ flexDirection: 'row', backgroundColor: 'white', width: 80, height: 80, marginLeft: 24, borderRadius: 50, elevation: 6 }}>
                        <Image source={require('../../../assets/images/flat.png')} style={styles.img3} />
                        <View>
                            <Text style={{ fontSize: 22, color: 'black', fontWeight: '600', marginLeft: 13, width: 150, marginTop: 7 }}>Sahil Singh</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontSize: 15, color: 'black', marginLeft: 13, marginTop: 7, opacity: 0.4 }}>21 yrs</Text>
                                <Text style={{ fontSize: 15, color: 'black', marginLeft: 3, marginTop: 3 }}> .</Text>
                                <Text style={{ fontSize: 15, color: 'black', marginLeft: 5, marginTop: 7, opacity: 0.4 }}>Depression</Text>
                                <Text style={{ fontSize: 15, color: 'black', marginLeft: 3, marginTop: 3 }}> .</Text>
                                <Text style={{ fontSize: 15, color: 'black', marginLeft: 5, marginTop: 7, opacity: 0.4 }}>Take meds</Text>

                            </View>
                            <View style={{ marginLeft: 13, marginTop: 6 }}>
                                <Text style={{ fontSize: 15, color: 'black', opacity: 0.5 }}>16 Oct,2001  16:00-17:00</Text>
                            </View>
                        </View>
                    </View>

                </View>

                <View style={{ marginTop: 20, marginLeft: 24 }} >
                    <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'black' }}>Complaints</Text>
                    <View style={{ marginTop: 20, flexDirection: 'row', flexWrap: 'wrap' }}>
                        <TouchableOpacity>
                            <View style={{ backgroundColor: 'lightgreen', width: 100, borderRadius: 10, height: 45 }}>
                                <Text style={{ fontSize: 14, color: 'white', alignSelf: 'center', paddingTop: 12, fontWeight: 'bold' }}>Bad mood</Text>

                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{ backgroundColor: 'lightgreen', width: 100, borderRadius: 10, height: 45, marginLeft: 10 }}>
                                <Text style={{ fontSize: 14, color: 'white', alignSelf: 'center', paddingTop: 12, fontWeight: 'bold' }}>Insomina</Text>

                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{ backgroundColor: 'lightgreen', width: 60, borderRadius: 10, height: 45, marginLeft: 10 }}>
                                <Text style={{ fontSize: 14, color: 'white', alignSelf: 'center', paddingTop: 12, fontWeight: 'bold' }}>apathy</Text>

                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{ backgroundColor: 'lightgreen', width: 60, borderRadius: 10, height: 45, marginLeft: 10 }}>
                                <Text style={{ fontSize: 14, color: 'white', alignSelf: 'center', paddingTop: 12, fontWeight: 'bold' }}>anger</Text>

                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{ backgroundColor: 'lightgreen', width: 110, borderRadius: 10, height: 45, marginTop: 8 }}>
                                <Text style={{ fontSize: 14, color: 'white', alignSelf: 'center', paddingTop: 12, fontWeight: 'bold' }}>mood swings</Text>

                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{ backgroundColor: 'lightgreen', width: 110, borderRadius: 10, height: 45, marginTop: 8, marginLeft: 10 }}>
                                <Text style={{ fontSize: 14, color: 'white', alignSelf: 'center', paddingTop: 12, fontWeight: 'bold' }}>painic attacks</Text>

                            </View>
                        </TouchableOpacity>

                    </View>

                </View>

                <View style={{ marginTop: 20, marginLeft: 26 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 24, color: 'black', fontWeight: 'bold', opacity: 0.5 }}>Information</Text>
                        <Text style={{ fontSize: 24, color: 'black', marginLeft: 20, fontWeight: 'bold', opacity: 0.5 }}>Medicine</Text>
                        <Text style={{ fontSize: 24, color: 'black', marginLeft: 20, fontWeight: 'bold', opacity: 0.5 }}>Diagnoses</Text>
                    </View>

                </View>

                <View style={{ marginTop: 35, marginLeft: 26 }}>
                    <Text style={{ fontSize: 30, color: 'black' }}>General</Text>
                    <View style={{ width: 340, height: 290, backgroundColor: '#98FCFD', marginTop: 20, borderRadius: 20 }}>
                        <View style={{ width: 310, height: 50, backgroundColor: 'white', marginTop: 30, marginLeft: 14, borderRadius: 10, elevation: 12 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <TextInput placeholderTextColor='black' placeholder='First Name' style={{ flex: 1, fontSize: 18, color: 'black', opacity: 0.5, paddingLeft: 12 }} />
                                <Text style={{ fontSize: 18, color: 'black', opacity: 0.5, marginRight: 10 }}>Sahil </Text>


                            </View>

                        </View>
                        <View style={{ width: 310, height: 50, backgroundColor: 'white', marginTop: 10, marginLeft: 14, borderRadius: 10, elevation: 12 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <TextInput placeholderTextColor='black' placeholder='Last Name' style={{ flex: 1, fontSize: 18, color: 'black', opacity: 0.5, paddingLeft: 12 }} />
                                <Text style={{ fontSize: 18, color: 'black', opacity: 0.5, marginRight: 10 }}>Singh</Text>


                            </View>

                        </View>
                        <View style={{ width: 310, height: 50, backgroundColor: 'white', marginTop: 10, marginLeft: 14, borderRadius: 10, elevation: 12 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <TextInput placeholderTextColor='black' placeholder='Date of birth' style={{ flex: 1, fontSize: 18, color: 'black', opacity: 0.5, paddingLeft: 12 }} />
                                <Text style={{ fontSize: 18, color: 'black', opacity: 0.5, marginRight: 10 }}>16/Oct/2001</Text>


                            </View>
                        </View>
                        <View style={{ width: 310, height: 50, backgroundColor: 'white', marginTop: 10, marginLeft: 14, borderRadius: 10, elevation: 12 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <TextInput placeholderTextColor='black' placeholder='Gender' style={{ flex: 1, fontSize: 18, color: 'black', opacity: 0.5, paddingLeft: 12 }} />
                                <Text style={{ fontSize: 18, color: 'black', opacity: 0.5, marginRight: 10 }}>Male</Text>


                            </View>

                        </View>

                    </View>




                </View>

                <View style={{ marginTop: 25, marginLeft: 26 }}>
                    <Text style={{ fontSize: 30, color: 'black' }}>Additional</Text>
                    <View style={{ marginTop: 20 }}>
                        <Text style={{ fontSize: 20, color: 'black', opacity: 0.6 }}>Therapist Notes</Text>

                        <View style={{ marginTop: 10 }}>
                            <Text style={{ fontSize: 18, color: 'black', opacity: 0.6 }}>Tom showed all nine sympto of major Depression{'\n'}for at least two weeks: depressed mood weight{'\n'},loss Insomina,restlessness,loss of energy{'\n'},extreme guilt</Text>
                        </View>

                    </View>


                </View>
            </ScrollView>

        </View>
    )
}

export default Session;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    container1: {
        flexDirection: 'row',
        marginTop: 30,
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    img: {
        height: 40,
        width: 40,
        marginLeft: 10
    },
    img1: {
        height: 35,
        width: 35,
        marginRight: 8
    },

    img3: {
        width: 78,
        height: 78,
    },
    txt: {
        fontSize: 25,
        color: 'black',
        marginTop: 1
    }
})