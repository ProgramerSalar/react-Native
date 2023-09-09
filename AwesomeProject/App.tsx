import React, { useEffect, useMemo, useState } from 'react';
import { View, Text, Button, StyleSheet, Modal, Pressable, StatusBar, Platform, TextInput, ScrollView, FlatList } from 'react-native';
// import { Manish } from './components/company';


export const App = () => {
  const [data, setData] = useState([])

  const getAPIData = async() => {
    // console.warn('hello')
    const url = 'https://jsonplaceholder.typicode.com/posts/'
    let result = await fetch(url)
    result = await result.json()
    setData(result)

  }

  useEffect(() => {
    getAPIData()
  })

  return(
    <View>
      <Text>FlatList with Api data</Text>
      {
        data.length ? 
        <FlatList 
        data = {data}
        renderItem={({item}) => 

        <View>
          <Text style={{fontSize:20}}>ID:{item.id}</Text>
          <Text style={{fontSize:15}}>Title: {item.title}</Text>
          <Text style={{fontSize:10}}>BOdy: {item.body}</Text>
        </View>
      
      }
        /> 
        : null
      }
    </View>
  )
}
