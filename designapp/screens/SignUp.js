import React, { useState, memo } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import Checkbox from 'expo-checkbox';
import { useNavigation } from '@react-navigation/native';

// Import local images
import appleIcon from '../assets/apple.png';
import googleIcon from '../assets/google.png';
import facebookIcon from '../assets/facebook.png';

const PasswordInput = memo(({ password, setPassword, showPassword, setShowPassword }) => (
  <View style={styles.passwordContainer}>
    <TextInput
      style={styles.inputPassword}
      placeholder="Password"
      secureTextEntry={!showPassword}
      value={password}
      onChangeText={setPassword}
      accessibilityLabel="Password input"
    />
    <TouchableOpacity onPress={() => setShowPassword(!showPassword)} accessibilityLabel="Toggle password visibility">
      <Ionicons name={showPassword ? 'eye-off-outline' : 'eye-outline'} size={24} color="gray" />
    </TouchableOpacity>
  </View>
));

const CheckboxWithLabel = memo(({ isChecked, setIsChecked }) => (
  <View style={styles.checkboxContainer}>
    <Checkbox
      value={isChecked}
      onValueChange={setIsChecked}
      style={styles.checkbox}
      accessibilityLabel="Agree with terms and conditions"
    />
    <Text style={styles.checkboxText}>
      Agree with <Text style={styles.linkText}>Terms & condition</Text>
    </Text>
  </View>
));

const SocialSignUp = memo(() => (
  <View style={styles.socialIconsContainer}>
    <TouchableOpacity accessibilityLabel="Sign up with Apple">
      <Image source={appleIcon} style={styles.socialIcon} />
    </TouchableOpacity>
    <TouchableOpacity accessibilityLabel="Sign up with Google">
      <Image source={googleIcon} style={styles.socialIcon} />
    </TouchableOpacity>
    <TouchableOpacity accessibilityLabel="Sign up with Facebook">
      <Image source={facebookIcon} style={styles.socialIcon} />
    </TouchableOpacity>
  </View>
));

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [instituteType, setInstituteType] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const navigation = useNavigation();

  const handleSignUp = () => {
    navigation.navigate('RegistrationCompletedScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subTitle}>Fill your information below or register with your social account.</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        accessibilityLabel="Email input"
      />

      <PasswordInput
        password={password}
        setPassword={setPassword}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
      />

      <Picker
        selectedValue={instituteType}
        style={styles.input}
        onValueChange={(itemValue) => setInstituteType(itemValue)}
        accessibilityLabel="Institute type picker"
      >
        <Picker.Item label="Select" value="" />
        <Picker.Item label="Institute 1" value="institute1" />
        <Picker.Item label="Institute 2" value="institute2" />
        <Picker.Item label="Institute 3" value="institute3" />
      </Picker>

      <CheckboxWithLabel
        isChecked={isChecked}
        setIsChecked={setIsChecked}
      />

      <TouchableOpacity
        style={[styles.signUpButton, { opacity: isChecked ? 1 : 0.5 }]}
        disabled={!isChecked}
        onPress={handleSignUp}
        accessibilityLabel="Sign up button"
      >
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Or sign up with</Text>
      
      <SocialSignUp />

      <TouchableOpacity
        style={styles.signInContainer}
        onPress={() => navigation.navigate('SignIn')}
        accessibilityLabel="Navigate to sign in"
      >
        <Text style={styles.signInText}>
          Already have an account? <Text style={styles.signInLink}>Sign In</Text>
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
    marginBottom: 20,
  },
  inputPassword: {
    flex: 1,
    height: 50,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  checkbox: {
    marginRight: 10,
  },
  checkboxText: {
    color: 'gray',
  },
  linkText: {
    color: '#1e90ff',
    fontWeight: 'bold',
  },
  signUpButton: {
    backgroundColor: '#1e90ff',
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 30,
  },
  signUpButtonText: {
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
  signInContainer: {
    alignItems: 'center',
  },
  signInText: {
    fontSize: 16,
    color: 'gray',
  },
  signInLink: {
    color: '#1e90ff',
    fontWeight: 'bold',
  },
});
