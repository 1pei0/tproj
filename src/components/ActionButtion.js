import { useState,React,useEffect} from 'react';
import { Center, Pressable, Actionsheet, useDisclose } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import ActionScreen from '../screens/ActionScreen';

export default (props) => {
  const { isOpen, onOpen, onClose } = useDisclose();
  const { zoomRatio, site } = props;
 
  return (
    <>
      <Pressable onPress={onOpen}>
        <Center bg="#3B629C" borderRadius={60} p={4 * zoomRatio} borderWidth={2 * zoomRatio} borderColor="#ADB1AF">
          <Icon name={"bicycle"} size={30 * zoomRatio} color="#ADB1AF" />   
        </Center>
      </Pressable>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <ActionScreen onClose={onClose} site={site} />
      </Actionsheet>
    </>
  );
}