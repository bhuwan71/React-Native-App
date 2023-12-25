/* eslint-disable prettier/prettier */
// HomeScreen.tsx

import React = require('react');

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface HomeScreenProps {
    navigation: any; // You can use React Navigation types here
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Your App</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Details')}
            >
                <Text style={styles.buttonText}>Go to Details</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#3498db',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
});

export default HomeScreen;
