/* eslint-disable prettier/prettier */
import React = require('react');
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import SvgUri from 'react-native-svg-uri';

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleLogin = () => {
        // Reset previous error messages
        setUsernameError('');
        setPasswordError('');

        // Perform form validation
        if (!username) {
            setUsernameError('Username is required');
            return;
        }

        if (!password) {
            setPasswordError('Password is required');
            return;
        }

        // Handle login functionality here
        console.log('Logging in with:', username, password);
        // You can add your login logic here, like API calls, authentication, etc.
    };

    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <SvgUri
                    width="200"
                    height="200"
                    source={require('../../assets/logo.svg')}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Username"
                    placeholderTextColor="#003f5c"
                    onChangeText={(text) => setUsername(text)}
                />
                <Text style={styles.errorText}>{usernameError}</Text>
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Password"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(text) => setPassword(text)}
                />
                <Text style={styles.errorText}>{passwordError}</Text>
            </View>

            <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        marginBottom: 40,
        marginRight: 100,
    },
    inputView: {
        width: '80%',
    },
    inputText: {
        height: 50,
        backgroundColor: '#f2f2f2',
        color: "black",
        borderRadius: 25,
        paddingLeft: 20,
    },
    errorText: {
        color: 'red',
        paddingLeft: 10,
        paddingTop: 2,
        paddingBottom: 5,
    },
    loginBtn: {
        width: '80%',
        backgroundColor: '#7F3DFF',
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    loginText: {
        color: 'white',
    },
});

export default LoginScreen;
