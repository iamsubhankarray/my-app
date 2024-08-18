import { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import axios from "axios";

export default function Login() {
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
 
  



  return (
    <View style={styles.container}>
      {/* <Image source={require("./assets/logIn.png")} style={styles.logo} /> */}
      <Text style={styles.header}>logIn</Text>

      <View style={styles.field}>
        <TextInput
          style={styles.input}
          placeholder="enter user name"
          value={name}
          onChangeText={(e) => setname(e)}
        />
        <TextInput
          style={styles.input}
          placeholder="enter enter password"
          keyboardType="number"
          value={password}
          onChangeText={(e) => setpassword(e)}
        />
      </View>
      <View style={styles.touch}>
        <TouchableOpacity onPress={handleSubmit}>
          <Text style={styles.btn}>logIn</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text onPress={() => console.log("register page")}>
          not a user register
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: 320,
    width: 320,
    position: "absolute",
    top: 0,
    marginTop: 100,
  },
  header: {
    fontSize: 35,
    fontWeight: "bold",
    color: "skyblue",
    marginTop: 200,
  },
  input: {
    // backgroundColor:"grey",
    width: 350,
    height: 50,
    borderColor: "skyblue",
    borderWidth: 2,
    borderRadius: 20,
    textAlign: "center",
    fontWeight: "bold",
    margin: 5,
  },
  field: {
    // backgroundColor:"red",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  touch: {
    backgroundColor: "skyblue",
    width: 350,
    height: 50,
    borderRadius: 20,
    marginTop: 20,
  },
  btn: {
    textAlign: "center",
    fontWeight: "bold",
    // fontWeight:20,
    justifyContent: "center",
    alignContent: "center",
    paddingTop: 10,
  },
});
