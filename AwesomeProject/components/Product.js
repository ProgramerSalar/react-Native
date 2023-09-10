import React, { useEffect, useMemo, useState, useRef } from 'react';
import { View, Image, Text, Button, StyleSheet, Modal, Pressable, StatusBar, Platform, TextInput, ScrollView, FlatList, Alert } from 'react-native';




export const Product = (props) => {
    const item = props.item
    return (
        <View style={{alignItems:"center", borderBottomColor:'black', borderBottomWidth:2, padding:50}}>
            <Text style={{ fontSize: 20 }}>{item.name}</Text>
            <Text style={{ fontSize: 20 }}>{item.price}</Text>
            <Text style={{ fontSize: 20 }}>{item.color}</Text>
            <Image style={{ width: 100, height: 100 }} source={{ uri: item.image }}></Image>
            <Button title='Add to Cart'></Button>
        </View>
    )





}
