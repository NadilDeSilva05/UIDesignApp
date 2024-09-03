// AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MainComponent from '../screens/MainComponent'; // Updated import
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import RegistrationCompletedScreen from '../screens/RegistraionCompletedScreen'
import StepOneScreen from '../screens/StepOneScreen';
import StepTwoScreen from '../screens/StepTwoScreen';
import StepThreeScreen from '../screens/StepThreeScreen';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={MainComponent} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="RegistrationCompletedScreen" component={RegistrationCompletedScreen} />
        <Stack.Screen name="StepOneScreen" component={StepOneScreen} />
        <Stack.Screen name="StepTwoScreen" component={StepTwoScreen} />
        <Stack.Screen name="StepThreeScreen" component={StepThreeScreen} />



      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
