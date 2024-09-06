import { useState } from "react";
import { View,StyleSheet, } from "react-native";
import Register from "./screens/Register";
import Login from "./screens/Login";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import TestScreen from "./screens/TestScreen";

export default function App() {
 
 const stack =createStackNavigator()
  return (
   
      <NavigationContainer>

      <stack.Navigator initialRouteName="login">
        <stack.Screen name="register" component={Register}/>
        <stack.Screen name="login" component={Login}/>
        <stack.Screen name="home" component={Home}/>
        <stack.Screen name="test" component={TestScreen}/>
      </stack.Navigator>

      </NavigationContainer>
    
    
  );
}

