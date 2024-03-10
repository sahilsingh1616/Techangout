import { StyleSheet, Text, View ,SafeAreaView,FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
const DATA = [
    {
      id: '1',
      title: 'First Item',
    },
    {
      id: '2',
      title: 'Second Item',
    },
    {
      id: '3',
      title: 'Third Item',
    },
    {
        id: '4',
        title: 'fourth Item',
      },
      {
        id: '5',
        title: 'fifth Item',
      },
      {
        id: '6',
        title: 'fifth Item',
      },
  

  ];

  const Item = ({title}) => (
    <TouchableOpacity>
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
    </TouchableOpacity>
  );


const FlatListExample1 = ({id,name}) => {
    console.log(id)
    console.log(name)
  return (

    <SafeAreaView style={styles.container}>
    <FlatList
      data={DATA}
      horizontal
      renderItem={({item}) => <Item title={item.title}/>}
      keyExtractor={item => item.id}


    />
  </SafeAreaView>
  )
}

export default FlatListExample1

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        backgroundColor:'white',
      
      },
      item: {
        backgroundColor: 'orange',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius:30
       
      },
      title: {
        fontSize: 32,
      },
    });
    