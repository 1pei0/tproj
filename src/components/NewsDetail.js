import React,{useState} from "react";
import { Linking } from 'react-native';
import { Box, HStack, VStack, AspectRatio, Text, Image, Pressable, Heading , Button,colorMode, useColorMode} from "native-base"
//import ScrollableTabView ,{DefaultTabBar }from 'react-native-scrollable-tab-view'

const NewsDetail = ({ album, navigation }) => {
 
  return (
    <Box marginX={1} marginBottom={2} borderRadius={3} >
      <Box p={1} w="800" height="220" 
      _dark={{bg:"#364A5C"}} _light={{bg:"#E4F7FF"}} >
            <Box  marginLeft="8" >       
            <Text fontWeight="bold" marginLeft="3" marginTop="2" borderBottomWidth='2'  >{album.title}</Text>
            <Text fontWeight="bold" marginLeft="3" marginTop="-2" >_________________________________</Text>
            <Text fontWeight="bold" marginTop="2" marginLeft="3">{album.artist}</Text>
            <Text fontWeight="bold" marginLeft="3" marginTop="-2">_________________________________</Text>
            <Text fontWeight="bold" marginTop="2"marginLeft="3">{album.word1}</Text>
            <Text fontWeight="bold" marginLeft="3" marginTop="-2">_________________________________</Text>
          </Box>    
       
        <Button 
          bg="#364A5C"
            mt="4"
            h="8"
            marginTop="1"
            marginLeft="240"
            w="20"
            _dark={{ bg: "#fff" }}
            _light={{ bg: "#364A5C" }} 
            onPress={() => Linking.openURL(url)}
          > <Text color="#fff"fontSize="20" marginTop="-4" _dark={{ color: "#364A5C" }}
          _light={{ color: "#fff" }}>more+</Text>
          </Button>   
      </Box>   
    </Box>
  )};

export default NewsDetail;