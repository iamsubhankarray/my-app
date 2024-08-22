import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [product, setproduct] = useState([]);
  const getData = async () => {
    await axios
      .get("http://192.168.0.210:8000/products")
      .then((res) => setproduct(res.data))
      // .then((res) =>console.log(res.data))
      .catch((err) => console.log("error", err));
  };

  useEffect(() => {
    getData();
  }, []);
  // console.table(product);

  return (
    <>
    <Text>Home</Text>
    <ScrollView style={styles.container}>
      <View style={styles.body}></View>
      
      {product.map((i) => (
        <View style={styles.main}>
          <View key={i.id} style={styles.card}>
            <Image source={i.image_url} style={styles.img} />
            <Text>{i.name}</Text>
            <Text>{i.price}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
      </>
  );
};
const styles = StyleSheet.create({
  img: {
    height: 75,
    width: 75,
    backgroundColor: "black",
    
  },
  body:{
    flexDirection:"row" ,
  },
  card: {
    backgroundColor: "lightgrey",
    height: 150,
    width: 150,
    
   
    justifyContent:"center",
    alignItems: "center",
  },
  main: {
    
    
  },
  container:{
    
   

  }
});

export default Home;
