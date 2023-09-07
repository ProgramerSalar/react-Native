import React, { useState, Component, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList, ScrollView, SectionList, TouchableHighlight, TouchableOpacity, ActivityIndicator } from 'react-native';
// import { styles } from './style';
import Student from './student';




export const Manish = () => {
    const [show, setShow] = useState(false)
    display = ()=>{
        setShow(true)

    }

    // setTimeout(() => {
    //     setShow(false)
    // },5000)


    return(
        <View>
            {/* <ActivityIndicator size={50} color="blue" animating={show}></ActivityIndicator> */}
            {/* <ActivityIndicator size="small" color="blue" animating={show}></ActivityIndicator>  in the ios are only put on the string value in the size = (large, small, medium) */}
            
            {
                show ? <ActivityIndicator size={50} color="blue" animating={show}></ActivityIndicator> :null
            }
            <Button title='OK' onPress={display}></Button>
        </View>
    )

}


const styels = StyleSheet.create({
    main:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    }
})