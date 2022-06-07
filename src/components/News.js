import React from "react";
import { Box, HStack, Text, Image, useColorMode } from "native-base";


const News = ({news, isLarge}) => {
    const { colorMode } = useColorMode();
    const width = isLarge? 329: 293;
    const mr = isLarge? null: 50;
    const ml = isLarge? null: 8;
    const mt = isLarge? 1: null;
   const mb = isLarge? 5: null;
    const color = isLarge? 
        colorMode=="dark"?["#A1BAD01B","#A1BAD01B", "#A1BAD01B", "#9FB0BE00"]:
        ["#44BFDA1B", "#A1BAD000"]:
        colorMode=="dark"?["#C6DEF41B","#365F8310", "#A1BAD015"]:
        ["#E7F9FD", "#F3FCFEFC", "#FFFFFF", "#F1FCFE70", "#E7F9FD"];
    const locations = isLarge?
        colorMode=="dark"?[0, 0.0001, 0.4844, 1]:[0, 1]:
        colorMode=="dark"?[0.0073, 0.4687,0.9341]:[0, 0.276, 0.5573, 0.8073, 1];
    const end = isLarge? {x:0, y: 1}: {x: 1, y: 0}

    return(
        <Box 
            w={270} h={8}  mr={mr} mb={mb} ml={ml} mt={mt}
             borderRadius={5} borderBottomWidth={3}
       
            _dark={{borderColor: "#6477888C"}}
            _light={{borderColor: "#BFE1E980"}}
        >
            <Box borderRadius={3} flex={1}>
                    <Text 
                        height={10} mt={2} fontSize={12}
                        letterSpacing={0.2}
                        _dark={{color: "#ffffff"}}
                        _light={{color: "#364A5C"}}
                    >
                        {news.n1}    
                        {news.n2}  
                        {news.n3}          
                    </Text>  
                 
                    </Box>
        </Box>
        
    );
};

export default News;