import React from "react";
import { FlatList } from "react-native";
import PopularDetail from "./PopularDetail";

const PopularList = ({ list, navigation }) => {
  const renderItem= ({ item }) => <PopularDetail album={item} navigation={navigation} />;
  return (
    <FlatList
    horizontal={true}
      data={list}
      renderItem={renderItem}
      keyExtractor={item => item.title}

    />    
  );  
}

export default PopularList;