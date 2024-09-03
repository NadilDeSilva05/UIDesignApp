import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';

export default function StepTwoScreen({ navigation }) {
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
        <View style={styles.progressBarFilled} />
        <View style={styles.progressBarUnfilled} />
        <View style={{ marginRight:20 }} />
     
      </View>
         
      <Text style={styles.stepText}>2/3</Text>
      
      <Text style={styles.title}>How to contact your center?</Text>
      <Text style={styles.subtitle}>These information is used for display purposes.</Text>
      <Text style={styles.InstituteText}>Institute Hotline</Text>
      <TextInput style={styles.input} keyboardType="phone-pad" />
      <Text style={styles.InstituteText}>Institute Email</Text>
      <TextInput style={styles.input} placeholder="abc@gmail.com" keyboardType="email-address" />
      <Text style={styles.InstituteText}>Institute Website</Text>
      <TextInput style={styles.input} placeholder="abc.lk" />

      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate('StepThreeScreen')}
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
    marginLeft: 50,
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
  nextButton: {
    backgroundColor: '#007BFF',
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 80,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
