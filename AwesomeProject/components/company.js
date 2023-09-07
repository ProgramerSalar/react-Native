import React, { useState, Component, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList, ScrollView, SectionList } from 'react-native';
import { styles } from './style';
import Student from './student';





export const Manish = () => {
    const [show, setShow] = useState(true)

    return(
        <View>
            <Text>Hello</Text>
            <Button title='Tongle' onPress={() => setShow(!show)}></Button>
            {
                show ? <User/> : null
            }
            
        </View>
    )
}


const User = () => {

    let timer = setInterval(() => {
        console.warn('Timer')

    },2000)

    useEffect(() => 
    {
        return()=> clearInterval(timer)
    }
    )

    return(
        <View>
            <Text>Student</Text>
        </View>
    )

}