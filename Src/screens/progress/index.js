import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Progress = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container1}>
                <Text style={styles.txt}>Hello,Sahil!</Text>
                <View style={styles.container2}>

                    <Image source={require('../../../assets/images/sort.png')} style={styles.img} />

                </View>

            </View>
            <View style={styles.container3}>
                <Text style={styles.txt1}> Your Progress</Text>

            </View>
            <View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.container4}>
                        <View style={styles.container5}>
                            <Image source={require('../../../assets/images/loading.png')} style={styles.img1} />
                            <Text style={styles.text2}>80%</Text>
                            <Text style={styles.txt3}>Working{'\n'}Hours</Text>
                            <Text style={styles.txt4}>Working Hours{'\n'} exceeded by 3 Hours</Text>

                        </View>

                        <View style={{ marginLeft: 20 }}>
                            <View style={styles.container6}>
                                <Image source={require('../../../assets/images/file.png')} style={styles.img1} />
                                <Text style={styles.text5}>82%</Text>
                                <Text style={styles.txt3}>Your{'\n'}Efficieny</Text>
                                <Text style={styles.txt4}>Excellent Result</Text>

                            </View>
                        </View>
                        <View style={{ marginLeft: 20 }}>
                            <View style={styles.container6}>
                                <Image source={require('../../../assets/images/open.png')} style={styles.img1} />
                                <Text style={styles.text5}>90%</Text>
                                <Text style={styles.txt3}>Tasks{'/n'} Completed</Text>
                                <Text style={styles.txt4}>Your GoodLuck{'\n'} export by 3 Hours</Text>

                            </View>
                        </View>
                        <View style={{ marginLeft: 20 }}>
                            <View style={styles.container7}>
                                <Image source={require('../../../assets/images/loading.png')} style={styles.img1} />
                                <Text style={styles.text2}>80%</Text>
                                <Text style={styles.txt3}>Working{'\n'}Hours</Text>
                                <Text style={styles.txt4}>Working Hours{'\n'} exceeded by 3 Hours</Text>
                            </View>

                        </View>

                    </View>


                </ScrollView>
            </View>
          
            <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 30, justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ fontSize: 25, color: 'black', fontWeight: 'bold', opacity: 0.5 }}>Tuesday,October 16</Text>
                <TouchableOpacity>
                <Image source={require('../../../assets/images/calendar.png')} style={styles.img2} />
</TouchableOpacity>
            </View>

               <ScrollView>
        
          
            <View style={{ flexDirection: 'row',marginTop:20}}>
                <View style={{ marginLeft: 30}}>
                    <Text style={{ fontSize: 18, color: 'black' }}>10:00 AM</Text>

                </View>
                <View style={{flex:1,alignItems:'center'}}>
               
                    <Pressable style={{backgroundColor:'#FACBCB',width:260,height:130,borderColor:'#FACBCB',borderRadius:10,elevation:5}}>
                    <Text style={{fontSize:15,color:'black',fontWeight:'800',marginTop:23,textAlign:'center'}}>Meeting with the front-end devlopers</Text>
                    <Text style={{fontSize:12,color:'red',marginLeft:30,marginTop:7,fontWeight:'800'}}>Flose Real Estate Project</Text>
                    <View style={{flexDirection:'row'}}>
                    
                    <Image source={require('../../../assets/images/inde.png')} style={{height:30,width:30,marginTop:10,marginLeft:20}} />
                    <Image source={require('../../../assets/images/woman.png')} style={{height:30,width:30,marginTop:10}} />
                    <Image source={require('../../../assets/images/sort.png')} style={{height:30,width:30,marginTop:10}} />
                    <Image source={require('../../../assets/images/businessman.png')} style={{height:30,width:30,marginTop:10}} />

                    <Text style={{width:30,height:30,backgroundColor:'white',borderRadius:30,marginLeft:3,paddingLeft:6,fontSize:21,color:'black',paddingTop:1,marginTop:10}}>6+</Text>
                    <Text style={{fontSize:8,color:'black',paddingLeft:24,paddingTop:10,marginTop:10}}>9:00AM-10:00PM</Text>

                  


              </View>
                      
                       </Pressable>
                    
                       
                       
                       
                       
                
                  </View>
                    </View>
              

                    <View style={{ flexDirection: 'row',marginTop:20}}>
                <View style={{ marginLeft: 30}}>
                    <Text style={{ fontSize: 18, color: 'black' }}>11:00 AM</Text>

                </View>
              
                <View style={{flex:1,alignItems:'center'}}>
               
                    <Pressable style={{backgroundColor:'#FACBCB',width:260,height:130,borderColor:'#FACBCB',borderRadius:10,elevation:5}}>
                    <Text style={{fontSize:15,color:'black',fontWeight:'800',marginTop:23,marginLeft:30}}>Internal Marketing Session</Text>
                    <Text style={{fontSize:12,color:'red',marginLeft:30,marginTop:7,fontWeight:'800'}}>Marketing Department</Text>
                    <View style={{flexDirection:'row'}}>
                    
                    <Image source={require('../../../assets/images/inde.png')} style={{height:30,width:30,marginTop:10,marginLeft:20}} />
                    <Image source={require('../../../assets/images/woman.png')} style={{height:30,width:30,marginTop:10}} />
                    <Image source={require('../../../assets/images/sort.png')} style={{height:30,width:30,marginTop:10}} />
                    <Image source={require('../../../assets/images/businessman.png')} style={{height:30,width:30,marginTop:10}} />

                    <Text style={{width:30,height:30,backgroundColor:'white',borderRadius:30,marginLeft:3,paddingLeft:6,fontSize:21,color:'black',paddingTop:1,marginTop:10}}>6+</Text>
                    <Text style={{fontSize:8,color:'black',paddingLeft:24,paddingTop:10,marginTop:10}}>11:00AM-12:00PM</Text>

                  


              </View>
                      
                       </Pressable>
                    
                       
                       
                       
                       
                
                  </View>

                  
                    </View>

                    <View style={{ flexDirection: 'row',marginTop:20}}>
                <View style={{ marginLeft: 30}}>
                    <Text style={{ fontSize: 18, color: 'black' }}>11:00 AM</Text>

                </View>
              
                <View style={{flex:1,alignItems:'center'}}>
               
                    <Pressable style={{backgroundColor:'#FACBCB',width:260,height:130,borderColor:'#FACBCB',borderRadius:10,elevation:5}}>
                    <Text style={{fontSize:15,color:'black',fontWeight:'800',marginTop:23,marginLeft:30}}>Internal Marketing Session</Text>
                    <Text style={{fontSize:12,color:'red',marginLeft:30,marginTop:7,fontWeight:'800'}}>Marketing Department</Text>
                    <View style={{flexDirection:'row'}}>
                    
                    <Image source={require('../../../assets/images/inde.png')} style={{height:30,width:30,marginTop:10,marginLeft:20}} />
                    <Image source={require('../../../assets/images/woman.png')} style={{height:30,width:30,marginTop:10}} />
                    <Image source={require('../../../assets/images/sort.png')} style={{height:30,width:30,marginTop:10}} />
                    <Image source={require('../../../assets/images/businessman.png')} style={{height:30,width:30,marginTop:10}} />

                    <Text style={{width:30,height:30,backgroundColor:'white',borderRadius:30,marginLeft:3,paddingLeft:6,fontSize:21,color:'black',paddingTop:1,marginTop:10}}>6+</Text>
                    <Text style={{fontSize:8,color:'black',paddingLeft:24,paddingTop:10,marginTop:10}}>11:00AM-12:00PM</Text>

                  


              </View>
                      
                       </Pressable>
                    
                       
                       
                       
                       
                
                  </View>

                  
                    </View>



                    <View style={{ flexDirection: 'row',marginTop:20}}>
                <View style={{ marginLeft: 30}}>
                    <Text style={{ fontSize: 18, color: 'black' }}>11:00 AM</Text>

                </View>
              
                <View style={{flex:1,alignItems:'center'}}>
               
                    <Pressable style={{backgroundColor:'#FACBCB',width:260,height:130,borderColor:'#FACBCB',borderRadius:10,elevation:5}}>
                    <Text style={{fontSize:15,color:'black',fontWeight:'800',marginTop:23,marginLeft:30}}>Internal Marketing Session</Text>
                    <Text style={{fontSize:12,color:'red',marginLeft:30,marginTop:7,fontWeight:'800'}}>Marketing Department</Text>
                    <View style={{flexDirection:'row'}}>
                    
                    <Image source={require('../../../assets/images/inde.png')} style={{height:30,width:30,marginTop:10,marginLeft:20}} />
                    <Image source={require('../../../assets/images/woman.png')} style={{height:30,width:30,marginTop:10}} />
                    <Image source={require('../../../assets/images/sort.png')} style={{height:30,width:30,marginTop:10}} />
                    <Image source={require('../../../assets/images/businessman.png')} style={{height:30,width:30,marginTop:10}} />

                    <Text style={{width:30,height:30,backgroundColor:'white',borderRadius:30,marginLeft:3,paddingLeft:6,fontSize:21,color:'black',paddingTop:1,marginTop:10}}>6+</Text>
                    <Text style={{fontSize:8,color:'black',paddingLeft:24,paddingTop:10,marginTop:10}}>11:00AM-12:00PM</Text>

                  


              </View>
                      
                       </Pressable>
                    
                       
                       
                       
                       
                
                  </View>

                  
                    </View>


                    
              

                    
            
                    </ScrollView>
             
                   
        </SafeAreaView>

    )
}

export default Progress;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    container1: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: '5%',
        marginLeft: 30,
        alignItems: 'center'
    },
    container2: {
        width: 70,
        height: 70,
        backgroundColor: 'white',
        borderRadius: 40,
        marginRight: 20
    },
    container3: {
        marginTop: 15,
    },
    container4: {
        flex: 1,
        width: '90%',
        marginTop: '10%',
        marginLeft: 30,
        flexDirection: 'row',

    },
    container5: {
        backgroundColor: '#F38CA6',
        width: 150,
        height: 230,
        borderRadius: 30,

    },
    container6: {
        backgroundColor: '#FFEA72',
        width: 150,
        height: 230,
        borderRadius: 30,

    },
    container7: {
        backgroundColor: '#F38CA6',
        width: 150,
        height: 230,
        borderRadius: 30,

    },
    img: {
        width: 70,
        height: 70,
        alignSelf: 'center'

    },
    img1: {
        width: 50,
        height: 50,
        alignSelf: 'center',
        marginTop: 30
    },
    img2: {
        width: 40,
        height: 40,
        marginRight: 20,
        opacity: 0.5
    },
    txt: {
        fontSize: 40,
        color: 'black'
    },
    txt1: {
        fontSize: 19,
        color: 'black',
        fontWeight: '600',
        marginLeft: 30,
    },
    text2: {
        fontSize: 22,
        color: 'black',
        textAlign: 'center'
    },
    txt3: {
        fontSize: 23,
        color: 'white',
        fontWeight: '900',
        textAlign: 'center'
    },
    txt4: {
        fontSize: 22,
        color: 'black',
        fontWeight: '200',
        textAlign: 'center'
    },
    text5: {
        fontSize: 22,
        color: 'black',
        textAlign: 'center'
    },
})