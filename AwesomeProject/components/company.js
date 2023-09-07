import React, { useState, Component, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList, ScrollView, SectionList, TouchableHighlight, TouchableOpacity, ActivityIndicator, Modal } from 'react-native';
// import { styles } from './style';
import Student from './student';



export const Manish = () => {
    return(
        <View>
            <Modal
            transparent={true}
            style={styles.modalView}
            >
                <Text>Hello</Text>
            </Modal>
            <View style={styles.buttonView}>
            <Button title='OPen Modals'></Button>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    main:{
        flex:1
    },
    buttonView:{
        // flex:1,
        justifyContent:'flex-end'

    },
    modalView:{
        backgroundColor:'blue',
        justifyContent:'center',
        alignItems:'center',
        justifyContent:'center',

    }


})