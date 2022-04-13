import React from "react";
import { FlatList } from "react-native";
import NewsDetail from "./NewsDetail";

const NewsList = ({ list, navigation }) => {
  
  const renderItem= ({ item }) => <NewsDetail album={item} navigation={navigation} />;
  return (
    <FlatList
    horizontal={true}
      data={list}
      renderItem={renderItem}
      keyExtractor={item => item.title}

    />    
  );  
}

export default NewsList;