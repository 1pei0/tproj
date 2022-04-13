import { useState } from 'react';
import {  Image ,ScrollView, FormControl, useColorMode, VStack, Text, Input } from 'native-base';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import {StyleSheet, Linking } from 'react-native';
const DisplaySettingScreen = () => {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [adrs, setAdrs] = useState("");
   const [tel, setTel] = useState("");

   const { colorMode } = useColorMode();
   const formLabelStyle = {
      color: colorMode == "light" ? "muted.700" : "white",
      fontSize: "xs",
      fontWeight: 600
   };
   const focusInputStyle = {
      borderColor: colorMode == "light" ? "muted.700" : "white",
   }

   return (
      <ScrollView flex={1} _dark={{ bg: "#364A5C" }}
      _light={{ bg: "#E4F7FF" }}>
         <VStack space={2} mt={5} width="80%" alignSelf="center" _dark={{ bg: "#364A5C" }}
   _light={{ bg: "#E4F7FF" }}>
            <Text textAlign="center" fontWeight="bold" fontSize="2xl" pb="4">
               GENERAL SETTINGS
            </Text>
            <FormControl mb={5} isRequired>
               <FormControl.Label _text={formLabelStyle}>
                  Name
               </FormControl.Label>
               <Input 
                  variant="underlined" _focus={focusInputStyle} 
                  value={name} onChangeText={text => setName(text)} 
               />
            </FormControl>
            <FormControl mb={5} isRequired>
               <FormControl.Label _text={formLabelStyle}>
                  Email
               </FormControl.Label>
               <Input 
                  variant="underlined" _focus={focusInputStyle} 
                  value={email} onChangeText={text => setEmail(text)} 
               />
            </FormControl>
            <FormControl mb={5}>
               <FormControl.Label _text={formLabelStyle}>
                  Address
               </FormControl.Label>
               <Input 
                  variant="underlined" _focus={focusInputStyle} 
                  value={adrs} onChangeText={text => setAdrs(text)} 
               />
            </FormControl>
            <FormControl mb={5}>
               <FormControl.Label _text={formLabelStyle}>
                  Tel
               </FormControl.Label>
               <Input 
                  variant="underlined" _focus={focusInputStyle} 
                  value={tel} onChangeText={text => setTel(text)} 
               />
            </FormControl>
         </VStack>         
      </ScrollView>

   );
}
 
export default DisplaySettingScreen;