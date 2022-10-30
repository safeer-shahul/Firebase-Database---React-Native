import React, { useState } from "react";
import auth from '@react-native-firebase/auth'
import VerifyCode from "./VerifyCode";
import MobileNumber from "./MobileNumber";
import codegenNativeCommands from "react-native/Libraries/Utilities/codegenNativeCommands";
import { Alert } from "react-native";

export default function MobileLogin({navigation}){
 const [confirm,setConfirm] = useState(null);
 const MobileLogin = async(phoneNumber) => {
    console.log(phoneNumber)
    auth().signInWithPhoneNumber('+91' + phoneNumber).then((res) => {
        console.log('response',res)
        setConfirm(res);
    })
    .catch((error) => {
        console.log('error',error)
    })
    
}
const confirmVerification = async(code) => {
    try{
        await confirm.confirm(code);
        
    }
    catch(error){
        Alert.alert('Invalid Code')
    }
}

auth().onAuthStateChanged((user) => {
    if(user){
        setConfirm(null)
        navigation.navigate("Home")
    }
    else{
        if(confirm){
            Alert.alert('Authentication Failed')
        }
        
    }
})

 if(confirm) return <VerifyCode onSubmit={confirmVerification}/> 
 return <MobileNumber onSubmit={MobileLogin}/>
}