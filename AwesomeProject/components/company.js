import React, { useState, Component, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList, ScrollView, SectionList } from 'react-native';
import { styles } from './style';
import Student from './student';


export const Manish = () => {
    const [count, setCount] = useState(0)
    useEffect(() =>{
        console.warn('hello')
    }, [] // bracket is life cycles 
        
    )
    return (
        <View>
            <Text>
                Hello {count}
            </Text>

            <Button title='update Count' onPress={() => setCount(count+1)}></Button>
        </View>
    )
}