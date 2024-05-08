import { useState } from "react";
import { Alert, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { firebase } from './Firebase';
import Login from "./Login";

import { Image } from "react-native";
import { createAccount } from ".";
import "react-native-web"

const Register =()=>{
    const [email,setEmail]= useState("")
    const [password,setPassword]= useState("")
    const [fullName, setfullName]= useState("")
    const [confirmpass, setconfirmpass]= useState("")
    const handleCreateAccount=()=>{
        // firebase.firestore().createUserWithEmailAndPassword(email,password)
        // .then(()=> Alert.alert("dang ky thanh cong"))
        // .catch(e => Alert.alert(e.message))
        const role="customer"
        createAccount(email,password,fullName,role)
    }
    return(
        <View style ={{flex:1, justifyContent:"center"}}>
            <Image
              style ={{width: 200, height: 200, alignSelf:"center"}}
              source={require("../assets/logo.png")}
              resize
          ></Image>
            <TextInput
                label={"Email"}
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                label={"Password"}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <TextInput
                label={"Fullname"}
                value={fullName}
                onChangeText={setfullName}
                
            />
            <TextInput
                label={"Confirm Password"}
                value={confirmpass}
                onChangeText={setconfirmpass}
                
            />
            <Button mode="contained" onPress={handleCreateAccount}>
                Create Account
            </Button>
            <View style={{flexDirection: "row"}}>
                <Button onPress={()=> navigation.navigate('Login', {Login})}> Log in </Button>            </View>
        </View>
    )
}
export default Register