import { Entypo, Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from "./SignUp.style";

const SignUp = ({ navigation }) => {
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const handleMailText = (text) => {
        setMail(text);
    };
    const handlePasswordText = (text) => {
        setPassword(text);
    };
    const handleCheckSubmit = () => {
        if (mail && password) {
            AsyncStorage.setItem('@mail', mail)
            AsyncStorage.setItem('@password', password)
            console.log("Done");
            setMail("");
            setPassword("");
            navigation.navigate("SignIn");
        }
        else {
            Alert.alert("Mail veya şifre boş bırakılamaz!")
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <Text style={styles.title}>SignUp</Text>
            </View>
            <View style={styles.bottomContainer}>
                <Text style={styles.mailText}>Mail</Text>
                <View style={styles.mailContainer}>
                    <Ionicons name="person" size={24} color="black" />
                    <TextInput style={styles.mailInput} onChangeText={handleMailText} value={mail} />
                </View>
                <Text style={styles.passwordText}>Password</Text>
                <View style={styles.passwordContainer}>
                    <Entypo name="lock" size={24} color="black" />
                    <TextInput secureTextEntry style={styles.passwordInput} onChangeText={handlePasswordText} value={password} />
                </View>
                <TouchableOpacity style={styles.signUpButton} onPress={handleCheckSubmit}>
                    <Text style={styles.signUpButtonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SignUp