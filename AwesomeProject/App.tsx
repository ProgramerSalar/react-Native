import React, { useEffect, useMemo, useState, useRef } from 'react';
import { View, Text, Button, StyleSheet, Modal, Pressable, StatusBar, Platform, TextInput, ScrollView, FlatList, Alert } from 'react-native';
// import { styles } from './components/style';
// import { Manish } from './components/company';



export const App = () => {


    const input = useRef()
    const updateInput = () => {
        // console.warn('call')
        input.current.focus()
        input.current.setNativeProps({
            fontSize:30,
            color:'red'
        })
    }


    
    
    return(
        <View style={styles.containter}>
            <TextInput ref={input} style={styles.input} placeholder='Enter Name'></TextInput>
            <TextInput style={styles.input} placeholder='Enter Password' ></TextInput>
            <Button title='update Input' onPress={updateInput} ></Button>
        </View>
    )


}
    


const styles = StyleSheet.create({
    containter:{
        flex:1,
        padding:16
    },
    input:{
        borderColor:'skyblue',
        borderWidth:2,
        margin:10,
    }
    
})