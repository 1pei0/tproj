import React from "react";
import { Box, HStack, VStack, AspectRatio, Text, Image, Pressable, Heading } from "native-base"


const PopularDetail = ({ album, navigation }) => {
  return (
    <Box >
      <Box  bg="#E4F7FF" w="400"  >
        <Pressable  
          onPress={() => navigation.navigate('Detail', album)}
        >
          <AspectRatio   ratio={1} >
            <Image
            marginRight={5}
            width={400}
            height={250}
              source={{ uri: album.image }}
              alt="album"
            />            
          </AspectRatio>
        </Pressable>
      </Box>   
    </Box>
  )};

export default PopularDetail;