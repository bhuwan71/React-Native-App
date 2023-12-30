/* eslint-disable prettier/prettier */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import HomeScreen from '../screens/Home/HomeScreen';
import SwiperScreen from '../screens/Swipper/SwipperScreen';
import LoginScreen from '../screens/Auth/Login';
import RegisterScreen from '../screens/Auth/SignUp';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Swipper" headerMode="screen">
        <Stack.Screen
          name="Swipper"
          component={SwiperScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login" component={LoginScreen} />

        <Stack.Screen
          options={{ headerShown: false }}
          name="Register" component={RegisterScreen} />
        {/* <Stack.Screen
          options={{ headerShown: false }}
          name="Home" component={HomeScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
