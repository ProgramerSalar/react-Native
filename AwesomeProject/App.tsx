import React, { useEffect, useMemo, useState } from 'react';
import { View, Text, Button, StyleSheet, Modal, Pressable, StatusBar, Platform, TextInput, ScrollView, FlatList, Alert } from 'react-native';
// import { Manish } from './components/company';



export const App = () => {
    const [data, setData] = useState([])
    
    const searchUser =async (text) => {
        // console.warn(text)
        const url = `http://10.0.2.2:3000/users?q=${text}`
        // console.warn(url)
        let result = await fetch(url)
        result = await result.json()
        if(result){
            setData(result)

        }
    }



    return(
        <View style={{flex:1}}>
            <TextInput
            placeholder='Search'
            style={{borderColor:'skyblue', borderWidth:1, margin:15, fontSize:20}}
            onChangeText={(text)=>searchUser(text)}
            ></TextInput>
            {
                data.length ? 
                data.map((item) => <View style={{padding:10, flexDirection:'row', justifyContent:'space-around'}}>
                    <Text style={{fontSize:20}}>{item.name}</Text>
                    <Text style={{fontSize:20}}>{item.age}</Text>
                    <Text style={{fontSize:20}}>{item.email}</Text>
                </View>):null
            }
            
        </View>
    )


}
    