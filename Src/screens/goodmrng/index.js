import { StyleSheet, Text, Image, View, Dimensions, ScrollView } from 'react-native'
import React from 'react'
const { width, height } = Dimensions.get("screen");


const Goodmrng = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'lightgreen' }}>
            <View style={{ flex: 0.2, backgroundColor: 'lightgreen' }}>
                <View style={{ flexDirection: 'row', marginTop: 30, marginLeft: 30 }}>
                    <View style={{ backgroundColor: 'white', width: 60, height: 60, borderRadius: 50, justifyContent: 'center', alignItems: 'center', elevation: 10 }}>
                        <Image source={require('../../../assets/images/jsss.png')} style={{ width: 60, height: 60 }} />

                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 16, marginLeft: 60 }}>
                        <Image source={require('../../../assets/images/downloads.png')} style={{ width: 20, height: 20, opacity: 0.4 }} />
                        <Text style={{ fontSize: 12, color: 'black', marginTop: 2, fontWeight: 'bold', marginLeft: 10, opacity: 0.4 }}>16/Oct/2001</Text>
                        <Image source={require('../../../assets/images/greaterthan.png')} style={{ width: 20, height: 20, marginLeft: 8, opacity: 0.4 }} />

                    </View>
                    <View style={{ marginLeft: 60, marginTop: 10, backgroundColor: 'white', width: 40, height: 40, borderRadius: 40, justifyContent: "center", alignItems: 'center', elevation: 10 }}>
                        <Image source={require('../../../assets/images/addds.png')} style={{ width: 40, height: 40 }} />
                    </View>

                </View>
            </View>


            <View style={{ flex: 1, backgroundColor: 'white', borderTopLeftRadius: 10, borderTopRightRadius: width / 2 }}>
                <View style={{ marginTop: '10%', marginLeft: 30 }}>
                    <Text style={{ fontSize: 28, color: 'black', fontWeight: 'bold' }}>Good Morning! Sahil Singh</Text>
                    <Text style={{ fontSize: 14, opacity: 0.6, color: 'black' }}>You have 5 Session today</Text>

                </View>
                <View style={{ marginTop: '12%', marginLeft: 30 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ backgroundColor: 'pink', width: 70, height: 70, borderRadius: 50, justifyContent: 'center', alignItems: 'center', elevation: 12 }}>
                            <Text style={{ fontSize: 22, color: 'black' }}>9</Text>

                        </View>
                        <View style={{ marginLeft: 20 }}>
                            <View style={{ backgroundColor: '#EAEA04', width: 70, height: 70, borderRadius: 50, justifyContent: 'center', alignItems: 'center', elevation: 12 }}>
                                <Text style={{ fontSize: 22, color: 'black' }}>10</Text>
                            </View>
                        </View>
                        <View style={{ marginLeft: 20 }}>
                            <View style={{ backgroundColor: '#10EB7E', width: 70, height: 70, borderRadius: 50, justifyContent: 'center', alignItems: 'center', elevation: 12 }}>
                                <Text style={{ fontSize: 22, color: 'black' }}>11</Text>
                            </View>
                        </View>
                        <View style={{ marginLeft: 20 }}>
                            <View style={{ backgroundColor: '#D4E5DC', width: 70, height: 70, borderRadius: 50, justifyContent: 'center', alignItems: 'center', elevation: 12 }}>
                                <Text style={{ fontSize: 22, color: 'black' }}>12</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ marginTop: '4%', marginLeft: 30 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ marginLeft: 20 }}>
                            <Text style={{ fontSize: 22, color: 'black' }}>Wed</Text>
                        </View>

                        <View style={{ marginLeft: 55 }}>
                            <Text style={{ fontSize: 22, color: 'black' }}>Thu</Text>

                        </View>
                        <View style={{ marginLeft: 60 }}>
                            <Text style={{ fontSize: 22, color: 'black' }}>Fri</Text>

                        </View>
                        <View style={{ marginLeft: 65 }}>

                            <Text style={{ fontSize: 22, color: 'black' }}>Sat</Text>

                        </View>
                    </View>
                </View>
                <ScrollView>
                <View style={{ marginTop: '10%', marginLeft: 39 }}>
                    <Text style={{ fontSize: 31, color: 'black', fontWeight: 'bold', opacity: 0.5 }}>Upcoming Sessions</Text>
                  
                  
                 
                   <View>
                    <View style={{ marginTop: 20 }}>
                        <View style={{ backgroundColor: 'white', width: '90%', height:200, borderRadius: 10, shadowColor: "#000", shadowOffset: { width: 0, height: 5 }, shadowOpacity: 0.34, shadowRadius: 6.27, elevation: 10}}>
                            <View style={{ flexDirection: 'row',marginTop:10,marginLeft:8 }}>
                                <Image source={require('../../../assets/images/bulid.png')} style={{ width: 60, height: 60 }} />
                                <View style={{ marginLeft: 9,marginTop:4 }}>
                                    <Text style={{ fontSize: 18, color: 'black', fontWeight: '700',opacity:0.6 }}>Sahil Singh</Text>
                                    <View style={{flexDirection:'row',marginTop:10,flex:1,width:'110%'}}>
                                    <Text style={{fontSize:12,fontWeight:'400',color:'black'}}>16 yo</Text>
                                    <Text style={{fontSize:12,fontWeight:'400',color:'black',marginLeft:14}}>Depression</Text>
                                    <Text style={{fontSize:12,fontWeight:'400',color:'black',marginLeft:14}}>Tasks Med</Text>

                                 
                                   
                                </View>
                                </View>
                                <View style={{marginLeft:'11%',width:'10%',height:30}}>
                                <Image source={require('../../../assets/images/check.png')} style={{ width: 28, height:28}} />

                     

                        </View>
                  
                            </View>
                            <View style={{marginTop:60,alignSelf:'center'}}>
                            <Text style={{fontSize:15,fontWeight:'bold',color:'black',marginLeft:14}}>11 Feb 2021         09:00-09:30</Text>

                            </View>
                        </View>
                
                    </View>

                    <View style={{ marginTop: 30 }}>
                        <View style={{ backgroundColor: 'white', width: '90%', height:200, borderRadius: 10, shadowColor: "#000", shadowOffset: { width: 0, height: 5 }, shadowOpacity: 0.34, shadowRadius: 6.27, elevation: 10}}>
                            <View style={{ flexDirection: 'row',marginTop:10,marginLeft:8 }}>
                                <Image source={require('../../../assets/images/bulid.png')} style={{ width: 60, height: 60 }} />
                                <View style={{ marginLeft: 9,marginTop:4 }}>
                                    <Text style={{ fontSize: 18, color: 'black', fontWeight: '700',opacity:0.6 }}>Sahil Singh</Text>
                                    <View style={{flexDirection:'row',marginTop:10,flex:1,width:'110%'}}>
                                    <Text style={{fontSize:12,fontWeight:'400',color:'black'}}>16 yo</Text>
                                    <Text style={{fontSize:12,fontWeight:'400',color:'black',marginLeft:14}}>Depression</Text>
                                    <Text style={{fontSize:12,fontWeight:'400',color:'black',marginLeft:14}}>Tasks Med</Text>

                                 
                                   
                                </View>
                                </View>
                                <View style={{marginLeft:'11%',width:'10%',height:30}}>
                                <Image source={require('../../../assets/images/check.png')} style={{ width: 28, height:28}} />

                     

                        </View>
                  
                            </View>
                            <View style={{marginTop:60,alignSelf:'center'}}>
                            <Text style={{fontSize:15,fontWeight:'bold',color:'black',marginLeft:14}}>11 Feb 2021         09:00-09:30</Text>

                            </View>
                            
                        </View>
                    
                      
                    </View>
                
                    </View>
                
                </View>
            
                
                </ScrollView>
            </View>

        
          
        </View>
    )
}

export default Goodmrng;

const styles = StyleSheet.create({})