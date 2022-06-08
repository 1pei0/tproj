import React from "react";
import { FlatList } from "react-native";
import BookmarkDetail from "./BookmarkDetail";
import bookmarkData from "../json/bookmark.json"

const BookmarkList = ({ list}) => {
  const data = list ? bookmarkData.albumList1: bookmarkData.albumList2;
 return (
    data.map( item => {
      return (
    <BookmarkDetail 
      //horizontal={false}
      data={list}
      //renderItem={renderItem}
      album={item}
      navigation={true}
      keyExtractor={item => item.title}
    />    
  );  
})
);
};

export default BookmarkList;