import React, { useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, Animated, Dimensions, ImageBackground, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import backgroundImage from '../assets/background.png';

export default function MainComponent() {
  const navigation = useNavigation();
  const screenHeight = Dimensions.get('window').height;
  const slideAnim = useRef(new Animated.Value(screenHeight / 2)).current;

  // Animation effect
  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [slideAnim]);

  // Navigation handlers
  const handleSignUpPress = () => {
    navigation.navigate('SignUp');
  };

  const handleSignInPress = () => {
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.imageContainer}>
          <ImageBackground source={backgroundImage} style={styles.backgroundImage} />
        </View>
      </View>
      <Animated.View style={[styles.animatedContainer, { transform: [{ translateY: slideAnim }] }]}>
        <Text style={styles.headerText}>
          <Text style={styles.highlightedText}>Activity Based </Text>
          <Text style={styles.normalText}>Center's Clients Automate App</Text>
        </Text>
        <Text style={styles.descriptionText}>
          Transform your fitness or habits-related activities. Business with our intuitive client management app.
        </Text>
        <TouchableOpacity style={styles.signUpButton} onPress={handleSignUpPress} accessibilityLabel="Sign up for the app">
          <Text style={styles.signUpButtonText}>Let's Get Started</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signInButton} onPress={handleSignInPress} accessibilityLabel="Sign in to your account">
          <Text style={styles.signInText}>
            <Text style={styles.haveAccountText}>Have an Account? </Text>
            <Text style={styles.signInLinkText}>Sign In</Text>
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

// Constants for styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    flex: 1,
    backgroundColor: 'orange',
  },
  imageContainer: {
    flex: 0.54,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  animatedContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '50%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  highlightedText: {
    color: 'blue',
  },
  normalText: {
    color: 'black',
  },
  descriptionText: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    marginBottom: 10,
  },
  signUpButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 30,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5,
  },
  signUpButtonText: {
    color: 'white',
    fontSize: 22,
    fontWeight: '500',
  },
  signInButton: {
    backgroundColor: 'transparent',
    paddingVertical: 12,
    paddingHorizontal: 25,
  },
  signInText: {
    fontSize: 18,
    textAlign: 'center',
  },
  haveAccountText: {
    color: 'black',
    fontWeight: '500',
  },
  signInLinkText: {
    color: '#007bff',
    fontWeight: '500',
  },
});

