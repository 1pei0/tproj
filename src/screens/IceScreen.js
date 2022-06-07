import React from "react";
import { Box,ScrollView,Text,View} from "native-base";
import IceList from "../components/IceList";
import albumData from "../json/albums.json";


const IceScreen = ({ navigation }) => {
  return (
    <ScrollView >
      <View>
    <Box bg="#fff" horizontal={false} h="320" >
      
      <IceList     
      horizontal={true}
        list={albumData.albumList2}  
        navigation={navigation}
      />
      </Box>
      </View> 
    </ScrollView>
  );
};

export default IceScreen;