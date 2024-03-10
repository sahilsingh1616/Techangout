import { StyleSheet, Text, View ,Button} from 'react-native'
import { useState } from 'react';

const Props = ({setCount,count}) => {
  
  
    const handleIncrement = () => {
      setCount(count + 1);
    };
  
    const handleDecrement = () => {
      if(count<=0){
         setCount(0)
      }
      else{
        setCount(count - 1);
      }
     
    };
  
    return (
      <View style={{justifyContent:'center',alignItems:'center',marginTop:'30%'}}>
        <Text>Count: {count}</Text>
        <Button title="Increment" onPress={handleIncrement} />
       <View style={{marginTop:20}}>
        <Button title="Decrement" onPress={handleDecrement} />
      </View>
      </View>
    );
  };
  

export default Props

const styles = StyleSheet.create({

})