import React from "react";
import { Linking } from 'react-native';
import { Box, HStack, VStack, AspectRatio, Text, Image, Pressable, Heading , Button} from "native-base"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const BookmarkDetail = ({ album, navigation }) => {
  return (
    <Box marginX={1} marginBottom={2} borderRadius={3} _dark={{ bg: "#364A5C" }}
    _light={{ bg: "#E4F7FF" }} >
      <Box p={1} bg="#E4F7FF" w="800" height="1000" _dark={{ bg: "#364A5C" }}
   _light={{ bg: "#E4F7FF" }} >
        <Text fontSize="14" fontWeight="bold" marginLeft="10" marginTop="2" _dark={{ color: "#fff" }}
   _light={{ color: "#364A5C" }}>All</Text>
   <Text marginLeft="9"  marginTop="-3" _dark={{ color: "#fff" }} _light={{ color: "#364A5C" }} >____</Text>
   <Text fontSize="14" fontWeight="bold" marginLeft="10" marginTop="2" _dark={{ color: "#98AFC5" }}
   _light={{ color: "#98AFC5" }} marginLeft="20" marginTop="-8">Recent    Ball games    Ice sports</Text>
      <Button 
          bg="#E4F7FF"           
            h="100"
            borderWidth='2'          
            marginTop="4"
            marginLeft="7"
            w="310"
            _dark={{ borderColor: "#fff" ,bg:"#364A5C"}}
            _light={{ borderColor: "#364A5C" ,bg:"#E4F7FF"}}
          >
        <Box w="100" marginTop="-10" _dark={{ color: "#fff" }}
   _light={{ color: "#364A5C" }}>
                <Image
                marginRight={5}
            
                width={20}
                height={20}
                  source={{ uri: album.image }}
                  alt="album"
                /> 
          </Box>
              <Box mt="-20" w="250" _dark={{ color: "#fff" }}
   _light={{ color: "#364A5C" }}>            
                <Text color="#000000"fontSize="18" marginLeft="100"_dark={{ color: "#fff" }}
   _light={{ color: "#364A5C" }}  >{album.title}</Text>
                <Text color="#000000"fontSize="18" marginLeft="100" _dark={{ color: "#fff" }}
   _light={{ color: "#364A5C" }} >{album.artist}</Text>
                <Text color="#000000"fontSize="18" marginLeft="100" _dark={{ color: "#fff" }}
   _light={{ color: "#364A5C" }}>{album.nation}</Text>
              </Box> 
              <Box marginLeft="250" marginTop="-70">
                <MaterialCommunityIcons name="bookmark" _dark={{ bg: "#fff" }}
   _light={{ bg: "#364A5C" }} size={26} /> 
              </Box>
          </Button>
    
      </Box>   
    </Box>
  )};

export default BookmarkDetail;