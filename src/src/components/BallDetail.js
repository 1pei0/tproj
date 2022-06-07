import React,{useState} from "react";
import { Box, HStack, VStack, AspectRatio, Text, Image, Pressable, Heading, Center } from "native-base"
import{TouchableOpacity} from "react-native"


const BallDetail = ({ album, navigation }) => {
  return (
    <Box marginX={1} marginBottom={2} borderRadius="2xl">
      <Box p={1} bg="#E4F7FF" marginLeft='3' w="140" height="200"   borderWidth='2' _dark={{bg:"#364A5C",borderColor:"#fff"}} _light={{color:"#E4F7FF",borderColor:"#364A5C"}} >
        <Pressable  
          onPress={() => navigation.navigate('Detail', album)}
        >
          <AspectRatio marginLeft="3" marginTop="1" ratio={1} >
            <Image
            marginRight={5}
            width={100}
            height={100}
              source={{ uri: album.image }}
              alt="album"
            />            
          </AspectRatio>
        </Pressable>
        <Box >
            <Text fontWeight="bold" fontSize="18"  marginTop='-1' textAlign="center" _dark={{color:"#fff"}} _light={{color:"#364A5C"}} >{album.title} </Text>
            <Text  textAlign="center">{album.artist} </Text>          
            <Text fontSize='14'textAlign="center"> {album.nation}</Text>
          </Box>
      </Box>   
    </Box>
  )};

export default BallDetail;