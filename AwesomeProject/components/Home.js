import { View, Text, Button, StyleSheet, Modal, Pressable, StatusBar, Platform, TextInput } from 'react-native';
import React, { useMemo, useState } from 'react';




export const Home = (props) => {
    // const name = 'anil'
    // const age = 20

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 40 }}>Home Screen</Text>
        <TextInput onChangeText={(text) => setName(text)} placeholder='Enter Name' style={{fontSize:30, borderColor:'black', borderWidth:2}}></TextInput>
        <TextInput onChangeText={(text) => setAge(text)} placeholder='Enter Age' style={{fontSize:30, borderColor:'black', borderWidth:2}}></TextInput>
        <Button title='Go To Login' onPress={() => props.navigation.navigate('Login',{
            name, age,
        })}></Button>
      </View>
    )
  }
  