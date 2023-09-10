import React, { useEffect, useMemo, useState } from 'react';
import { View, Text, Button, StyleSheet, Modal, Pressable, StatusBar, Platform, TextInput, ScrollView, FlatList, Alert } from 'react-native';
// import { Manish } from './components/company';



export const App = () => {
    const [data, setData] = useState([])
    const [showModal, setshowModal] = useState(false)
    const [selectedUser, setSelectedUser] = useState(undefined)



    const getAPIData = async () => {
        // console.warn("hello")
        const url = "http://10.0.2.2:3000/users"
        let results = await fetch(url)
        results = await results.json()
        // console.warn(results)
        if (results) {
            setData(results)
            getAPIData()

        }
    }

    useEffect(() => {
        getAPIData()
    }, [])



    const deleteUser = async (id) => {
        const url = "http://10.0.2.2:3000/users"
        // console.warn(`${url}/${id}`)
        let results = await fetch(`${url}/${id}`, {
            method: "delete"
        }
        )
        results = await results.json()
        if (results) {
            console.warn("User deleted")
        }

    }


    const updateUser = (data) => {
        setshowModal(true)
        setSelectedUser(data)
    }



    return (
        <View style={styles.container}>
            <View style={styles.dataWrapper}>
                <View style={{ flex: 1 }}><Text>Name</Text></View>
                <View style={{ flex: 2 }}><Text>Age</Text></View>
                <View style={{ flex: 2 }}><Text>Operations</Text></View>

            </View>



            {
                data.length ?
                    data.map((item) =>
                        <View style={styles.dataWrapper}>
                            <View style={{ flex: 1 }}><Text>{item.name}</Text></View>
                            <View style={{ flex: 1 }}><Text>{item.age}</Text></View>
                            <View style={{ flex: 1 }}><Button title='Delete' onPress={() => deleteUser(item.id)}></Button></View>
                            <View style={{ flex: 1 }}><Button title='update' onPress={() => updateUser(item)}></Button></View>


                        </View>
                    ) : null
            }
            <Modal visible={showModal} transparent={true}>
                <UserModal setshowModal={setshowModal} selectedUser={selectedUser} getAPIData={getAPIData}/>
            </Modal>

        </View>
    )
}

const UserModal = (props) => {
    const [name, setName] = useState(undefined)
    const [age, setAge] = useState(undefined)
    const [email, setEmail] = useState(undefined)


    useEffect(() => {

        if (props.selectedUser) {
            setName(props.selectedUser.name)
            setAge(props.selectedUser.age.toString())
            setEmail(props.selectedUser.email)

        }


    }, [props.selectedUser])


    const updateUser = async () => {
        console.warn(name, age, email, props.selectedUser.id)
        const url = "http://10.0.2.2:3000/users"
        const id = props.selectedUser.id;


        let results = await fetch(`${url}/${id}`,{
            method:"Put",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({name,age,email})
        })
        results =await results.json()
        if(results){
            console.warn(results)
            props.getAPIData()
            props.setshowModal(false)
        }
    }


    // console.warn(props.selectedUser)
    return (
        <View style={styles.centerdView}>
            <View style={styles.modalView}>
                <TextInput placeholder='update Name' style={styles.input} value={name} onChangeText={(text) => setName(text) }></TextInput>
                <TextInput placeholder='update Age' style={styles.input} value={age} onChangeText={(text) => setAge(text)}></TextInput>
                <TextInput placeholder='update Email' style={styles.input} value={email} onChangeText={(text) => setEmail(text)}></TextInput>
                <View style={{marginBottom:15}}><Button title='update' onPress={() => updateUser()} ></Button></View>
                <Button title='close' onPress={() => props.setshowModal(false)} ></Button>
            </View>
        </View>
    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    dataWrapper: {

        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'orange',
        margin: 5,
        padding: 8,
    },
    centerdView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',


    },
    modalView: {
        backgroundColor: 'white',
        padding: 40,
        borderRadius: 20,
        alignItems: 'center',
        shadowColor: 'dark',
        shadowOpacity: 0.80,
        elevation: 5,

    },
    input: {
        borderWidth: 1,
        borderColor: 'skyblue',
        width: 300,
        marginBottom: 15,
        borderRadius:20,
        fontSize:20,
    }
})