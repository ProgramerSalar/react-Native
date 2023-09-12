import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useMemo, useState, useRef } from 'react';
import { View, Text, Button, StyleSheet, Modal, Pressable, StatusBar, Platform, TextInput, ScrollView, FlatList, Alert, Image } from 'react-native';
import { ProductWrapper } from './components/ProductWrapper';
import { UserList } from './components/UserList';



const Stack = createNativeStackNavigator()

export const App = () => {

   




    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={ProductWrapper} />
                <Stack.Screen name='User' component={UserList} />
            </Stack.Navigator>
        </NavigationContainer>
    )


   


}
    