import { Image, Modal, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Props from '../props'

const KeywordPage = ({ navigation }) => {

    const team = ['Team1', 'Team2', 'Team3', 'Team4', 'Team5', 'Team6', 'Team7']
    const [select, setSelection] = useState(null);
    const [myarr, setMyArr] = useState([]);
    const [nextpage, setNextpage] = useState([]);

    console.log(myarr)

    const [modalvisible, setModalVIsible] = useState(false)
    const [value, setValue] = useState('');

    const PushIntoKeyword = () => {
        myarr.push(value);
        console.log(myarr);
    }

    const Sender = () => {
        navigation.navigate('navigation', { Receiver: Receiver })
    }

    const Receiver = (singh) => {
        setNextpage(singh)
        console.log(singh)
    }
    return (
        <SafeAreaView style={styles.MAINCONTAINER}>
            <ScrollView>
                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={modalvisible}
                    onRequestClose={() => setModalVIsible(!modalvisible)}>

                    <View style={{ alignItems: 'center', marginTop: '20%' }}>
                        <View style={{
                            width: '80%', height: '80%', margin: 20, backgroundColor: 'white', borderRadius: 20, padding: 35, alignItems: 'center', shadowColor: '#000', shadowOffset: {
                                width: 0,
                                height: 2,
                            }, shadowOpacity: 0.25, shadowRadius: 4, elevation: 5,
                      }}>

                            {team.map((item, index) => {
                                return (
                                    <TouchableOpacity onPress={() => [setSelection(team[index]), console.log(select)]}>
                                        <View style={{ backgroundColor: '#e2f2f9', margin: 5, borderRadius: 10, padding: 5 }}>

                                            <Text style={{ fontSize: 18, color: '#0b2f47' }}>{item}</Text>
                                        </View>
                                    </TouchableOpacity>
                                )
                            })}
                            <TouchableOpacity onPress={()=>setModalVIsible(!modalvisible)} style={{width:'40%',height:40,backgroundColor:'#319CF5',justifyContent:'center',alignItems:'center',marginTop:'10%',borderRadius:10}}>
                            <Text style={{fontSize:12,color:'white',fontWeight:'500'}}>Submit</Text>
                        </TouchableOpacity>
                        </View>



                    </View>
                </Modal>
                <View style={styles.SEARCHVIEW}>
                    <View style={styles.FIRSTVIEW}>
                        <Text style={styles.SEARCHTXT}>Search</Text>
                        <TouchableOpacity>
                            <View style={styles.IMAGEVIEW}>
                                <Image source={require('../../../assets/images/refresh.png')} style={styles.img} />

                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginTop: '2%' }}>
                    <Text style={styles.SELECTVIEW}>Select a team and search within that team's query posts using tags and{'\n'}keywords or a combination of both.</Text>
                </View>

                <View style={{ marginTop: '5%', marginLeft: '4%' }}>
                    <Text style={styles.WHICHVIEW}>Which team would you like to search?</Text>


                </View>


                <TouchableOpacity onPress={() => setModalVIsible(!modalvisible)}>
                    <View style={styles.BOXVIEW}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('../../../assets/images/label.png')} style={styles.LABEL} />
                            <Text style={{ fontSize: 11, color: 'black', fontWeight: '700', margin: 5 }}>Select Team</Text>
                        </View>

                    </View>
                </TouchableOpacity>
                <View style={{ marginTop: '2%', marginLeft: '4%' }}>
                    <Text style={{ fontSize: 19, color: 'grey' }}>Searching In: {select}</Text>

                </View>
                <View style={{ marginTop: '2%', marginLeft: '4%' }}>
                    <Text style={{ fontSize: 19, color: 'grey' }}>Out of stock/Pharmacist Team</Text>

                </View>
                <View style={{ marginTop: '5%', marginLeft: '4%', flexDirection: 'row' }}>
                    <Text style={styles.WHICHVIEW}>Search by tags</Text>
                    <Text style={{ marginLeft: '2%', marginTop: 4, fontSize: 11, color: 'black', opacity: 0.5, fontWeight: '500' }}>Add up to 8 tags</Text>

                </View>
                <TouchableOpacity onPress={Sender}>
                    <View style={styles.BOXVIEW}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('../../../assets/images/label.png')} style={styles.LABEL} />
                            <Text style={{ fontSize: 11, color: 'black', fontWeight: '700', margin: 5 }}>Add tags</Text>
                        </View>

                    </View>
                </TouchableOpacity>
                <View style={{ marginTop: '2%', marginLeft: '4%' }}>
                    <Text style={{ fontSize: 19, color: 'grey' }}>Selected Tags:{nextpage}</Text>

                </View>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>


                </View>
                <View style={{ marginTop: '5%', marginLeft: '4%', flexDirection: 'row' }}>
                    <Text style={styles.WHICHVIEW}>Search by keywords</Text>
                    <Text style={{ marginLeft: '2%', marginTop: 4, fontSize: 11, color: 'black', opacity: 0.5, fontWeight: '500' }}>Add up to 4 keywords</Text>

                </View>

                <View style={{ borderWidth: 1, width: '90%', borderRadius: 10, height: 45, marginTop: 20, alignSelf: 'center', marginBottom: '4%' }}>
                    <TextInput placeholderTextColor='grey' placeholder='Type your keyword here...' style={{ fontSize: 18, color: 'black', paddingLeft: 8 }} onChangeText={(text) => setValue(text)} />

                </View>

                <TouchableOpacity onPress={() => [PushIntoKeyword(), setValue(value)]}>
                    <View style={styles.BOXVIEW1}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('../../../assets/images/keyword.png')} style={styles.LABEL} />
                            <Text style={{ fontSize: 16, color: 'black', fontWeight: '700', margin: 5 }}>Add Keywords</Text>
                        </View>
                    </View>

                </TouchableOpacity>

                <View style={styles.SELECTVIEWSEC}>
                    <Text style={{ fontSize: 19, color: 'grey' }}>Selected Keywords</Text>

                </View>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginLeft: 10 }}>

                    {myarr.map((item) => {
                        return (
                            <View style={{ backgroundColor: '#e2f2f9', margin: 5, borderRadius: 10, padding: 5 }}>
                                <Text style={{ fontSize: 18, color: '#0b2f47' }}>{item}</Text>
                            </View>
                        )
                    })}
                </View>
                <TouchableOpacity>
                    <View style={styles.BOXVIEW2}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('../../../assets/images/loupe.png')} style={styles.LABEL1} />
                            <Text style={{ fontSize: 16, color: 'white', fontWeight: '700', margin: 5 }}>Search</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}

export default KeywordPage

const styles = StyleSheet.create({
    MAINCONTAINER: {
        flex: 1, backgroundColor: '#fff'
    },
    SEARCHVIEW: {
        height: 60, backgroundColor: '#0b2f47', justifyContent: 'center', alignItems: 'center'
    },
    FIRSTVIEW: {
        flexDirection: 'row', position: 'absolute'
    },
    SEARCHTXT: {
        fontSize: 18, fontWeight: 'bold', color: 'white', textAlign: 'center'
    },
    IMAGEVIEW: {
        backgroundColor: 'white', width: 30, height: 30, borderRadius: 50, left: 120
    },
    img: {
        width: 25, height: 25, alignSelf: 'center', marginTop: 3
    },
    SELECTVIEW: {
        fontSize: 14, color: 'black', marginLeft: '4%', opacity: 0.5
    },
    WHICHVIEW: {
        fontSize: 18, color: 'black', fontWeight: 'bold'
    },
    BOXVIEW: {
        borderWidth: 1, width: "40%", marginTop: '4%', height: 52, marginLeft: '4%', borderRadius: 13, justifyContent: 'center', alignItems: 'center'
    },
    BOXVIEW1: {
        borderWidth: 1, width: "40%", height: 52, marginLeft: '4%', borderRadius: 13, justifyContent: 'center', alignItems: 'center'
    },
    LABEL: {
        width: 18, height: 18, tintColor: 'black', marginTop: '2%'
    },
    BOXVIEW2: {
        borderWidth: 1, width: "30%", marginTop: '2%', height: 52, marginLeft: '4%', borderRadius: 13, justifyContent: 'center', alignItems: 'center', marginBottom: '10%', backgroundColor: '#0a2e45'
    },
    LABEL1: {
        width: 18, height: 18, tintColor: 'white', marginTop: 6
    },
    SELECTVIEWSEC: {
        marginTop: '2%', marginLeft: '4%'
    }
})