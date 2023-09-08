import React, { useMemo, useState } from 'react';
import { View, Text, Button, StyleSheet, Modal, Pressable, StatusBar, Platform } from 'react-native';
import { Manish } from './components/company';






export const App = () => {
  const [show, setShow] = useState(false)
  return(
    <View style={styles.container}>
      {
        show ? 
        <View style={styles.modal}>
        <View style={styles.body}>
        <Text>Hello World</Text>
          <Button title='Close' onPress={() => setShow(false)}></Button>
        
        </View>

      </View>
      : null

      }
      <Button title='OPen' onPress={() => setShow(true)}></Button>
    </View>
  )
}
 

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'flex-end'

  },
  modal:{
    flex:1,
    backgroundColor:'green',
    justifyContent:'center',
    alignItems:'center',
  },
  body:{
    backgroundColor:'white',
    height:300,
    width:300,
   justifyContent:'space-around',
    padding:20,


  }

})