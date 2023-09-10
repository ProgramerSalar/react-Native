import React, { useEffect, useMemo, useState, useRef } from 'react';
import { View, Text, Button, StyleSheet, Modal, Pressable, StatusBar, Platform, TextInput, ScrollView, FlatList, Alert, Image } from 'react-native';
import { Header } from './components/Header';
import { Product } from './components/Product';




export const App = () => {

    const products = [
        {
            name:'Samsung Mobile',
            color:'white',
            price:2000,
            image:'https://m.media-amazon.com/images/I/91HRACirFrL._SL1500_.jpg'
        },
        {
            name:'apple Mobile',
            color:'black',
            price:20000,
            image:'https://m.media-amazon.com/images/I/71GLMJ7TQiL._SL1500_.jpg'
        },
        {
            name:'Lava Mobile',
            color:'red',
            price:1000,
            image:'https://m.media-amazon.com/images/I/51CS5pPGiCL._SL1000_.jpg'
        },
        {
            name:'Realme Mobile',
            color:'dark',
            price:1300,
            image:'https://m.media-amazon.com/images/I/71HaxH9n63L._SL1500_.jpg'
        },
    ]




    return(
        <View>
            <Header/>
            <ScrollView>
            {
                products.map((item) => <Product item={item}/>)
            }


            </ScrollView>
            
           
            
        </View>
    )


   


}
    