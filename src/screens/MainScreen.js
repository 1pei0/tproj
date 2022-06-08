import React,{useState}  from "react";

import { Box, Pressable,ScrollView,Text,View, FlatList,StyleSheet, Center,HStack,Switch,useColorMode, List} from "native-base";
import BallList from "../components/BallList";
import albumData from "../json/ex.json";
import IceList from "../components/IceList";
import PopularList from "../components/PopularList";
import NewsList from "../components/NewsList";

//import ScrollableTabView ,{DefaultTabBar }from 'react-native-scrollable-tab-view'
import SettingsScreen from "./SettingScreen";
import NewsSection from "../components/NewsSection";


const BallScreen = ({ navigation }) => {
  const{color,toggleColorMode}=useColorMode();
  return (
    <ScrollView >
      <View>
    <Box  margin="0" horizontal={false} h="230"  _dark={{ bg: "#364A5C" }}
   _light={{ bg: "#E4F7FF" }} > 
      <PopularList     
        list={albumData.abumList8}  
        navigation={navigation}
      />
      </Box>
     
      <Box  horizontal={false} h="255"  _dark={{ bg: "#364A5C" }}
   _light={{ bg: "#E4F7FF" }} >
      <Pressable 
                mt={15} mr={30} alignItems="flex-end" 
                onPress={() => navigation.navigate('Bookmark', {List: List})}
            >
            </Pressable>         
        <Text  fontSize="24" fontWeight="bold" marginLeft="5"  >News</Text>       
      <NewsSection
        list={albumData.albumList0}  
        navigation={navigation}
      />
       </Box>
       <Box  horizontal={false} h="270" _dark={{ bg: "#364A5C" }}
   _light={{ bg: "#E4F7FF" }}  >
      <Text  fontSize="24" fontWeight="bold" marginLeft="5" marginTop="1" marginBottom="1" _dark={{ bg: "#364A5C" }}
   _light={{ bg: "#E4F7FF" }}>Ball games</Text>
      <BallList
      horizontal={true}
        list={albumData.albumList1}  
        navigation={navigation}
      />
       
 
      </Box>
      <Box bg="#E4F7FF" horizontal={true} h="280"_dark={{ bg: "#364A5C" }}
   _light={{ bg: "#E4F7FF" }} >
      <Text  fontSize="24" fontWeight="bold" marginLeft="5" marginTop="4">Ice sports</Text>
      <IceList
      marginTop={40}
       horizontal={true}
       list={albumData.albumList2}  
       navigation={navigation}
       />
      </Box>
      
      </View>   
      </ScrollView>
  );
};

export default BallScreen;