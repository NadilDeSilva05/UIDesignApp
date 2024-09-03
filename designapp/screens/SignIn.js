import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // Import the hook

// Import local images
import appleIcon from '../assets/apple.png';
import googleIcon from '../assets/google.png';
import facebookIcon from '../assets/facebook.png';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation(); // Use the navigation hook

  const handleSignIn = () => {
    // Perform your sign-in logic here, then navigate to the dashboard
    navigation.navigate('Dashboard');
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
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.inputPassword}
          placeholder="Password"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Ionicons
            name={showPassword ? 'eye-off-outline' : 'eye-outline'}
            size={24}
            color="gray"
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.forgotPasswordContainer}>
        <Text style={styles.forgotPasswordText}>Forgot password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
        <Text style={styles.signInButtonText}>Sign In</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Or sign in with</Text>
      
      <View style={styles.socialIconsContainer}>
        <TouchableOpacity>
          <Image
            source={appleIcon}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={googleIcon}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={facebookIcon}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.signUpContainer}>
        <Text style={styles.signUpText}>
          Don’t have an account? <Text style={styles.signUpLink}>Sign Up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
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
    color: 'gray',
    marginBottom: 30,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
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
    color: '#1e90ff',
    fontSize: 16,
  },
  signInButton: {
    backgroundColor: '#1e90ff',
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 30,
  },
  signInButtonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  orText: {
    textAlign: 'center',
    color: 'gray',
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
    color: 'gray',
  },
  signUpLink: {
    color: '#1e90ff',
    fontWeight: 'bold',
  },
});
