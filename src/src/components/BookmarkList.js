import React from "react";
import { FlatList } from "react-native";
import BookmarkDetail from "./BookmarkDetail";

const BookmarkList = ({ list, navigation }) => {
  const data = isSpoiler ? commentData.spoilerComments: commentData.comments;
  const renderItem= ({ item }) =>
  <BookmarkDetail album={item} navigation={navigation} />;
  return (
    <FlatList
      //horizontal={false}
      data={list}
     renderItem={renderItem}
      keyExtractor={item => item.title}
    />    
  );  
}

export default BookmarkList;