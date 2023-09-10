import React, { useEffect, useMemo, useState } from 'react';
import { View, Text, Button, StyleSheet, Modal, Pressable, StatusBar, Platform, TextInput, ScrollView, FlatList } from 'react-native';
// import { Manish } from './components/company';



export const App = () => {


    const saveAPIData = async () => {
        // console.warn("Test")
        const data = {
            name:"Samkumar",
            age:12,
            email:"samkumar@gmail.com"
        }
        const url = "http://10.0.2.2:3000/users"
        let result = await fetch(url,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        })
        result =await result.json()
        console.warn(result)
        
        

    }









    return(
        <View>
            <Text style={{fontSize:40}}>Call json server API</Text>
            <Button title='Save Data' onPress={saveAPIData}></Button>
            
        </View>
    )
  
}