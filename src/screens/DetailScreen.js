import React,{useState}  from 'react';
import { Linking } from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign";
import { Center, ScrollView, Box, AspectRatio, Text, Heading, image2,Image, Button } from "native-base";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const DetailScreen = ({ route,navigation }) => {
  const { title,
    title2,
    artist,
    price,
    url,
    image2,
    description,
  } = route.params;
 
  return (
    <Center h="2000" _dark={{ bg: "#364A5C" }}
    _light={{ bg: "#E4F7FF" }}  >
      <ScrollView >
      <Heading pt={1} fontSize="2xl" marginTop="3" marginLeft={5} _dark={{ color: "#fff" }}
   _light={{ color: "#364A5C" }} >{title2}</Heading>
        <AspectRatio bg="#E4F7FF" w="100%"  ratio={16/9} horizontal={true} _dark={{ bg: "#364A5C" }}
   _light={{ bg: "#E4F7FF" }}>    
          <Image
          
          bg="#E4F7FF"
          w={300}
          h={200}
          marginTop={5}
          marginLeft={10}
            source={{uri: image2 }}
            alt='albumImage'
          />
        </AspectRatio>
        <Box  h="400" marginTop="5" _dark={{ bg: "#364A5C" }}
   _light={{ bg: "#E4F7FF" }}>
          <Box>
          <Heading   marginLeft="10" fontSize="20" fontWeight="bold" _dark={{ color: "#fff" }}
   _light={{ color: "#364A5C" }}>Indroduction</Heading>
          <Heading marginLeft="300" marginTop="-7" _dark={{ color: "#fff" }}
   _light={{ color: "#364A5C" }}><MaterialCommunityIcons name="share" color="#000000" size={26} marginLeft={30} _dark={{ color: "#fff" }}
   _light={{ color: "#364A5C" }}/></Heading>
            <Heading marginLeft="10" marginRight="10"  fontSize="sm" fontWeight="light"  marginTop="5" marginTop="1" _dark={{ color: "#fff" }}
   _light={{ color: "#000000" }}>{price}</Heading>
            <Heading marginLeft="10" marginRight="10"  marginTop="5" fontSize="sm" fontWeight="light" color='#131313' _dark={{ color: "#fff" }}
   _light={{ color: "#000000" }}>{description}</Heading>
          </Box>
          
        </Box>
      </ScrollView>      
    </Center>

  );
}

export default DetailScreen;