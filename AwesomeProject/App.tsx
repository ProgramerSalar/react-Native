import React, { useMemo, useState } from 'react';
import { View, Text, Button, StyleSheet, Modal, Pressable, StatusBar } from 'react-native';
import { Manish } from './components/company';





export const App = () => {
  const [hide, setHide] = useState(false)
  const [barstyle, setBarStyle] = useState('default')
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="orange"
        barStyle={barstyle}
        hidden={hide}
      />
      <Button title='Toggle status Bar' onPress={() => setHide(!hide)}></Button>
      <Button title='update style' onPress={() => setBarStyle('dark-content')}></Button>


    </View>
  )

}


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    marginTop:10,
  }
})

