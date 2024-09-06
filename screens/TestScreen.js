import { View, Text } from 'react-native'
import React from 'react'
import axios from 'axios'

const TestScreen = () => {
  
  const getData=()=>{
    axios.get('http://localhost:8080/protected')
    .then(res=>console.log(res.data))
    .catch(err=>console.log(err))

}
return(
  <View style={{flex:1,
  justifyContent:"center",
  alignItems:"center",
  backgroundColor:"skyblue"}}>

    <Text style={{fontWeight:"700",fontSize:50}}> Restricted Page</Text>
  </View>
)
  
  
  
  // if(res.status==="ok")
  //   return (
  //   <View>
  //     <Text>TestScreen</Text>
  //   </View>
  // )
}

export default TestScreen