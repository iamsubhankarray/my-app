import { useState } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import axios from "axios";

export default function Register() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [mobile, setmobile] = useState("");

  const handleSubmit = async () => {
    const userData = {
      name: name,
      email: email,
      password: password,
      mobile: mobile,
    };

    axios
      .post("http://192.168.0.210:8000/register", userData)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err))
      .get("http://192.168.0.210:8000/register").then((res)=>console.log(res.message)).catch(err=>console.log(err)
      )
  };

  return (
    <View style={styles.container}>
      <Image source={require(".././assets/Register.png")} style={styles.logo} />

      <View style={styles.field}>
        <Text style={styles.header}>Register</Text>
        <TextInput
          style={styles.input}
          placeholder="enter user name"
          value={name}
          onChangeText={(e) => setname(e)}
        />
        <TextInput
          style={styles.input}
          placeholder="enter user email"
          value={email}
          onChangeText={(e) => setemail(e)}
        />
        <TextInput
          style={styles.input}
          placeholder="enter enter password"
          keyboardType="number"
          value={password}
          onChangeText={(e) => setpassword(e)}
        />
        <TextInput
          style={styles.input}
          placeholder="enter user mobile"
          value={mobile}
          onChangeText={(e) => setmobile(e)}
        />
        <View style={styles.touch}>
          <TouchableOpacity onPress={handleSubmit}>
            <Text style={styles.btn}>Register</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text onPress={() => console.log("register page")}>
            not a user register
          </Text>
        </View>
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
    // backgroundColor:"pink",
    // top:,
  },
  input: {
    backgroundColor: "#969693",
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
    marginTop: 350,
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
