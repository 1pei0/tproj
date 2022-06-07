import React from 'react';
import { Box,ScrollView , Center, Heading, Text, View,Swiper } from "native-base";
import PracticeList from '../components/PracticeList';
import albumData from "../json/ex.json";

// quizContainer = document.getElementById('quiz');
//const resultsContainer = document.getElementById('results');
//const submitButton = document.getElementById('submit');

const PracticeScreen = (navigation) => {
    return (
        <ScrollView >
   
        <View bg='#E4F7FF'>
        <Box bg="#E4F7FF"  h="580"   
_dark={{ bg: "#364A5C" }}
   _light={{ bg: "#E4F7FF" }}>
    <Text color="#364A5C" fontSize="24" fontWeight="bold" marginLeft="5" marginTop="2" marginBottom="1" _dark={{ color: "#fff" }}
   _light={{ color: "#364A5C" }} >Practice</Text>
    <Text color="#364A5C" fontSize="24" fontWeight="bold" marginLeft="300" marginTop="-10" marginBottom="1" _dark={{ color: "#fff" }}
   _light={{ color: "#364A5C" }}>2/5</Text>
    <Box w="300" marginLeft="10">
    <Text color="#364A5C" fontSize="18" fontWeight="medium" marginLeft="8" marginTop="2" marginRight="8" marginBottom="1" _dark={{ color: "#fff" }}
   _light={{ color: "#364A5C" }} >What is the most interesting exercise in the world and Ting most like?</Text>
    </Box>
      <PracticeList
      horizontal={true}
        list={albumData.albumList3}       
      />
      </Box>
   </View>
        
    </ScrollView>
  
    );
}


export default PracticeScreen;