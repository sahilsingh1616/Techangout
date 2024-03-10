import { StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native'
import React from 'react'

const Search = () => {
    return (
        <View style={styles.container}>
            <View style={styles.container1}>

                <View style={styles.Step1}>



                    <Text style={styles.txt}>Hi, Sahil!</Text>
                </View>
                <Image source={require('../../../assets/images/notification.png')} style={styles.img1} />
            </View>

            <View style={styles.container2}>
                <Text style={styles.txt1}>Tasks for today:</Text>

            </View>
            <View style={styles.container3}>
                <Image source={require('../../../assets/images/favourites.png')} style={styles.img2} />
                <Text style={styles.txt2}>5 available</Text>


            </View>

            <View style={styles.container4}>
                <TextInput placeholderTextColor={'black'} placeholder='Search' style={styles.txt3}></TextInput>

                <Image source={require('../../../assets/images/native.png')} style={styles.img3} />

            </View>
            <View style={styles.container1}>
                <Text style={styles.txt4}>Last Connections</Text>
                <Text style={styles.txt5}>See all</Text>


            </View>
            <View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>

                    <View style={styles.container5}>
                        <View style={{ width: 100, height: 100, backgroundColor: 'white', borderRadius: 50, justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('../../../assets/images/wizard.png')} style={styles.img4} />
                        </View>


                        <View style={{ width: 100, height: 100, backgroundColor: 'white', borderRadius: 50, justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>

                            <Image source={require('../../../assets/images/magician.png')} style={styles.img5} />
                        </View>

                        <View style={{ width: 100, height: 100, backgroundColor: 'white', borderRadius: 50, justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>

                            <Image source={require('../../../assets/images/druid.png')} style={styles.img5} />
                        </View>

                        <View style={{ width: 100, height: 100, backgroundColor: 'white', borderRadius: 50, justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>


                            <Image source={require('../../../assets/images/adventurer.png')} style={styles.img5} />
                        </View>

                        <View style={{ width: 100, height: 100, backgroundColor: 'white', borderRadius: 50, justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>

                            <Image source={require('../../../assets/images/assasin.png')} style={styles.img5} />
                        </View>
                    </View>
                </ScrollView>
            </View>
            <View style={styles.container6}>

                <View style={styles.container7}>
                    <Text style={styles.txt6}>Active Project</Text>
                    <Text style={styles.txt7}>See all</Text>

                </View>
                <ScrollView>
                    <View style={styles.container8}>
                        <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 30, width: '100%', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 13, color: 'black', fontWeight: 'bold', opacity: 0.4 }}>Numero 10</Text>
                            <Text style={{ fontSize: 13, color: 'black', fontWeight: 'bold', opacity: 0.4, marginRight: 60 }}>9h</Text>

                        </View>
                        <View style={{ marginTop: 5, marginLeft: 28 }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>Blog and social posts</Text>

                        </View>
                        <View style={{ flexDirection: 'row', marginLeft: 30 }}>
                            <Image source={require('../../../assets/images/clock.png')} style={styles.img6} />
                            <Text style={{ fontSize: 22, fontWeight: '100', color: 'black', marginLeft: 4, marginTop: 2 }}>Deadline is today</Text>
                        </View>
                    </View>
                    <View style={styles.container8}>
                        <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 30, width: '100%', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 13, color: 'black', fontWeight: 'bold', opacity: 0.4 }}>Grace Aroma</Text>
                            <Text style={{ fontSize: 13, color: 'black', fontWeight: 'bold', opacity: 0.4, marginRight: 60 }}>7h</Text>

                        </View>
                        <View style={{ marginTop: 5, marginLeft: 28 }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>New capman review </Text>

                        </View>
                        <View style={{ flexDirection: 'row', marginLeft: 30 }}>
                            <Image source={require('../../../assets/images/clock.png')} style={styles.img6} />
                            <Text style={{ fontSize: 22, fontWeight: '100', color: 'black', marginLeft: 4, marginTop: 2 }}>Sahil Work Mode on</Text>
                        </View>
                    </View>

                    <View style={styles.container8}>
                        <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 30, width: '100%', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 13, color: 'black', fontWeight: 'bold', opacity: 0.4 }}>Main Activity</Text>
                            <Text style={{ fontSize: 13, color: 'black', fontWeight: 'bold', opacity: 0.4, marginRight: 60 }}>11h</Text>

                        </View>
                        <View style={{ marginTop: 5, marginLeft: 28 }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>New spaces review </Text>

                        </View>
                        <View style={{ flexDirection: 'row', marginLeft: 30 }}>
                            <Image source={require('../../../assets/images/clock.png')} style={styles.img6} />
                            <Text style={{ fontSize: 22, fontWeight: '100', color: 'black', marginLeft: 4, marginTop: 2 }}>Mode on</Text>
                        </View>
                    </View>
                    <View style={styles.container8}>
                        <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 30, width: '100%', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 13, color: 'black', fontWeight: 'bold', opacity: 0.4 }}>Babel Ln</Text>
                            <Text style={{ fontSize: 13, color: 'black', fontWeight: 'bold', opacity: 0.4, marginRight: 60 }}>12h</Text>

                        </View>
                        <View style={{ marginTop: 5, marginLeft: 28 }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>Cat review </Text>

                        </View>
                        <View style={{ flexDirection: 'row', marginLeft: 30 }}>
                            <Image source={require('../../../assets/images/clock.png')} style={styles.img6} />
                            <Text style={{ fontSize: 22, fontWeight: '100', color: 'black', marginLeft: 4, marginTop: 2 }}>Visual studio</Text>
                        </View>
                    </View>
                    <View style={styles.container8}>
                        <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 30, width: '100%', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 13, color: 'black', fontWeight: 'bold', opacity: 0.4 }}>Insert</Text>
                            <Text style={{ fontSize: 13, color: 'black', fontWeight: 'bold', opacity: 0.4, marginRight: 60 }}>13h</Text>

                        </View>
                        <View style={{ marginTop: 5, marginLeft: 28 }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>techangout  </Text>

                        </View>
                        <View style={{ flexDirection: 'row', marginLeft: 30 }}>
                            <Text style={{ fontSize: 22, fontWeight: '100', color: 'black', marginLeft: 4, marginTop: 2 }}>Selection Work</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>

        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0EBB2'
    },

    Step1: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    container1: {
        flexDirection: 'row',
        marginTop: 30,
        marginLeft: 26,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    container2: {
        marginTop: '10%',
        marginLeft: 25
    },
    container3: {
        marginTop: 2,
        flexDirection: 'row'

    },
    container4: {

        marginTop: 30,
        width: '90%',
        height: 50,
        marginLeft: '6%',
        backgroundColor: 'white',
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    container5: {

        flexDirection: 'row',
        marginTop: 18,
        marginLeft: 22


    },
    container6: {
        height: '45%',
        width: 390,
        backgroundColor: 'white',
        marginTop: 20,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20

    },
    container7: {

        flexDirection: 'row',

        marginTop: 40,
        marginLeft: 10

    },
    container8: {
        borderWidth: 0.3,
        width: '90%',
        height: 92,
        marginLeft: 20,
        marginTop: 20,
        borderRadius: 10,



    },
    txt: {
        fontSize: 22,
        color: 'black',
        marginLeft: 7,
        marginTop: 3,
        opacity: 0.5
    },
    txt1: {
        fontSize: 32,
        color: 'black',
        fontWeight: 'bold',
    },
    txt2: {
        fontSize: 14,
        color: 'red',

        marginLeft: 5
    },
    txt3: {
        flex: 1,
        fontSize: 14,
        color: '#1A15C2',
        marginLeft: 12,
        opacity: 0.5,
        marginTop: 1

    },
    txt4: {
        fontSize: 25,
        color: 'black',
        fontWeight: '600',
    },

    txt5: {
        fontSize: 19,
        color: 'black',
        marginRight: 18,
        marginTop: 3,
        opacity: 0.5
    },
    txt6: {
        fontSize: 30,
        color: 'black',
        fontWeight: '600',
        marginLeft: 15
    },
    txt7: {
        fontSize: 19,
        color: 'black',
        marginLeft: 140,
        marginTop: 5,
        opacity: 0.5
    },
    img: {
        width: 40,
        height: 40,
    },

    img1: {
        marginRight: 12,
        width: 40,
        height: 40,
    },
    img2: {
        width: 17,
        height: 17,
        marginLeft: '7%'
    },
    img3: {
        width: 20,
        height: 20,
        marginRight: 12,
        marginTop: 13
    },
    img4: {
        width: 58,
        height: 58,

    },
    img5: {
        width: 58,
        height: 58,
        marginLeft: 10

    },
    img6: {
        width: 20,
        height: 20,
        marginTop: 6


    },


})