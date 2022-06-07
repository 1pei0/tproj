import React from "react";
import { FlatList } from "react-native";
import PracticeDetail from "./PracticeDetail";

const PracticeList = ({ list, navigation }) => {
  const renderItem= ({ item }) => <PracticeDetail album={item} navigation={navigation} />;
  return (
    <FlatList
    horizontal={false}
      data={list}
      renderItem={renderItem}
      keyExtractor={item => item.title}

    />    
  );  
}

export default PracticeList;