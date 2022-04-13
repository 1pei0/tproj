import React,{useState}  from "react";

import { Box,ScrollView,Text,View,StyleSheet, Center,HStack,Switch,useColorMode} from "native-base";
import BallList from "../components/BallList";
import albumData from "../json/ex.json";
import IceList from "../components/IceList";
import PopularList from "../components/PopularList";
import NewsList from "../components/NewsList";

//import ScrollableTabView ,{DefaultTabBar }from 'react-native-scrollable-tab-view'
import SettingsScreen from "./SettingScreen";


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
        <Text  fontSize="24" fontWeight="bold" marginLeft="5" marginTop="2" marginBottom="1" >News</Text>  
         <Box marginTop="-5" w="20"  > <Text color="#364A5C" fontSize="18" fontWeight="bold" marginLeft="10" marginBottom="-3"  _dark={{ color: "#fff" }}
   _light={{ color: "#364A5C" }}>All  </Text ><Text marginLeft="9" marginTop="-1">____</Text> </Box>
   <Box  marginTop="-55" >  <Text color="#364A5C" fontSize="18" fontWeight="bold" marginLeft="85" marginTop="-18" _dark={{ color: "#929292" }}  
   _light={{ color: "#98AFC5" }}> Normal      Competition</Text>   
   </Box> 
      <NewsList
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
