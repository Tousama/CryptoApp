import { Entypo, Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from "./SignIn.style";



const SignIn = ({ navigation }) => {
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");
    const [mailCheck, setMailCheck] = useState("");
    const handleMailText = (text) => {
        setMail(text);
    };
    const handlePasswordText = (text) => {
        setPassword(text);
    };

    const handleCheckSubmit = () => {
        AsyncStorage.getItem("@mail").then((value) => setMailCheck(value))
        AsyncStorage.getItem("@password").then((value) => setPasswordCheck(value))
        if (mail && password) {
            if (mail == mailCheck && password == passwordCheck) {
                setMail("");
                setPassword("");
                navigation.navigate("List");
            }
            else {
                Alert.alert("Mail veya şifre yanlış!")
                setMail("");
                setPassword("");
            }
        }
        else {
            Alert.alert("Mail veya şifre boş bırakılamaz!")
            setMail("");
            setPassword("");
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <Text style={styles.title}>SignIn</Text>
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
                <TouchableOpacity style={styles.signInButton} onPress={handleCheckSubmit}>
                    <Text style={styles.signInButtonText}>Sign In</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SignIn