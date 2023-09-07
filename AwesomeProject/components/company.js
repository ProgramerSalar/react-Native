import React, { useState, Component, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList, ScrollView, SectionList, TouchableHighlight } from 'react-native';
// import { styles } from './style';
import Student from './student';



export const Manish = () => {
    return (
        <View>
            <Text>Hello</Text>
            <TouchableHighlight>
                <Text style={[styles.button, styles.sucess]}>Button</Text>
            </TouchableHighlight>
           
        </View>
    )
}




const styles = StyleSheet.create({

    button:{
        backgroundColor:'red',
        color:'white',
        fontSize:24,
        textAlign:'center',
        padding:10,
        margin:10,
        borderRadius:10,
        // shadowColor:'yellow',
        // elevation:10,
        // shadowOpacity:1
    }, 
    sucess:{
        backgroundColor:'green',
        color:'white',
        fontSize:24,
        textAlign:'center',
        padding:10,
        margin:10,
        borderRadius:10,
        
    }
})