import React, { useState } from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import { styles, MahendraStyle } from './style';




export const Change = () => {
    const [name, setName] = useState("")
    return(
        <View>
            <Text style={styles.text}>TATA</Text>
            <Text style={MahendraStyle.text}>Mahendra</Text>
            <Text style={[ styles.text, styles.MahendraStyle, {marginTop:20}]}>Mahendra + TATA</Text>
            <TextInput placeholder='Enter your name' style={styles_name.textInput}
            onChangeText={(text) => setName(text)} />
            <Button 
            title='click'
             onPress={() => setName('')} 
             style={button_style.button} 
             
             
             color='red'></Button>
        </View>
    )
}



const styles_name = StyleSheet.create({
    textInput:{
        color:'red',
        backgroundColor:'green', 
        borderRadius:10,
        fontWeight:'bold',
        width:300,


    }
})



const button_style = StyleSheet.create({
    button:{
        width:30,
        marginTop:10,
        color:'green',


    }
})