import { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { Platform } from "react-native";
import { Box, Center } from 'native-base';
import * as Location from 'expo-location';
import * as Device from "expo-device";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
//import { getParkInfo } from '../api';
import  parkJson from "../json/park.json";

//import ActionButton from '../components/ActionButtion';


export default function MapScreen() {
   const [msg, setMsg] = useState("Waiting...");
   const [onCurrentLocation, setOnCurrentLocation] = useState(false);
   const [park, setpark] = useState(parkJson);
   const [zoomRatio, setZoomRatio] = useState(1);

   const [region, setRegion] = useState({
      longitude: 121.48163,
      latitude: 25.035798,
      longitudeDelta: 0.02,
      latitudeDelta: 0.04,
   })
   const [marker, setMarker] = useState({
      coord: {
         longitude: 121.48163,
         latitude: 25.035798,
      },
   });

   const setRegionAndMarker = (location) => {
      setRegion({
         ...region,
         longitude: location.coords.longitude,
         latitude: location.coords.latitude,
      });
      setMarker({
         ...marker,
         coord: {
            longitude: location.coords.longitude,
            latitude: location.coords.latitude,
         },
      });
   };

   const onRegionChangeComplete = (rgn) => {
      if (rgn.longitudeDelta > 0.02)
         setZoomRatio(0.02 / rgn.longitudeDelta);
      else
         setZoomRatio(1);
   }

   const getLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
         setMsg('Permission to access location was denied');
         return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setRegionAndMarker(location);
      setOnCurrentLocation(true);
   }

   //const getParkData = async () => {
     // const parkData = await getParkInfo();
     // setpark(parkData);
   //};

 /* useEffect(() => {
      if (Platform.OS === "android" && !Device.isDevice) {
         setMsg(
            "Oops, this will not work on Sketch in an Android emulator. Try it on your device!"
         );
         return
      }
      getLocation();
      getParkData();
   }, []);
*/
   return (
      <Box flex={1}>
         <MapView
            initialRegion={region}
            style={{ flex: 1 }}
            showsTraffic
            onRegionChangeComplete={onRegionChangeComplete}
         >
            {(zoomRatio > 0.14) && park.map((site) => (
               <Marker
                  coordinate={{ latitude: site.latitude, longitude: site.longitude }}             
                  title={site.name}
                  //description={site.address}
               >
                  <Center bg="#E8ABF2" borderRadius={40} p={4 * zoomRatio} borderWidth={2 * zoomRatio} borderColor="#3B629C">
                     <Icon name={"bus"} size={30 * zoomRatio} color="#3B629C" />
                  </Center>
               </Marker>
            ))}
           
         </MapView>
         {!onCurrentLocation && (
            <Box
               bg="white"
               borderRadius={60}
               position="absolute"
               shadow="2"
               zIndex={99}
               right={5}
               bottom={5}
            >
               <Ionicons name={"ios-locate"}
                  size={100}
                  color="black"
                  onPress={getLocation}
               />
            </Box>

         )}
      </Box>
   );
}