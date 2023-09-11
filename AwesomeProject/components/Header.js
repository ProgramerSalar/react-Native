import React, { useEffect, useMemo, useState, useRef } from 'react';
import { View, Text, Button, StyleSheet, Modal, Pressable, StatusBar, Platform, TextInput, ScrollView, FlatList, Alert } from 'react-native';

import {useSelector} from 'react-redux'


export const Header = () => {

    const cartData = useSelector((state) => state.reducer)
    const [cartItems, setCartItems] = useState(0)
    // console.warn(cartData)


    useEffect(() => {
        setCartItems(cartData.length)


    },[cartData])



    return(
        <View>
            <Text style={{fontSize:30, textAlign:'right', padding:10, backgroundColor:'orange'}}>{cartItems}</Text>
        </View>
    )


   


}
    



