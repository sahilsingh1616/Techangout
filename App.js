// import { StyleSheet, Text, View } from 'react-native'
// import React, { useState,useContext, createContext } from 'react'


// let S="Bharat"
//  export const MyContext=createContext();

// import Search from './Src/screens/search';
// import Register from './Src/screens/register';
// import Delivery from './Src/screens/delivery';
// import Progress from './Src/screens/progress';
// import Favourite from './Src/screens/favourite'
// import Therapy from './Src/screens/therapy';
// import Session from './Src/screens/session';
// import Goodmrng from './Src/screens/goodmrng';
// import Login from './Src/screens/login';
// import  ExampleState from'./Src/screens/exampleState';
// import FlatListExample from './Src/screens/flatListExample';
// import FlatListExample1  from'./Src/screens/flatListExample1';
// import Props from './Src/screens/props';
// import Props2 from './Src/screens/props2';
// import ReactNativeExample1 from './Src/screens/reactnativeexample/index1';
// import ReactNativeExample2 from './Src/screens/reactnativeexample/index2';
// import Props1 from './Src/screens/props/index1';
// import ReactNativeExample3 from './Src/screens/reactnativeexample/index3';
// import SignUp from './Src/screens/attachment';
// import ImageExample from './Src/screens/reactnativeexample/index4';
// //import ReactNativeExample1 from './Src/screens/ReactNativeExample;
// import PractiseExample from './Src/screens/reactnativeexample/index5';
// import UserefExample from './Src/screens/reactnativeexample/index6';
// import ImageExample1 from './Src/screens/reactnativeexample/index7';
// import AsyncExample from './Src/screens/reactnativeexample/index8';
// import AsyncExample2 from './Src/screens/reactnativeexample/index9';
// import FirstPage from './Src/screens/cyarbobo/index';
// import Keyword from './Src/screens/keyword';
// import KeywordPage from './Src/screens/keyword';
// import Navigation from './Src/screens/navigation';
// import NavigationExample from './Src/screens/navigation';
// import PropsDrillingA from './Src/screens/propsdrilling';
// import { create } from 'react-test-renderer';

// const App = () => {
//   // const name="sahil"
//   //  const [count,setCount]=useState(0);
//   // return (
//   //<Home/>
//  //<Search/>
// // <Register/>
//  //<Delivery/>
// // <Favourite/>
//  //<Progress/>
// //<Therapy/>
//  //<Session/>
// // <Goodmrng/>
// //  <ExampleState/>
// // // <Shadow/>
// //<FlatListExample/>`
// //<FlatListExample1 id={name} name="singg" />

// //  <View>
// //   <Props setCount={setCount} count={count}/>

// //   <Props2 count={count}/>
// // </View>
  

// //<ReactNativeExample2/>
// //<Props1/>

// //<ReactNativeExample3/>
// //<ReactNativeExample3/>
// //<SignUp/>
// //<ImageExample/>

// //<PractiseExample/>
// //<UserefExample/>
// //<ImageExample1/>

// //<AsyncExample/>
// //<AsyncExample1/>
// //<AsyncExample2/>
// //  <FirstPage/> 
 
// //  <KeywordPage/>
// //  <PropsDrillingA/>


// return(
//   // {/* <MyContext.Provider value={{S}}> */}
// //   <MyContext.Provider value={S} >
// //   <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'white'}}>

// // <PropsDrillingA/>
// // </View>
// // </MyContext.Provider>
// // // </MyContext.Provider>
// // ) 
 
// <Keyword/>
//   )

// };

// export default App

// const styles = StyleSheet.create({})




import { StyleSheet, Text, View } from 'react-native'
import React, { createContext,useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import KeywordPage from './Src/screens/keyword';
import NavigationExample from './Src/screens/navigation';
import ArrayExample from './Src/screens/arrayExample';
import ImagePickkerExample from './Src/screens/imagepickerexample';
import FlatListImageExample from './Src/screens/imagepickerFlatlistexample';
import AnotherExample from './Src/screens/imagepickerFlatlistexample/index1';
import PropsDrilling from './Src/screens/propsdrilling';
import PropsDrillingA from './Src/screens/propsdrilling';
import { MyContext } from './Src/screens/navigation/index2';



 export const Stack =createNativeStackNavigator();
 





const App = () => {
  const [mix, setMix] = useState('Sahil')
  const [six, setSix] = useState('Manav')

  return (

    <MyContext.Provider value={{mix,setMix,six,setSix}}>
<NavigationContainer>
  <Stack.Navigator>

  
      <Stack.Screen name='keyword' component={KeywordPage}/>
    <Stack.Screen name='navigation' component={NavigationExample}/>  
    {/* <Stack.Screen name='arrayexample' component={ArrayExample}/> */}
    {/* <Stack.Screen name='imagepickerexample' component={ImagePickkerExample}/> */}
    {/* <Stack.Screen name='imagepickerFlatlistexample' component={AnotherExample}/> */}
    {/* <Stack.Screen name='FlatListImageExample' component={FlatListImageExample}/> */}
   {/* <Stack.Screen name='propsdrilling' component={PropsDrillingA}/> */}


  </Stack.Navigator>
</NavigationContainer>

</MyContext.Provider>
  )
}

export default App;

const styles = StyleSheet.create({})

