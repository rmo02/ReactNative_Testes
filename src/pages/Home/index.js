import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Home() {
  return (
    <View style={StyleSheet.container}>
        <Text style={StyleSheet.text}>Home</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:{
        fontSize:25,
        fontWeight:'bold'
    }
  });
  