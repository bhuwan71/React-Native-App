/* eslint-disable prettier/prettier */
import React = require('react');
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import SvgUri from 'react-native-svg-uri';

const RegisterScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const handleRegister = () => {
        // Reset previous error messages
        setUsernameError('');
        setPasswordError('');
        setConfirmPasswordError('');

        // Perform form validation
        if (!username) {
            setUsernameError('Username is required');
            return;
        }

        if (!password) {
            setPasswordError('Password is required');
            return;
        }

        if (password.length < 6) {
            setPasswordError('Password must be at least 6 characters long');
            return;
        }

        if (password !== confirmPassword) {
            setConfirmPasswordError('Passwords do not match');
            return;
        }

        // Handle registration functionality here
        console.log('Registering with:', username, password);
        // You can add your registration logic here, like API calls, authentication, etc.
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

            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Confirm Password"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(text) => setConfirmPassword(text)}
                />
                <Text style={styles.errorText}>{confirmPasswordError}</Text>
            </View>

            <TouchableOpacity style={styles.registerBtn} onPress={handleRegister}>
                <Text style={styles.registerText}>REGISTER</Text>
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
        color: 'black',
        borderRadius: 25,
        paddingLeft: 20,
    },
    errorText: {
        color: 'red',
        paddingLeft: 10,
        paddingTop: 2,
    },
    registerBtn: {
        width: '80%',
        backgroundColor: '#7F3DFF',
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    registerText: {
        color: 'white',
    },
});

export default RegisterScreen;
