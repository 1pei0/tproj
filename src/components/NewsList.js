import React from "react";
import { FlatList } from "react-native";
import NewsSection from "./NewsSection";

const NewsList = ({ list, navigation }) => {
  
  const renderItem= ({ item }) => <NewsSection album={item} navigation={navigation} />;
  return (
    <FlatList
     horizontal={false}
      data={list}
      renderItem={renderItem}
      keyExtractor={item => item.title}

    />    
  );  
}

export default NewsList;