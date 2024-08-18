import { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Register from './screens/Register'



export default function App() {
 
  

  return (
    <View style={styles.container}>
     <Register/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:"black",

    justifyContent: "center",
    alignItems: "center",
  },
  header:{
    backgroundColor:"white",
    fontSize:200,
    fontWeight:700,
  }
});
