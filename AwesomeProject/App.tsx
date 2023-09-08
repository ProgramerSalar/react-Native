import React, { useMemo, useState } from 'react';
import { View, Text, Button, StyleSheet, Modal, Pressable, StatusBar, Platform } from 'react-native';
import { Manish } from './components/company';





export const App = () => {
  return(
    <View>
      <Text>Platform: {Platform.OS}</Text>
      {
        
          Platform.OS == 'android'  ? 
          <View><Text>Platform: {Platform.OS}</Text></View>
          
          :
          <View><Text>Platform: {Platform.OS}</Text></View>

      

      }
      <Text>{JSON.stringify(Platform)}</Text>
    </View>
  )
}
 

