import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback,Keyboard, TouchableOpacity  } from 'react-native';

const Register = () => {

    const [namevalue, setNamevalue] = useState('');
    const [emailvalue, setEmailvalue] = useState('');
    const [passwordvalue, setPasswordvalue] = useState('');

    const changename =(e) =>{
        setNamevalue(e.target.value);
    }

    const changeemail =(e) =>{
        setEmailvalue(e.target.value);
    }

    const changepassword =(e) =>{
        setPasswordvalue(e.target.value);
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.inner}>
                    <Text style={styles.registertext}>Register</Text>
                    <View style={styles.inputcontainer}>
                        <Text>NAME</Text>
                        <TextInput style={styles.textinputbox} value={namevalue} onChange={changename}></TextInput>
                        <Text>EMAIL</Text>
                        <TextInput style={styles.textinputbox} value={emailvalue} onChange={changeemail}></TextInput>
                        <Text>PASSWORD</Text>
                        <TextInput style={styles.textinputbox} secureTextEntry={true} value={passwordvalue} onChange={changepassword}></TextInput>
                        
                    </View>
                    <TouchableOpacity style={styles.submitbutton} activeOpacity='0.6'>
                            <Text style={styles.submittext}>
                                Complete
                            </Text>
                        </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
    },
    inner: {
        justifyContent: "space-around"
    },    
    registertext: {
        color: "#000000",
        marginTop: 100,
        fontSize: 30,
    },
    inputcontainer: {
        marginTop: 130,
    },
    textinputbox: {
        width: 330,
        height: 50,
        backgroundColor: "#EEEEEE",
        borderRadius: 10,
        paddingLeft: 15,
        fontSize: 20,
        marginBottom: 30,
    },
    submitbutton:{
        backgroundColor:"#EEEEEE",
        width:330,
        height:50,
        marginTop:100,
        alignItems: 'center',
        textAlign:'center',
        justifyContent:'center',
        borderRadius:10,
        padding:10,
    },
    submittext:{
        fontSize:20,
    }
});

export default Register;