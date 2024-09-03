import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

// Import local images
import appleIcon from '../assets/apple.png';
import googleIcon from '../assets/google.png';
import facebookIcon from '../assets/facebook.png';

// Define constants for styling
const colors = {
  primary: '#1e90ff',
  secondary: 'gray',
  white: '#fff',
  border: '#ccc',
};

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation(); // Use the navigation hook

  // Event Handlers
  const handleSignIn = () => {
    // Perform your sign-in logic here, then navigate to the dashboard
    navigation.navigate('Dashboard');
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignUpNavigation = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <Text style={styles.subTitle}>Hi! Welcome back, You've been missed.</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        accessibilityLabel="Email input"
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.inputPassword}
          placeholder="Password"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
          accessibilityLabel="Password input"
        />
        <TouchableOpacity onPress={handleTogglePasswordVisibility} accessibilityLabel="Toggle password visibility">
          <Ionicons
            name={showPassword ? 'eye-off-outline' : 'eye-outline'}
            size={24}
            color={colors.secondary}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.forgotPasswordContainer}>
        <Text style={styles.forgotPasswordText}>Forgot password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signInButton} onPress={handleSignIn} accessibilityLabel="Sign in button">
        <Text style={styles.signInButtonText}>Sign In</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Or sign in with</Text>

      <View style={styles.socialIconsContainer}>
        <TouchableOpacity accessibilityLabel="Sign in with Apple">
          <Image source={appleIcon} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity accessibilityLabel="Sign in with Google">
          <Image source={googleIcon} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity accessibilityLabel="Sign in with Facebook">
          <Image source={facebookIcon} style={styles.socialIcon} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.signUpContainer} onPress={handleSignUpNavigation} accessibilityLabel="Navigate to Sign Up">
        <Text style={styles.signUpText}>
          Don’t have an account? <Text style={styles.signUpLink}>Sign Up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.white,
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subTitle: {
    textAlign: 'center',
    fontSize: 16,
    color: colors.secondary,
    marginBottom: 30,
  },
  input: {
    height: 50,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  inputPassword: {
    flex: 1,
    height: 50,
  },
  forgotPasswordContainer: {
    alignItems: 'flex-end',
    marginBottom: 30,
  },
  forgotPasswordText: {
    color: colors.primary,
    fontSize: 16,
  },
  signInButton: {
    backgroundColor: colors.primary,
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 30,
  },
  signInButtonText: {
    color: colors.white,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  orText: {
    textAlign: 'center',
    color: colors.secondary,
    marginBottom: 20,
  },
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  socialIcon: {
    width: 50,
    height: 50,
    marginHorizontal: 10,
  },
  signUpContainer: {
    alignItems: 'center',
  },
  signUpText: {
    fontSize: 16,
    color: colors.secondary,
  },
  signUpLink: {
    color: colors.primary,
    fontWeight: 'bold',
  },
});

export default SignIn;
