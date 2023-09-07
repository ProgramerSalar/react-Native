import React, { useState, Component, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList, ScrollView, SectionList } from 'react-native';
import { styles } from './style';
import Student from './student';






export const Manish = () => {
    const [hide, hideState] = useState(false)

    return(
        <View>
            <Text>On Hide </Text>
            {/* <Button title='Hide' onPress={() => hideState(false)}></Button>
            <Button title='Show' onPress={() => hideState(true)}></Button> */}
            <Button title='Tongle Component' onPress={() => hideState(!hide)}></Button>
            
            {
                hide ? <User/> : null
            }
        
            
        </View>
    )
}



const User = () => {
    return(
        <View>
            <Text>Hide components</Text>

        </View>
    )
}