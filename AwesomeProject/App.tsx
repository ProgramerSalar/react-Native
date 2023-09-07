import React, { useMemo, useState } from 'react';
import { View, Text, Button, StyleSheet, Modal } from 'react-native';
import { Manish } from './components/company';





export const App = () => {
  const [showModel, setshowModel] = useState(false)
  return (
    <View style={styles.main}>
      <Modal
        transparent={true}
        visible={showModel}
        animationType='fade'
      >
        <View style={styles.centerView}>
          <View style={styles.modelView}>
            <Text style={styles.textStyle}>Hello world</Text>
            <Button title='close button' onPress={() => setshowModel(false)}></Button>
          </View>
        </View>
      </Modal>


      <View style={styles.buttonView}>
        <Button title='OPen Model' onPress={() => setshowModel(true)}></Button>
      </View>

    </View>
  )
}


const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  buttonView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modelView: {
    backgroundColor: 'skyblue',
    padding: 40,
    borderRadius: 20,
    shadowColor: 'black',  // shadow color is dependent on elevation
    elevation: 5,


  },
  textStyle: {
    fontSize: 30,

  }



})


