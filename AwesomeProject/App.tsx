import React, { useEffect, useMemo, useState } from 'react';
import { View, Text, Button, StyleSheet, Modal, Pressable, StatusBar, Platform, TextInput, ScrollView, FlatList, Alert } from 'react-native';
// import { Manish } from './components/company';



export const App = () => {
    const [data, setData] = useState([])

    const getAPIData = async () => {
        // console.warn("hello")
        const url = "http://10.0.2.2:3000/users"
        let results = await fetch(url)
        results = await results.json()
        console.warn(results)
        if (results) {
            setData(results)

        }
    }

    useEffect(() => {
        getAPIData()
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.dataWrapper}>
                <View style={{ flex: 1}}><Text>Name</Text></View>
                <View style={{ flex: 2 }}><Text>Age</Text></View>
                <View style={{ flex: 2 }}><Text>Operations</Text></View>

            </View>



            {
                data.length ?
                    data.map((item) =>
                        <View style={styles.dataWrapper}>
                            <View style={{ flex: 1 }}><Text>{item.name}</Text></View>
                            <View style={{ flex: 1 }}><Text>{item.age}</Text></View>
                            <View style={{ flex: 1 }}><Button title='Delete'></Button></View>
                            <View style={{ flex: 1 }}><Button title='update'></Button></View>


                        </View>
                    ) : null
            }

        </View>
    )
}




const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    dataWrapper: {

        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'orange',
        margin: 5,
        padding: 8,
    }
})