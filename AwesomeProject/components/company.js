import React, { useState } from 'react';
import {View, Text, StyleSheet, TextInput, Button, FlatList} from 'react-native';
import { styles } from './style';


export const List = () => {

    const users = [
        {
            id:1, 
            name:"manish", 

        },
        {
            id:2, 
            name:"Suresh",
        },
        {
            id:3,
            name:"Anilkumar",
        }
    ]
    return (
        <View>
            <FlatList data={users} renderItem={({item}) => <Text>{item.name}</Text>}></FlatList>
        </View>
    )
}