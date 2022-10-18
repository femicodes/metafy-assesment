import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import Onboarding from "src/screens/Onboarding";
import Signup from "src/screens/Signup";
import Login from "src/screens/Login";
import ForgotPassword from "src/screens/ForgotPassword";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Onboarding'
        screenOptions={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      >
        <Stack.Screen name='Onboarding' component={Onboarding} />
        <Stack.Screen name='Signup' component={Signup} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
