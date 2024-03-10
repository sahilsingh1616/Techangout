import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const Props1 = () => {
  const [result, setresult] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setresult(false);
    }, 4000);
  }, []);

  return (
    <View>
      {
        setresult == true &&
        <ActivityIndicator size={'large'} />
      }
    </View>
  )
};

export default Props1;

const styles = StyleSheet.create({})