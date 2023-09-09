import React, { useMemo, useState } from 'react';
import { View, Text, Button, StyleSheet, Modal, Pressable, StatusBar, Platform, TextInput } from 'react-native';
// import { Manish } from './components/company';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator()

export const App = () => {
  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Login' component={Login} />
        <Tab.Screen name='Signup' component={Signup} />
      </Tab.Navigator>

    </NavigationContainer>
  )

}
 



const Login = () => {
  return(
    <View>
      <Text>
        Login
      </Text>
    </View>
  )
}

const Signup = () => {
  return(
    <View>
      <Text>
        Signup
      </Text>
    </View>
  )
}







