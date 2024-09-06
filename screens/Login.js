import { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  View,
} from "react-native";
import axios from "axios";
import Register from "./Register";
import { useNavigation } from "@react-navigation/native";
import asyncStorage from "@react-native-async-storage/async-storage";

export default function Login(props) {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
 

  // const navigation = useNavigation();

  const handleSubmit = async() => {
    const loginData = {
      email,
      password,
    };
   

    await axios
      .post("http://192.168.0.210:8080/login", loginData)
       .then((res)=>{
        if(res.data.message==200){
          props.navigation.replace('test')
          // console.log(props);
          
        }
       })
      
      .catch((err) => console.log(err));
    setemail("");
    setpassword("");
    
  };
  
  return (
    <View style={styles.containerLight}>
      <Image source={require(".././assets/logIn.png")} style={styles.logo} />
      <Text style={styles.header}>logIn</Text>

      <View style={styles.field}>
        <TextInput
          style={styles.input}
          placeholder="enter user email"
          keyboardType="email-address"
          value={email}
          onChangeText={(e) => setemail(e)}
        />
        <TextInput
          style={styles.input}
          placeholder="enter enter password"
          // secureTextEntry={true}
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
        <Text onPress={() => props.navigation.navigate("register")}>
          not a user <Text style={styles.link}>register</Text>
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  containerLight: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",

    alignItems: "center",
  },

  logo: {
    height: 320,
    width: 320,
    position: "absolute",
    // top: 0,
    marginTop: 100,
  },
  header: {
    fontSize: 35,
    fontWeight: "bold",
    color: "skyblue",
    marginTop: 300,
    // backgroundColor:"red",
    // paddingTop:300,
  },
  input: {
    width: 350,
    height: 50,
    borderColor: "skyblue",
    borderWidth: 2,
    borderRadius: 20,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 10,
  },
  field: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 150,
  },
  touch: {
    backgroundColor: "skyblue",
    width: 350,
    height: 50,
    borderRadius: 20,
    marginTop: 10,
  },
  btn: {
    textAlign: "center",
    fontWeight: "bold",

    justifyContent: "center",
    alignContent: "center",
    paddingTop: 10,
    bottom: 0,
  },
  link: {
    color: "red",
    bottom: 0,
  },
  light: {
    backgroundColor: "white",
  },
  dark: {
    backgroundColor: "black",
  },
  sun: {
    width: 35,
    height: 35,

    left: 150,
  },
});
