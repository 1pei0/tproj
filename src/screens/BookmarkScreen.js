import React from 'react';
import { Box,ScrollView , Center, Heading, Text, View } from "native-base";
import BookmarkList from '../components/BookmarkList';
import albumData from "../json/ex.json";

// quizContainer = document.getElementById('quiz');
//const resultsContainer = document.getElementById('results');
//const submitButton = document.getElementById('submit');

const BookmarkScreen = (navigation) => {
    return (
        <ScrollView >
   
        <View >
        <Box _dark={{ bg: "#364A5C" }}
   _light={{ bg: "#E4F7FF" }} h="1000">
    <Text fontSize="24" fontWeight="bold" marginLeft="5" marginTop="4" marginBottom="1" _dark={{ color: "#fff" }}
   _light={{ color: "#364A5C" }}>My Bookmark</Text>

      <BookmarkList
      horizontal={true}
        list={albumData.albumList2}  
        
      />
      </Box>
            


        </View>
        
    </ScrollView>
    );
}

export default BookmarkScreen;