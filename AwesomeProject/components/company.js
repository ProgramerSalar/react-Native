import React, { useState, Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList, ScrollView, SectionList } from 'react-native';
import { styles } from './style';




class Manish extends Component{
    fruit = () => {
        console.warn('Apple')
    }
    render(){
        return(
            <View>
                <Text>Hello</Text>
                <Button title='ok' onPress={this.fruit}></Button>
            </View>
        )
    }
}


export default Manish;