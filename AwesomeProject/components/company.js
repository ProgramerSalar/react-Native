import React, { useState, Component, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList, ScrollView, SectionList } from 'react-native';
import { styles } from './style';
import Student from './student';


export const Manish = () => {
    const [count, setCount] = useState(0)
    const [data, setData] = useState(100)


    
    // useEffect(() => {
    //     console.warn(count)
    //     console.warn(data)
       
    // },[count, data]);


    // useEffect(() => {
    //     console.warn(data)
    // },[data])








    return(
        <View>
            <Text>Hello:{count}, Data:{data}</Text>
            <Button title='ok' onPress={() => setCount(count+1)}></Button>
            <Button title='ok' onPress={() => setData(data+1)}></Button>

            <User info={{data, count}}/>
        </View>
    )
}



const User = (props) => {
    useEffect(() => {
        console.warn(props.info)
    },[props.info.data, props.info.count])

    return(
        <View>
            <Text>data: {props.info.data}</Text>
            <Text>count:{props.info.count} </Text>
        </View>
    )
}