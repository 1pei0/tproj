import React, { useState } from "react";
import SegmentedControlTab from "react-native-segmented-control-tab"
import { Box, Center, HStack, ScrollView, Text, useColorMode, Image, View,Pressable, Input, KeyboardAvoidingView, List } from "native-base";
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { SafeAreaView, } from "react-native-safe-area-context";
import { Dimensions, Platform } from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import BookmarkList from "../components/BookmarkList";
import albumData from "../json/ex.json";
import { NativeBaseProvider,  Button } from "native-base";
//import { useDispatch, useSelector } from "react-redux";
//import { selectSave, setSave } from "../redux/accountSlice";

//import "./styles.css";

//import AddBookmark from "../containers/AddBookmark ";
//import BookmarkList0 from "../containers/BookmarkList0";


const BookmarkScreen = ({route}) => {
  //const saveValue = useSelector(selectSave);
 
  // Define a dispatch to send actions
  //const dispatch = useDispatch();
    const {colorMode} = useColorMode();
    const { width } = Dimensions.get("window");
    const tabBarHeight = useBottomTabBarHeight();
    const [customStyleIndex, setCustomStyleIndex] = List?useState(1): useState(0);
    const handleCustomIndexSelect = (index) => {
        setCustomStyleIndex(index);
    };
   
    return(
        <KeyboardAvoidingView
            behavior= { Platform.OS == 'ios' ? "padding": "height"}
            flex={1}
        >
            <SafeAreaView backgroundColor={colorMode=="dark"? "#364A5C": "#E4F7FF"} flex={1}>               
                <Box 
                    w={343} h={8} p={0.5}  mt={14} alignSelf="center"
                    borderRadius={9} borderWidth={1}
                    justifyContent="center" alignItems="center"
                    _dark={{borderColor: "#E4F7FF"}}
                    _light={{borderColor: "#364A5C"}}
                >
                   
                    <SegmentedControlTab 
                        values={['Ball games','Ice sport']}
                        selectedIndex={customStyleIndex}
                        onTabPress={handleCustomIndexSelect}
                        tabStyle={{backgroundColor: "transparent", borderWidth: 0, borderColor: "transparent"}}
                        borderRadius={7}
                        activeTabStyle={{
                            borderRadius: 7, backgroundColor: colorMode=="dark"? "#ffffff": "#364A5C"
                        }}
                        activeTabTextStyle={{color: colorMode=="dark"? "#364A5C": "#F9F9F9", fontSize: 12}}
                        tabTextStyle={{color: colorMode=="dark"? "#E7E4E4": "#98AFC5", fontSize: 12}}
                    />
                </Box>
                <ScrollView marginTop={5}> 
                <Center mb={tabBarHeight}>
                        {
                            customStyleIndex === 0 ?
                                <BookmarkList list={true}/>:
                                <BookmarkList list={false}/>
                        }
                        
                    </Center>
                   </ScrollView>
            </SafeAreaView>
            
        </KeyboardAvoidingView>       
    );
}

export default BookmarkScreen;
//, 'Ball games','Ice sport'