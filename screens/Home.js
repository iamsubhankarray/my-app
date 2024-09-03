import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Button,
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const [user, setuser] = useState([]);
  const [loader, setloader] = useState(false);
  const [search,setsearch]=useState("")
  const [list,setlist]=useState([])
  Navigation = useNavigation();
  const handleSearch=(quary)=>{
    setsearch(quary)
  }
  const filteredData =user.filter((item)=>
  item.name.toLowerCase().includes(search.toLocaleLowerCase()))


  const getData = async () => {
    try {
      const result = await fetch("http://192.168.0.210:8080/products");
      const json = await result.json();
      setuser(json);
      // console.log(user[1].name)
    } catch (err) {
      console.log("error", err);
    }
  };


  useEffect(() => {
    getData();
  }, [filteredData]);

  if (user.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={50} color={"grey"} />
      </View>
    );
  }

  return (
    <>
      <SafeAreaView>
        <Text style={{ fontSize: 25, alignSelf: "center"}}>Home</Text>
        <TextInput
        
        style={{width:"auto",
          height:35,
          // backgroundColor:"lightgrey",
          marginTop:10,
         borderWidth:2,
         borderColor:"skyblue",
        borderRadius:25,
      textAlign:"center"}}
        clearTextOnFocus="always"
        placeholder="search here"
        value={search}
        onChangeText={(quary)=>setsearch(quary)}
        />
        <View>
          <FlatList
          data={filteredData}
          keyExtractor={(item,index)=>item.id}
          renderItem={({item})=>(
            <View style={{
              // {backgroundColor:"lightgrey",
              marginVertical:10,
              width:"auto",
              borderColor:"skyblue",
              borderWidth:5,}}>
            <Text>{`name: ${item.name}`}</Text>
            <Text>{`email: ${item.email}`}</Text>
            <Text>{`mobile: ${item.mobile}`}</Text>
            </View>
          )}
           />
        </View>
        
       
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  img: {
    height: 75,
    width: 75,
    backgroundColor: "black",
  },
  body: {
    // flexDirection: "row",
  },
  card: {
    backgroundColor: "lightgrey",
    height: "auto",
    width: "100%",
    padding: 10,
    paddingBottom: 20,

    justifyContent: "center",
    alignItems: "center",
  },
  main: {},
  container: {
    backgroundColor:"red"
  },
});

export default Home;
