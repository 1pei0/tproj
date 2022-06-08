import React ,{useState} from "react";
import { Linking ,TouchableOpacity} from 'react-native';
import { Box, HStack, VStack, AspectRatio, Text, Image, Pressable, Heading , Button} from "native-base"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const BookmarkDetail = ({ album, navigation }) => {
  const [mark, setmark] = useState(true);
  const markFunction = () => {
      setmark(!mark);
  };
  return (
    <Box marginX={1} marginBottom={2}borderRadius={3} _dark={{ bg: "#364A5C" }}
    _light={{ bg: "#E4F7FF" }} >
      <Box p={1} bg="#E4F7FF" ml={-5} height="120" _dark={{ bg: "#364A5C" }}
   _light={{ bg: "#E4F7FF" }} >
 
      <Box 
          bg="#E4F7FF"           
            h="100"
            borderWidth='2'
            borderRadius='2'          
            marginLeft="7"
            w="310"
            _dark={{ borderColor: "#fff" ,bg:"#364A5C"}}
            _light={{ borderColor: "#364A5C" ,bg:"#E4F7FF"}}
          >
        <Box w="100" marginTop="2" marginLeft="2" _dark={{ color: "#fff" }}
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
              <Box marginLeft="255" marginTop="-60">
              <TouchableOpacity onPress={() => markFunction()}>
            <Text>{mark ? <MaterialCommunityIcons name={'bookmark-outline'} color={'black'} size={25} />:
                            <MaterialCommunityIcons name={'bookmark'} color={'#364A5C'} size={25} />}
            </Text>
        </TouchableOpacity>
              </Box>
          </Box>
    
      </Box>   
    </Box>
  )};

export default BookmarkDetail;


//<MaterialCommunityIcons name="bookmark-outline" _dark={{ bg: "#fff" }}
 //  _light={{ bg: "#364A5C" }} size={26} /> 