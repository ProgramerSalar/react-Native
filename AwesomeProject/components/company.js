import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList, ScrollView } from 'react-native';
import { styles } from './style';


export const Manish = () => {

    const users = [
        {
            id: 1,
            name: 'manish',
        },
        {
            id: 2,
            name: 'manish',
        },
        {
            id: 3,
            name: 'manish',
        },
        {
            id: 4,
            name: 'manish',
        },
        {
            id: 5,
            name: 'manish',
        },

    ]
    return (
        <View>
            <FlatList
                data={users}
                renderItem={({ item }) => <UserData item={item}  /> }
            />
        </View>

    )
}





const UserData = (props) => {
    const item = props.item 
    return (
        <View>
            
            <Text>{item.name}</Text>
            
        </View>
    )
}

const ID = (props) => {
    const item = props.item 
    return (
        <View>
            
            <Text>{item.name}</Text>

        </View>
    )
}