/* eslint-disable prettier/prettier */
const React = require('react');
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Swiper from 'react-native-swiper';

const SwiperScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Swiper style={styles.wrapper} showsButtons={false} loop={false}>
        <View style={styles.slide}>
          <Image source={require('../../assets/images/swipeOne.jpg')} style={styles.image} />
          <Text style={styles.text}>Gain Total Control of your money</Text>
          <Text style={styles.text2}>Become your own money manager and make every cent count</Text>
        </View>
        <View style={styles.slide}>
          <Image source={require('../../assets/images/swipeTwo.jpg')} style={styles.image} />
          <Text style={styles.text}>Know where your
            money goes</Text>
          <Text style={styles.text2}>Track your transaction easily,
            with categories and financial report </Text>
        </View>
        <View style={styles.slide}>
          <Image source={require('../../assets/images/swipeThree.jpg')} style={styles.image} />
          <Text style={styles.text}>Planning ahead</Text>
          <Text style={styles.text2}>Setup your budget for each category
            so you in control </Text>
        </View>
        {/* Add more slides as needed */}
      </Swiper>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => console.log('Signup pressed')}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => console.log('Login pressed')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 400, // Adjust the width based on your design
    height: 240, // Adjust the height based on your design
    resizeMode: 'contain',
  },
  text: {
    color: '#212325',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 39,
    padding: 9,
    marginTop: 15
  },
  text2: {
    color: '#91919F', // Change this color to the desired text color
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    padding: 20,
  },
  buttonsContainer: {
    flexDirection: 'column',
    padding: 16,
    gap: 10,
    paddingVertical: 20,
  },
  button: {
    borderRadius: 16,
    backgroundColor: '#7F3DFF',
    display: 'flex',
    width: 343,
    height: 56,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    flexShrink: 0,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default SwiperScreen;
