import React,{useState} from "react";
import { Box, HStack, VStack, AspectRatio, Text, Image, Pressable, Heading, ScrollView, Center } from "native-base"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import{TouchableOpacity} from "react-native"
const IceDetail = ({ album, navigation }) => {
  const [mark, setmark] = useState(true);
  const markFunction = () => {
      setmark(!mark);
  };
  return (
    <Box marginX={1} marginBottom={2} borderRadius={3} >
      <Box p={1} bg="#E4F7FF" w="140" marginLeft='3'height="200"  borderWidth='2'_dark={{ bg: "#364A5C" ,borderColor:"#fff"}}
   _light={{ bg: "#E4F7FF" }}  >
        <Pressable  
          onPress={() => navigation.navigate('Detail', album)}
        >
          <AspectRatio marginLeft="3" marginTop="1" ratio={1}>
            <Image
            marginRight={5}
            width={100}
            height={100}
              source={{ uri: album.image }}
              alt="album"
            />            
          </AspectRatio>
        </Pressable>
        <Box  >         
        <Text fontWeight="bold" fontSize="18"   marginTop='-1' textAlign="center">{album.title} </Text>
            <Text textAlign="center">{album.artist}</Text>
            <Text textAlign="center">{album.nation}</Text>
          </Box>

      </Box>   
    </Box>
  )};

export default IceDetail;