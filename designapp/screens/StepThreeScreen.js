import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function StepThreeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>←</Text>
      </TouchableOpacity>
      
      <View style={styles.progressContainer}>
        <View style={styles.progressBarFilled} />
        <View style={styles.progressBarFilled} />
        <View style={styles.progressBarFilled} />
        <View style={{ marginRight:20 }} />
        
        
      </View>
      <Text style={styles.stepText}>3/3</Text>
      <Text style={styles.title}>Who are you?</Text>
      <Text style={styles.subtitle}>This helps us identify you on the system.</Text>
      
      <View style={styles.logoContainer}>
        <Text style={styles.logoPlaceholder}>Profile Picture</Text>
        <TouchableOpacity>
          <Text style={styles.uploadLogoText}>Upload Profile Picture</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.InstituteText}>Title</Text>

      <View style={styles.pickerContainer}>
        <Picker style={styles.picker}>
          <Picker.Item label="Select" value="select" />
          {/* Add more options here */}
        </Picker>
      </View>
      <Text style={styles.InstituteText}>First Name</Text>
      <TextInput style={styles.input} placeholder="First Name" defaultValue="Adam" />
      <Text style={styles.InstituteText}>Last Name</Text>
      <TextInput style={styles.input} placeholder="Last Name" />

      <TouchableOpacity style={styles.nextButton}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F7FB',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  backButton: {
    position:"absolute",
    top: 10,
    left: 10,
    zIndex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0)',

  },
  backButtonText: {
    fontSize: 34,
    color: 'black',
    

  },
  progressContainer: {
    flexDirection: 'row',
    marginBottom: -6,
    marginLeft: 60,
    marginRight: 60,
  },
  progressBarFilled: {
    flex: 1,
    height: 4,
    backgroundColor: '#007BFF',
  },
  progressBarUnfilled: {
    flex: 1,
    height: 4,
    backgroundColor: '#E0E0E0',
  },
  stepText: {
    textAlign: 'right',
    color: '#999',
    marginBottom: 20,
    marginRight: 25,
    marginTop: -7,
  },
  title: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 14,
    color: '#999',
    marginBottom: 70,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop:-20
  },
  logoPlaceholder: {
    backgroundColor: 'white',
    width: 150,
    height: 75,
    textAlign: 'center',
    lineHeight: 70,
    borderRadius: 10,
    marginBottom: 10,
    color: '#999',
  },
  uploadLogoText: {
    color: '#007BFF',
    fontSize: 17,
  },
  InstituteText: {
    textAlign: 'center',
    marginBottom: 7,
    fontSize: 14,
  },
  input: {
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    textAlign: 'center',
    color: '#999'
  },
  pickerContainer: {
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    justifyContent: 'center',
    marginBottom: 20,
    paddingHorizontal: 80, // Added padding to center the Picker
  },
  picker: {
    height: 50,
    width: '100%',
    textAlign: 'center', // Ensure text is centered
    justifyContent: 'center',
    marginLeft:50,
    marginRight:-100 ,
    color: '#999'// Ensure Picker content is centered
  },
  nextButton: {
    backgroundColor: '#007BFF',
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 40,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
