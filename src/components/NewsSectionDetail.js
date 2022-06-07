import React from "react";
import { Box, FlatList, Text, Pressable,Button } from "native-base";
import newsData from "../json/news.json"
import News from "./News";

const NewsSectionDetail = ({List, navigation}) => {
    const renderItem = ({item}) => (<News news={item} isLarge={false}/>);
    const data = List ? newsData.All: newsData.Normal;
    return(
        <Box flex={1} >
            <Pressable 
                mt={15} mb={1} mr={30} alignItems="flex-end" 
                onPress={() => navigation.navigate('News', {List: List})}
            >
            </Pressable>
            <FlatList 
                horizontal={false}
                data={data.slice(0, 3)}
                renderItem={renderItem}
                keyExtractor={item=> item.n1}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingLeft: 22
                }}
            />
              <Button 
          bg="#364A5C"
            mt="4"
            h="8"
            marginLeft="250"
            w="20"
            _dark={{ bg: "#fff" }}
            _light={{ bg: "#364A5C" }} 
            onPress={() => Linking.openURL(url)}
          > <Text color="#fff"fontSize="20" marginTop="-4" _dark={{ color: "#364A5C" }}
          _light={{ color: "#fff" }}>more+</Text>
          </Button>   
        </Box>
    );  
};
export default NewsSectionDetail;