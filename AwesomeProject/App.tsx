import React, { useEffect, useMemo, useState } from 'react';
import { View, Text, Button, StyleSheet, Modal, Pressable, StatusBar, Platform, TextInput, ScrollView } from 'react-native';
// import { Manish } from './components/company';


export const App = () => {

  const [data, setData] = useState([])

  const getAPIData = async() => {
    const url="https://jsonplaceholder.typicode.com/posts/"
    let result = await fetch(url)
    result = await result.json()
    setData(result)
  }


  useEffect(() => {
    getAPIData()
  },[])


  return(
    <ScrollView>
      <Text style={{fontSize:40}}>
        List with API Call
      </Text>
      {
        data.length ? 
        data.map((item) => 
        
            <View>
            <Text style={{fontSize:30}}>ID: {item.id}</Text>
            <Text style={{fontSize:10}}>ID: {item.title}</Text>

            </View>
           
          
        )
        :null
      }
    </ScrollView>
  )
}