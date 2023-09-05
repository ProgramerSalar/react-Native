import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import { styles, MahendraStyle } from './style';




export const Change = () => {
    return(
        <View>
            <Text style={styles.text}>TATA</Text>
            <Text style={MahendraStyle.text}>Mahendra</Text>
            <Text style={[ styles.text, styles.MahendraStyle, {marginTop:20}]}>Mahendra + TATA</Text>
            <TextInput placeholder='Enter your name'></TextInput>
        </View>
    )
}




