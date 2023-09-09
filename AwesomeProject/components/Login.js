
import { View, Text, Button, StyleSheet, Modal, Pressable, StatusBar, Platform, TextInput } from 'react-native';
import React, { useMemo, useState } from 'react';


export const Login = (props) => {
    console.warn(props.route.params)
    const {name, age} = props.route.params
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 40 }}>Login Screen</Text>
        <Text>Name: {name}</Text>
        <Text>Age: {age}</Text>
      </View>
    )
  }
  
  
  