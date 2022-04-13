import React from "react";
import { FlatList } from "react-native";
import BookmarkDetail from "./BookmarkDetail";

const BookmarkList = ({ list, navigation }) => {
  const renderItem= ({ item }) => <BookmarkDetail album={item} navigation={navigation} />;
  return (
    <FlatList
    horizontal={true}
      data={list}
      renderItem={renderItem}
      keyExtractor={item => item.title}

    />    
  );  
}

export default BookmarkList;