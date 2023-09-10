import React, { useEffect, useMemo, useState } from 'react';
import { View, Text, Button, StyleSheet, Modal, Pressable, StatusBar, Platform, TextInput, ScrollView, FlatList, Alert } from 'react-native';
// import { Manish } from './components/company';



export const App =  () => {

    const [name, setName] = useState('')
    const [age, setAge] = useState(0)
    const [email, setEmail] = useState('')

    const saveData = async () => {
        console.warn(name,age,email)

        const url = "http://10.0.2.2:3000/users"
        let results = await fetch(url, {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({name,email,age})
        })
        results = await results.json()
        if (results){
            console.warn("data added")
        }
    }

    
        
        











    return(
        <View>
            <Text style={{fontSize:40, alignItems:'center', textAlign:'center'}}>Form</Text>
            <TextInput placeholder='Enter Name' style={styles.input} value={name} onChangeText={(text) => setName(text)}></TextInput>
            <TextInput placeholder='Enter Age' style={styles.input} value={age} onChangeText={(text) => setAge(text)}></TextInput>
            <TextInput placeholder='Enter Email' style={styles.input} value={email} onChangeText={(text) => setEmail(text)}></TextInput>
            <Button title='Save Data' onPress={saveData}></Button>
            
            
        </View>
    )
  
}


const styles = StyleSheet.create({
    input:{
        borderColor:'skyblue',
        borderWidth:1,
        margin:20,
        borderRadius:10,
    }
})