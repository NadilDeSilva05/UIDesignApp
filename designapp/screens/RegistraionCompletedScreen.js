import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, StatusBar, Animated } from 'react-native';

export default function RegistrationCompletedScreen() {
  // Create animated values for each step
  const fadeAnim1 = useRef(new Animated.Value(0)).current;
  const fadeAnim2 = useRef(new Animated.Value(0)).current;
  const fadeAnim3 = useRef(new Animated.Value(0)).current;
  const fadeAnim4 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Animate the fade-in effect sequentially
    Animated.sequence([
      Animated.timing(fadeAnim1, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim2, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim3, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim4, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeAnim1, fadeAnim2, fadeAnim3, fadeAnim4]);

  return (
    <ImageBackground
      source={require('../assets/welcome.jpg')} // Replace with the correct path to your image
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>Registration completed!</Text>
        <Text style={styles.subtitle}>You should follow these steps first.</Text>

        <View style={styles.stepsContainer}>
          <Animated.View style={{ opacity: fadeAnim1, flexDirection: 'row', alignItems: 'center' }}>
            <View style={styles.circle}>
              <Text style={styles.circleText}>1</Text>
            </View>
            <Text style={styles.step}>Create client groups</Text>
          </Animated.View>

          <View style={{ height: 13 }} />

          <Animated.View style={{ opacity: fadeAnim2, flexDirection: 'row', alignItems: 'center' }}>
            <View style={styles.circle}>
              <Text style={styles.circleText}>2</Text>
            </View>
            <Text style={styles.step}>Create client payment packages</Text>
          </Animated.View>

          <View style={{ height: 13 }} />

          <Animated.View style={{ opacity: fadeAnim3, flexDirection: 'row', alignItems: 'center' }}>
            <View style={styles.circle}>
              <Text style={styles.circleText}>3</Text>
            </View>
            <Text style={styles.step}>Create staff</Text>
          </Animated.View>

          <View style={{ height: 13 }} />

          <Animated.View style={{ opacity: fadeAnim4, flexDirection: 'row', alignItems: 'center' }}>
            <View style={styles.circle}>
              <Text style={styles.circleText}>4</Text>
            </View>
            <Text style={styles.step}>Create clients</Text>
          </Animated.View>

          <View style={{ height: 15 }} />

          <TouchableOpacity style={styles.watchVideoButton}>
            <Text style={styles.watchVideoButtonText}>Watch video</Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginBottom: 260 }} />
        <TouchableOpacity style={styles.understoodButton}>
          <Text style={styles.understoodButtonText}>Understood!</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
    marginTop: 0,
    marginLeft: -20,
  },
  subtitle: {
    fontSize: 12,
    color: 'white',
    marginBottom: 30,
    marginLeft: -80,
  },
  stepsContainer: {
    alignItems: 'flex-start',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  step: {
    fontSize: 16,
    color: 'white',
    marginLeft: 15,
    fontWeight: 'bold',
  },
  circle: {
    width: 25,
    height: 25,
    borderRadius: 15,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleText: {
    color: '#00A6FF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  watchVideoButton: {
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  watchVideoButtonText: {
    color: '#00A6FF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  understoodButton: {
    backgroundColor: '#D7F1FF',
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 40,
  },
  understoodButtonText: {
    color: '#00A6FF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
