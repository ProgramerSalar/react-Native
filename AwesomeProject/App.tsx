import React, { useEffect, useMemo, useState } from 'react';
import { View, Text, Button, StyleSheet, Modal, Pressable, StatusBar, Platform, TextInput } from 'react-native';
// import { Manish } from './components/company';

export const App = () => {
  const [data, setData] = useState(undefined)


  const getAPIData = async () => {
    // api call 
    // console.warn('hello')
    const url = "https://jsonplaceholder.typicode.com/posts/1"
    let result = fetch(url)
    result = await (await result).json()
    // console.log(result)
    setData(result)
  }

  useEffect(() => {
    getAPIData()
  },[])




  return(
    <View>
      <Text style={{fontSize:40}}>
        Api Call
      </Text>
      {
        data ?<View>
          <Text>{data.title}</Text>
        </View>:null
      }
    </View>
  )


}
  