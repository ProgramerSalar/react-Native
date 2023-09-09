import React, { useMemo, useState } from 'react';
import { View, Text, Button, StyleSheet, Modal, Pressable, StatusBar, Platform, TextInput } from 'react-native';
// import { Manish } from './components/company';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from './components/Login';
import { Home } from './components/Home';

const Stack = createNativeStackNavigator()

export const App = () => {
  const btnAction = () => {
    console.warn('hello')
  }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{title:'login',
      headerStyle:{
        backgroundColor:'blue',
        
      },
      headerTitleStyle:{
        fontSize:30,
        color:'green',
      },
      headerTintColor:'green',
      // headerTitle:() => <Button title='Left'></Button>
      
    }} >
       
        <Stack.Screen name='Home' component={Home}
        options={{
          headerTitle:()=><Button title='Left' onPress={btnAction}></Button>,
          headerRight:()=><Header/>

        }}  />
        <Stack.Screen name='Login' component={Login} 
        options={{title:'login',
      headerStyle:{
        backgroundColor:'blue',
        
      },
      headerTitleStyle:{
        fontSize:30,
        color:'green',
      },
      headerTintColor:'green',
      headerTitle:() => <Button title='Left'></Button>
    }} 
        
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}



const Header = () => {
  return(
    <TextInput placeholder='hello' style={{ fontSize:30}}/>
  )
}









