import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [product, setproduct] = useState([]);
  const getData =  async() => {
     await axios.get("http://192.168.0.210:8000/products")
      .then((res) =>setproduct(res.data))
      .catch((err) => console.log("error", err));
  };

  useEffect(() => {
    getData();
  }, []);
  console.table(product);

  return (
    <View>
      <Text>Home</Text>
      {
        
      product.product.map(i=><Text key={i.id}>{i.name}</Text>)
      }
     
    </View>
  );
};

export default Home;
