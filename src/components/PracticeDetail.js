import React from "react";
import { Linking } from 'react-native';
import { Box, StyleSheet, Text, Image, Pressable, Heading , Button, Center} from "native-base"
import BallScreen from "../screens/BallScreen";

const PracticeDetail = ({ album, navigation }) => {
  return (
    <Box marginX={1} marginBottom={2} borderRadius={3} marginLeft={0}>
      <Box p={1}  w="800" height="220"   
_dark={{ bg: "#364A5C" }}
   _light={{ bg: "#E4F7FF" }} >
        <Pressable  
          onPress={() => navigation.navigate('Detail', album)}
        >    
            
        </Pressable>
        <Button 
          bg="#C8F9CD"           
            h="50"
            borderWidth='2'
            borderColor="#35853D"
            marginTop="3"
            marginLeft="16"
            w="234"
            _dark={{ bg: "#28B436", borderColor:"#C8F9CD"}}
             _light={{ bg: "#C8F9CD", borderColor:"#35853D" }}
          > 
          <Text color="#000000"fontSize="20" marginLeft="-100" _dark={{ color: "#000000" }}
   _light={{ color: "#364A5C" }} >A.volley ball</Text>
          </Button> 
          <Button 
            h="50"
            borderWidth='2'
            marginTop="5"
            marginLeft="16"
            w="234"
            _dark={{ bg: "#364A5C", borderColor:"#fff"}}
            _light={{ bg: "#E4F7FF", borderColor:"#364A5C" }}
          > 
          <Text color="#000000"fontSize="20" marginLeft="-100" _dark={{ color: "#fff" }}
   _light={{ color: "#364A5C" }}>B.base ball</Text>
          </Button> 
          <Button                   
            h="50"
            borderWidth='2'     
            marginTop="5"
            marginLeft="16"
            w="234"
            _dark={{ bg: "#364A5C", borderColor:"#fff"}}
   _light={{ bg: "#E4F7FF", borderColor:"#364A5C" }}
          > 
          <Text color="#000000"fontSize="20" marginLeft="-59" _dark={{ color: "#fff" }}
   _light={{ color: "#364A5C" }}>C.speed skating</Text>
          </Button> 
          <Button           
            h="50"
            borderWidth='2'        
            marginTop="5"
            marginLeft="16"
            w="234"
            _dark={{ bg: "#364A5C", borderColor:"#fff"}}
            _light={{ bg: "#E4F7FF", borderColor:"#364A5C" }}
          > 
          <Text color="#000000"fontSize="20" marginLeft="-85" _dark={{ color: "#fff" }}
   _light={{ color: "#364A5C" }}>D.praise Ting</Text>
          </Button> 
          
      </Box>   
      <Box bg="#C8F9CD"marginTop="75" w="400" h="150" marginRight="0">
        <Text color="#35853D" fontSize="24" fontWeight="medium" marginLeft="5">CORRECT</Text>
        <Box w="210" marginLeft="20" mb="2" >
          <Center><Text  fontSize="14" fontWeight="medium" textAlign="center" color="#000000">Anser:volley ball</Text></Center>
        </Box>
        <Button 
          bg="#35853D"           
            h="30"
            marginTop="1"           
            w="100"
            alignSelf="center" 
            component={BallScreen}
          > 
          <Text color="#fff"fontSize="14" marginTop="-1" marginLeft="1">Continue</Text>
          </Button> 
        </Box>
    </Box>
  )};

export default PracticeDetail;
