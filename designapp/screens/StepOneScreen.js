import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function StepOneScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>←</Text>
      </TouchableOpacity>
      <View style={styles.progressContainer}>
        <View style={styles.progressBarFilled} />
        <View style={styles.progressBarUnfilled} />
        <View style={styles.progressBarUnfilled} />
        <View style={{ marginRight: 20 }} />
      </View>
      <Text style={styles.stepText}>1/3</Text>
      <Text style={styles.title}>What is your center?</Text>
      <Text style={styles.subtitle}>This helps us identify your center on the system.</Text>
      
      <View style={styles.logoContainer}>
        <Text style={styles.logoPlaceholder}>LOGO</Text>
        <TouchableOpacity>
          <Text style={styles.uploadLogoText}>Upload Logo</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.InstituteText}>Institute Name</Text>
      <TextInput style={styles.input} placeholder="Institute Name" defaultValue="Fitness Focus" />
      <Text style={styles.InstituteText}>Institute Type</Text>
      <View style={styles.pickerContainer}>
        <Picker
          style={styles.picker}
          dropdownIconColor="#007BFF" // Optional: to change the dropdown icon color
        >
          <Picker.Item label="Select" value="select" />
          {/* Add more options here */}
        </Picker>
      </View>
      
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate('StepTwoScreen')}
      >
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
    position: "absolute",
    top: 10,
    left: 10,
    zIndex: 1,
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
    
  },
  logoPlaceholder: {
    backgroundColor: 'white',
    width: 300,
    height: 50,
    textAlign: 'center',
    lineHeight: 50,
    borderRadius: 10,
    marginBottom: 10,
    color: '#999',
  },
  uploadLogoText: {
    color: '#007BFF',
    fontSize: 17,
    marginBottom:20
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
    marginBottom: 40,
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
    marginTop: 100,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
