import React, { useEffect, useMemo, useState, useRef } from 'react';
import { View, Image, Text, Button, StyleSheet, Modal, Pressable, StatusBar, Platform, TextInput, ScrollView, FlatList, Alert } from 'react-native';
import { addToCart, removeFromCart } from './redux/action';
import { useDispatch, useSelector } from 'react-redux'




export const Product = (props) => {
    const item = props.item
    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.reducer)
    const [isAdded, setIsAdded] = useState(false)



    const handleAddTOCart = (item) => {
        console.warn('Hello', item)
        dispatch(addToCart(item))
    }


    const handleRemoveFromCart=((item)=>{
        // console.warn(item)
        dispatch(removeFromCart(item.name))

    }
    )


    useEffect(() => {

        let result = cartItems.filter((element) => {
            return element.name === item.name
        })
        if (result.length) {
            setIsAdded(true)
        }else{
            setIsAdded(false)
        }







        // if (cartItems && cartItems.length) {
        //     cartItems.forEach((element) => {
        //         // console.warn(element)
        //         if (element.name === item.name) {
        //             setIsAdded(true)
        //         }
        //     })
        // }
    }, [cartItems])



    return (
        <View style={{ alignItems: "center", borderBottomColor: 'black', borderBottomWidth: 2, padding: 50 }}>
            <Text style={{ fontSize: 20 }}>{item.name}</Text>
            <Text style={{ fontSize: 20 }}>{item.price}</Text>
            <Text style={{ fontSize: 20 }}>{item.color}</Text>
            <Image style={{ width: 100, height: 100 }} source={{ uri: item.image }}></Image>
            {
                isAdded ?
                    <Button title='Remove To Cart' onPress={() => handleRemoveFromCart(item)}></Button>
                    :
                    <Button title='Add to Cart' onPress={() => handleAddTOCart(item)}></Button>

            }

        </View>
    )





}
