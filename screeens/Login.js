import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, Button, Alert } from "react-native";
import auth from '@react-native-firebase/auth'

export default function Login({navigation}){

    const [email,setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const signup = () => {
        if(email !='' && Password !=''){
            auth().createUserWithEmailAndPassword(email,Password).then((res) => {
                console.log("response",res);
                Alert.alert("user successfully created")
            })
            .catch((error) => {
                console.log("error",error)
                Alert.alert(error.message)
            })
        }
        else{
            Alert.alert("both fields are mandatory")
        }
    }

    
    const login = () => {
        auth().signInWithEmailAndPassword(email,Password).then((res) => {
            console.log('response',res)
            navigation.navigate('Home')
        })
        .catch((error) => {
            console.log(error)
            Alert.alert(error.message)
        })
    } 

    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                Test
            </Text>
            <TextInput placeholder="Email" style={styles.inputText}
            value={email} 
            onChangeText={setEmail}
            keyboardType='email-address'/>
            <TextInput placeholder="Password" style={styles.inputText}
            value={Password}
            onChangeText={setPassword}
            secureTextEntry={true}/>
            <View style={styles.button}>
                <Button title="Signup"
                onPress={signup}/>
                <Button title="Login"
                onPress={login}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontSize:21,
        marginBottom:20,
    },
    inputText:{
        width:300,
        borderRadius:6,
        borderWidth:1,
        borderColor:"#6d69c3",
        marginVertical:10,
        padding:15
    },
    button:{
        width:150,
        marginTop:30,
        flexDirection:'row',
        justifyContent:'space-around'
    }
})