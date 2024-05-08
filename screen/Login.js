import { useState } from "react";
import { View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { firebase } from './Firebase';

import Home from "./Home";
import Register from "./Register";
import { Image } from "react-native";
import { login } from ".";
const Login =({navigation})=>{
    const [email,setEmail]= useState("")
    const todoRef = firebase.firestore().collection('USERS');
    const [password,setPassword]= useState("")
    
    const handleLogin=()=>{
        // firebase.auth().signInWithEmailAndPassword(email,password)
        
        // .then(()=> console.log("Dang nhap thanh cong"))
        // .catch(e => Alert.alert(e.message))
        // login(todoRef,email,password)
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(()=> navigation.navigate('Home', {Home}))
        .catch(e => Alert.alert(e.message))

        
    }
    return(
        <View style ={{flex:1, justifyContent:"center"}}>
            <Image
              style ={{width: 200, height: 400, alignSelf:"center"}}
              source={require("../assets/dog.jpg")}
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
            <Button mode="contained" onPress={handleLogin}>
                Login
            </Button>
            <View style={{flexDirection: "row"}}>
                <Button onPress={()=> navigation.navigate('Register', {Register})}> Create New Account </Button>
            </View>
        </View>
    )
}
export default Login