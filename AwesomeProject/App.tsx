import React, { useEffect, useMemo, useState } from 'react';
import { View, Text, Button, StyleSheet, Modal, Pressable, StatusBar, Platform, TextInput, ScrollView, FlatList } from 'react-native';
// import { Manish } from './components/company';



export const App = () => {
    const [data, setData] = useState([])


    const getAPIData = async () => {
        // console.warn("function called")
        const url = "http://10.0.2.2:3000/users"     // replace to http://192.168.1.33:3000/users this url to http://10.0.2.2:3000/users 
        let results = await fetch(url)
        results = await results.json()
        // console.warn(results)
        setData(results)
        
    }

    useEffect(() => {
        getAPIData()

    },[])









    return(
        <View>
            <Text style={{fontSize:40}}>Call json server API</Text>
            {
                data.length ? 
                data.map((item) => 
                <View>
                    <Text>Name: {item.name}</Text>
                    <Text>AGE: {item.age}</Text>
                    <Text>EMail: {item.email}</Text>

                </View>
                ): null
            }
        </View>
    )
  
}