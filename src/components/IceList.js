import React from "react";
import { FlatList } from "react-native";
import IcetDetail from "./IceDetail";
import { useSelector, useDispatch } from "react-redux";
const IceList = ({ list, navigation }) => {
  const  sports = useSelector((state) => state.favBike.sports);
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