import React from "react";
import { FlatList } from "react-native";
import BallDetail from "./BallDetail";

const BallList = ({ list, navigation }) => {
  const renderItem= ({ item }) => <BallDetail album={item}         navigation={navigation} />;
  return (
    <FlatList
    horizontal={true}
      data={list}
      renderItem={renderItem}
      keyExtractor={item => item.title}

    />    
  );  
}

export default BallList;