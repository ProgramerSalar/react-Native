import React, { useMemo, useState } from 'react';
import { View, Text, Button, StyleSheet, Modal, Pressable } from 'react-native';
import { Manish } from './components/company';





export const App = () => {
  return(
    <View style={styles.main}>
      <Pressable 
      // onPress={() => console.warn('Normal press')}
      // onLongPress={() => console.warn("long press")}
      onPressIn={() => console.warn('on Press in')}
      onPressOut={() => console.warn('on press out')}
      >
        <Text style={styles.pressablebtn}>Pressable</Text>
      </Pressable>
      
    </View>
  )



}

const styles = StyleSheet.create({
  main:{
    flex:1,
    justifyContent:'center',
    // alignItems:'center'

  },
  pressablebtn:{
    backgroundColor:'green',
    color:'white',
    margin:10,
    borderRadius:10,
    fontSize:20,     // increase the text size 
    shadowColor:'black',
    elevation:5,
    height:50,
    textAlign:'center',
    



  }
})


  