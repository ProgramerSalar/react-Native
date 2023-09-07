import React, { useState, Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList, ScrollView, SectionList } from 'react-native';




class Student extends Component {
    render() {
        return (
            <View>
                <Text>Your Name: {this.props.name}</Text>
            </View>
        )
    }
}

export default Student;