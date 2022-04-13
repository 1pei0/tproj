import React from 'react';
import { Box, Center, Switch, HStack, Text, useColorMode,Image } from 'native-base';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import {StyleSheet, Linking } from 'react-native';

const SettingScreen = () => {
   const{colorMode,toggleColorMode}=useColorMode();
  return (
   <Center
   shadow={2} width="90%"
   mt="5" px="2" py="3" marginBottom={14}
   _dark={{ bg: "#364A5C" }}
   _light={{ bg: "#E4F7FF" }}
   borderRadius="25"
   alignSelf="center"
>
   <HStack space={180} alignItems="center" color="#fff" >
      <Text  ml="10" fontSize="2xl" color={colorMode == "light" ? "#364A5C" : "#fff"}>{colorMode == "light" ? "夜間模式" : "夜間模式"}</Text>
      <Switch
         name="dark Mode"
         isChecked={colorMode === "dark"}
         // colorScheme="amber"
         onToggle={toggleColorMode}
         accessibilityLabel="display-mode"
         accessibilityHint="light or dark mode"
         size="lg"
         ml="-20"
      />
   </HStack>
</Center>
  );
};
export default SettingScreen;

const styles = StyleSheet.create({ 
   textStyle: {
      marginTop:22,
      marginBottom:10,
      fontSize:27,
      marginLeft:30,
      lineHeight:40,
      fontWeight:"700",
   },
   imageStyle: {
      height: 150,
      width:400,
      justifyContent:"center",
      borderRadius:15,
      marginLeft:17,
    },
 });
 


