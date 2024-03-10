import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React from 'react'

const Register = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.txt}>Messaging ID</Text>

            <View style={styles.container1}>
                <Text style={styles.txt1}>Your Daily Plans</Text>
                <Text style={styles.txt2}>70%</Text>

            </View>
            <View style={{ marginTop: 15 }}>
                <Image source={require('../../../assets/images/rename.png')} style={styles.img} />


            </View>
            <View style={{ marginTop: 16, marginLeft: 19 }}>
                <Text style={{ fontSize: 21, color: 'red', fontWeight: 200 }}>4 of 6 Completed</Text>

            </View>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <TouchableOpacity>
                    <View style={{ borderRadius: 30, width: 170, height: 130, backgroundColor: '#F8E885', marginLeft: 20 }}>
                        <Text style={{ fontSize: 35, fontWeight: 500, color: 'black', marginTop: 20, marginLeft: 30 }}>16</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('../../../assets/images/tasks.png')} style={{ width: 18, height: 18, marginTop: 10, marginLeft: 30 }} />
                            <Text style={{ fontSize: 18, fontWeight: '400', opacity: 0.7, color: 'black', marginTop: 9, marginLeft: 3 }}>Tasks Finished</Text>
                        </View>

                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View>
                        <View style={{ borderRadius: 30, width: 170, height: 130, backgroundColor: '#F8E885', marginLeft: 15 }}>

                            <Text style={{ fontSize: 35, fontWeight: 500, color: 'black', marginTop: 20, marginLeft: 30 }}>3,2</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={require('../../../assets/images/timer.png')} style={{ width: 18, height: 18, marginTop: 10, marginLeft: 30 }} />
                                <Text style={{ fontSize: 18, fontWeight: '400', opacity: 0.7, color: 'black', marginTop: 9, marginLeft: 3 }}>Tracks Hours</Text>
                            </View>

                        </View>
                    </View>
                </TouchableOpacity>
            </View>
            <ScrollView>
            <View style={{ marginTop: 20, marginLeft: 25, }}>
                <Text style={{ fontSize: 29, color: 'black', fontWeight: 'bold', opacity: 0.6 }}>Overview</Text>

            </View>
            <View style={{ marginTop: 10}}>
                <Text style={{ fontSize: 17, color: 'black', textAlign: 'center'}}>• Can SMSs serve as a medium for writing short English{'\n'}    paragraphs by JKJSS’s Grade 9 EFAL learners  school?</Text>
                <Text style={{ fontSize: 17, color: 'black', textAlign: 'center', marginTop: 3 }}>• Is it possible for SMSs to function as a platform for a{'\n'} instant feedback to JKJSS’s Grade 9 EFAL learners{'\n'} outside school</Text>

            </View>
           
            <View style={{ marginTop: 15, marginLeft: 28 }}>
                <Text style={styles.txt3}>Members Connected</Text>

            </View>
            <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>

                <View style={{flexDirection: 'row', marginTop: 15}}>
                    <View style={{ width: 100, height: 100, backgroundColor: 'white', borderRadius: 50, justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>

                        <Image source={require('../../../assets/images/magician.png')} style={{ width: 50, height: 50 }} />

                    </View>
                    <View style={{ width: 100, height: 100, backgroundColor: 'white', borderRadius: 50, justifyContent: 'center', alignItems: 'center', marginLeft: 12 }}>

                        <Image source={require('../../../assets/images/druid.png')} style={{ width: 50, height: 50 }} />

                    </View>
                    <View style={{ width: 100, height: 100, backgroundColor: 'white', borderRadius: 50, justifyContent: 'center', alignItems: 'center', marginLeft: 12 }}>

                        <Image source={require('../../../assets/images/adventurer.png')} style={{ width: 50, height: 50 }} />

                    </View>
                    <View style={{ width: 100, height: 100, backgroundColor: 'white', borderRadius: 50, justifyContent: 'center', alignItems: 'center', marginLeft: 12 }}>

                        <Image source={require('../../../assets/images/assasin.png')} style={{ width: 50, height: 50 }} />

                    </View>
                    <View style={{ width: 100, height: 100, backgroundColor: 'white', borderRadius: 50, justifyContent: 'center', alignItems: 'center', marginLeft: 12 }}>

                        <Image source={require('../../../assets/images/delete.png')} style={{ width: 50, height: 50 }} />

                    </View>
                    <View style={{ width: 100, height: 100, backgroundColor: 'white', borderRadius: 50, justifyContent: 'center', alignItems: 'center', marginLeft: 12 }}>

                        <Image source={require('../../../assets/images/delete.png')} style={{ width: 50, height: 50 }} />

                    </View><View style={{ width: 100, height: 100, backgroundColor: 'white', borderRadius: 50, justifyContent: 'center', alignItems: 'center', marginLeft: 12 }}>

                        <Image source={require('../../../assets/images/delete.png')} style={{ width: 50, height: 50 }} />

                    </View>
                    <View style={{ width: 100, height: 100, backgroundColor: 'white', borderRadius: 50, justifyContent: 'center', alignItems: 'center', marginLeft: 12 }}>

                        <Image source={require('../../../assets/images/delete.png')} style={{ width: 50, height: 50 }} />

                    </View>
            

                    </View>


            
            </ScrollView>
            </View>
           
            <View style={{marginTop:8,marginLeft:28,marginRight:28}}>
                    <Text style={styles.txt4}>Discussion of Finding</Text>
                    <Text style={{fontSize:22,color:'black',marginTop:20}}>Regarding the usefulness of the SMS and Mxit, the ﬁndings of this study revealed that these two applications served as virtual platforms for chatting, friendship, fun, establishing new friendships and for sourcing information and knowledge for participants. In the ﬁrst instance, these two technologies – as examples of social media technologies – tend to function as socialisation platforms for participants; in the second instance, they appear to be information and knowledge sharing tools for participants. The use of SMSs for friendship purposes ties in with Porath’s (2011) view that most teenagers, especially most American teenagers, regard their mobile phones as indispensable as they employ text messaging for connecting with their friends. The same sentiment is echoed by Thurlow (2003) who points out that most United Kingdom (UK) adolescents tend to use text messages for friendship maintenance. This ﬁnding is also supported by Bosch (2008) who conducted a similar study in Cape Town, South Africa. Bosch concluded that Mxit and mobile phones are used by Cape Town adolescents, particularly girls, for developing personal relationships as they are cost-effective. In the same vein, Kreutzer’s (2009) pilot study reports that learners from a Cape Town secondary school indicated that they used mobile phones for personal communication purposes.</Text>
                    </View>
                    </ScrollView>
        </View>

    )
}

export default Register;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FCF0EA'
    },

    container1: {
        flexDirection: 'row',
        marginTop: '11%',
        marginLeft: 13,

    },

    txt: {
        fontSize: 43,
        fontWeight: '700',
        color: 'black',
        marginTop: '11%',
        marginLeft: 13
    },
    txt1: {
        fontSize: 28,
        fontWeight: '300',
        color: 'black',
    },
    txt2: {
        fontSize: 28,
        color: 'black',
        marginLeft: '35%'
    },
    txt3: {
        fontSize: 29,
        color: 'black',
        fontWeight: 'bold',
        opacity: 0.7,
      

    },
    txt4: {
        fontSize: 29,
        color: 'black',
        fontWeight: 'bold',
        opacity: 0.7,
        marginTop:10

    },
    img: {
        width: '81%',
        height: 10,
        marginLeft: 20

    }
})