import React, { useState } from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import { styles } from './style';



export const Form = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [display, setDisplay] = useState(false)
    
    


    const restFormdata = () => {
        setDisplay(false);
        setEmail('');
        setPassword('');
        setEmail('');
    }



    return(
        <View>
            <TextInput 
            placeholder='Enter Name' style={styles.textarea}
            onChangeText={(text) => setName(text)}
            value={name}>
            </TextInput>

            <TextInput
            placeholder='Enter Password' style={styles.textarea}
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry={true}>
            </TextInput>
           

            <TextInput 
            placeholder='Enter Email' style={styles.textarea}
            onChangeText={(text) => setEmail(text)}
            value={email}>
            </TextInput>

            <View style={styles.textarea}>
            <Button title='OK' onPress={() => setDisplay(true)}></Button>
            </View>
            <Button title='clear data' onPress={restFormdata}></Button>
            <View>
                {
                    display ?
                    <View>
                        <Text style={styles.text}>Your Name: {name}</Text>
                        <Text style={styles.text}>Your Name: {password}</Text>
                        <Text style={styles.text}>Your Name: {email}</Text>

                    </View>
                    : null
                }
            </View>
            
            
            
        </View>
        
    )
}