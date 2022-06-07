import React from "react";
import { FlatList } from "react-native";


const IceList = ({ list, navigation }) => {
  const renderItem= ({ item }) => <IcetDetail album={item} navigation={navigation} />;
  return (
    <FlatList
    horizontal={true}
      data={list}
      renderItem={renderItem}
      keyExtractor={item => item.title}

    />    
  );  
}

export default IceList;