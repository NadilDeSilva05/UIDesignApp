import React, { useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, Animated, Dimensions, ImageBackground } from 'react-native';

import backgroundImage from './assets/background.png';
export default function App() {
  const screenHeight = Dimensions.get('window').height;
  const slideAnim = useRef(new Animated.Value(screenHeight / 2)).current; // Start at the bottom half of the screen

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0, // Slide up to fully cover the bottom half
      duration: 1000, // Duration of the animation in milliseconds
      useNativeDriver: true,
    }).start();
  }, [slideAnim]);

  return ( 
  <View style={{ flex: 1 }}>
    {/* Orange background */}
    <View style={{ flex: 1, backgroundColor: 'orange' }}>
      {/* Image on top half */}
      <View style={{ flex: 0.54 }}>
        <ImageBackground
          source={backgroundImage}
          style={{
            flex: 1,
            resizeMode: 'cover', // Ensure the image covers the area without distortion
          }}
        >
          {/* Optional: You can add any content here if needed */}
        </ImageBackground>
      </View>
    </View>
      {/* Bottom half - Content with curved edges and slide-up animation */}
      <Animated.View
        style={{
          transform: [{ translateY: slideAnim }],
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: '50%', // Cover the bottom half of the screen
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}
      >
        <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 10 }}>
          <Text style={{ color: 'blue' }}>Activity Based </Text>
          <Text style={{ color: 'black' }}>Center's Clients Automate App</Text>
        </Text>
        <Text style={{ fontSize: 16, color: 'black', textAlign: 'center', marginBottom: 10 }}>
          Transform your fitness or habits-related activities. Business with our intuitive client management app.
        </Text>
        <TouchableOpacity
          style={{
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
          }}
          onPress={() => console.log("Let's get started pressed")}
        >
          <Text style={{ color: 'white', fontSize: 22, fontWeight: '500' }}>Let's Get Started</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: 'transparent',
            paddingVertical: 12,
            paddingHorizontal: 25,
          }}
          onPress={() => console.log("Sign In pressed")}
        >
        <Text style={{ fontSize: 18, textAlign: 'center', marginBottom: 40 }}>
           <Text style={{ color: 'black', fontWeight: '500' }}>Have an Account?  </Text> 
         <Text style={{ color: '#007bff', fontWeight: '500' }}>Sign In</Text>
         </Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}
