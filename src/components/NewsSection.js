import React,{useState} from "react";
import { Linking,Dimensions ,useWindowDimensions ,View, StyleSheet, StatusBar} from 'react-native';
import {  Flex, useColorMode, Wrap} from "native-base"
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'
import NewsSectionDetail from "./NewsSectionDetail";

const NewsSection = ({ album, navigation }) => {
  const AllRoute = () => (
    <NewsSectionDetail List={true} navigation={navigation} backgroundColor={'#ffffff'} />
);
const NormalRoute = () => (
  < NewsSectionDetail List={true} navigation={navigation} backgroundColor={'#ffffff'} />
);
const CompetitionRoute = () => (
  <NewsSectionDetail List={true} navigation={navigation} backgroundColor={'#ffffff'} />
);
const renderScene = SceneMap({
  All: AllRoute,
  Normal: NormalRoute ,
  Competition: CompetitionRoute ,
}); 

const [index, setIndex] = React.useState(0);
const [routes] = React.useState([
    { key: 'All', title: 'All'},
    { key: 'Normal', title: 'Normal'},
    { key: 'Competition', title: 'Competition'},
]);
//const initialLayout = { width: Dimensions.get('window').width };
const layout = useWindowDimensions();
const {colorMode} = useColorMode();

const renderTabBar = props => (
    <TabBar 
        {...props}
        style={{ 
            backgroundColor:  colorMode=="dark"? "#364A5C": "#E4F7FF", 
            marginLeft: 25,  
            marginRight:30, 
            borderBottomWidth: 2,
            borderColor: colorMode=="dark"? "#D3D3D366": "#858585"
        }}
        tabStyle={{width: 110,height:40,}}
        activeColor={colorMode=="dark"?"#ffffff": "#364A5C"} 
        inactiveColor={colorMode=="dark"?"#B9B9B9": "#858585"}
        labelStyle={{fontSize: 14,marginLeft:-10,marginLeft:-15,}}
        indicatorStyle={{
            backgroundColor: colorMode=="dark"?"#ffffff":"#364A5C", 
            height: 3, borderRadius: 3, width:100,
            position: "absolute", bottom: -1.5
        }}
    />
)
return (     
  <TabView
  
  marginLeft={40}
  renderTabBar={renderTabBar}
  navigationState={{ index, routes }}
  renderScene={renderScene}
  onIndexChange={setIndex}
  initialLayout={{width: layout.width}}
  style={styles.container}
/>
  
)};


export default NewsSection;
const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  }  
});


