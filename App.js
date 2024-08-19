import { useState } from "react";
import { View,StyleSheet, } from "react-native";
import Register from "./screens/Register";
import Login from "./screens/Login";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
 
 const stack =createStackNavigator()
  return (
   
      <NavigationContainer>

      <stack.Navigator>
        <stack.Screen name="register" component={Register}/>
        <stack.Screen name="login" component={Login}/>
      </stack.Navigator>

      </NavigationContainer>
    
    
  );
}

