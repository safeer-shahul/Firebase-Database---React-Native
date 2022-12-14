import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function VerifyCode(props){
    const [code,setCode] = useState('');
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Enter OTP</Text>
            <TextInput
            style={styles.input}
            autoFocus
            keyboardType="numeric"
            value={code}
            onChangeText={setCode}
            />
            <Button title='Confirm OTP' onPress={() => props.onSubmit(code)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    input:{
        borderWidth:2,
        borderColor: 'lightblue',
        width:300,
        marginVertical:30,
        fontSize:25,
        padding:10,
        borderRadius:8
    },
    text:{
        fontSize:25
    }
})