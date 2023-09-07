import React, { useState, Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList, ScrollView, SectionList } from 'react-native';
import { styles } from './style';
import Student from './student';




class Manish extends Component{
    constructor(){
        super()
        this.state={
            name:"Anil",
            age:undefined,
        }
    }


    updateName(val){
        this.setState({name:val})
    }



    render(){
        return(
            <View>
                <Text>{this.state.name}{this.state.age}</Text>
                <TextInput onChangeText={(text) => this.updateName(text)}></TextInput>
                <Button title='ok' ></Button>
                <Student name={this.state.name}/>
            </View>
        )
    }
}












export default Manish;