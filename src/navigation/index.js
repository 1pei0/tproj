import React, {useState} from 'react';
import { Center, Pressable, useColorMode ,colorMode} from "native-base";
import { Text, TouchableOpacity ,View,Image,StyleSheet} from "react-native";
import { NavigationContainer,useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList,DrawerItem  } from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



import BallScreen from '../screens/BallScreen';
import DetailScreen from '../screens/DetailScreen';
import SettingsScreen from '../screens/SettingScreen';
import DisplaySettingScreen from '../screens/DisplaySettingScreen'
import PracticeScreen from '../screens/PracticeScreen';
import BookmarkScreen from '../screens/BookmarkScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const Navigation = () => {
  return (
    <NavigationContainer >
      <MyDrawer/>     
   </NavigationContainer>
  );
}

   

const MyDrawer = () => {
  const{colorMode}=useColorMode();
  return (
    <Drawer.Navigator initialRouteName="Tab"
    screenOptions={{
      headerShadowVisible: false,
      title: '',
      drawerStyle:{
        backgroundColor:colorMode=="dark"?"#303030":"#fff",},
      drawerLabelStyle: {      
       marginLeft:30,
        fontSize: 14,
        lineHeight: 25,
        letterSpacing: 0.016
    },
    drawerInactiveBackgroundColor:colorMode=="dark"?"#303030":"#fff",
    drawerActiveBackgroundColor:colorMode=="dark"?"#fff":"#364A5C",
    drawerActiveTintColor:colorMode=="dark"?"#000000":"#fff",
    drawerInactiveTintColor:colorMode=="dark"?"#fff":"#000000",
    }}
    useLegacyImplementation
   
    drawerContent={(props) => <CustomDrawerContent {...props} />}
   >
    <Drawer.Screen
         name="Tab"
         component={MyTabs}
         options={{
          headerShown: false,
          title: 'Home',
          drawerIcon:({color})=>(
            <MaterialCommunityIcons name="home" color={color} size={26}  />
            
                ),
          headerTitleStyle: {            
            fontWeight: '400',
            fontSize: 0,
          },
    
          }}
      />
     
      <Drawer.Screen 
        name="Home" 
        component={AccountStack} 
        options={{
          drawerIcon:({color})=>(
            <MaterialCommunityIcons name="account" color={color} size={26} marginRight={2} />
                ),
          headerShown: false,
          title: 'accont',
        }}
      />
      <Drawer.Screen 
        name="SettingsStack" 
        component={SettingsStack} 
        options={{
          headerShown: false,
          title: "Settings",
          drawerIcon:({color})=>(
            <MaterialCommunityIcons name="cog" color={color} size={26} />
                ),
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 0
          },
        }}
      /> 
      
    </Drawer.Navigator>

  );  
}
const CustomDrawerContent = (props) => {
  return (
      <DrawerContentScrollView {...props}>
      <View style={styles.drawerHeader}>
          <View style={styles.avatarBox}>
              <Image w={130} height={180} source={require('../../assets/mask.png')} style={styles.avatar} resizeMode={'cover'} />
          </View>
          <View>
          <Image w={50} h={55}   source={require('../../assets/16.png')} style={styles.avatar2}/>
          </View>
          <Text style={styles.username} >Ting</Text>
      </View>
      <DrawerItemList {...props} />
      {/* <DrawerItem label="Help" onPress={() => alert('Link to help')} /> */}
      </DrawerContentScrollView>
  );
}



const MyTabs = () => {
  const {colorMode}=useColorMode();
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarStyle:{
          backgroundColor:colorMode=="dark"?"#303030":"#fff",
        },
        tabBarInactiveTintColor: colorMode=="dark"?"#AAAAAA":"#929292",
        tabBarActiveTintColor:colorMode=="dark"?"#fff":"#000000", 
               
        // headerShown: false
      }}
     
    >
      <Tab.Screen 
        name="HomeStack" 
        component={HomeStack}
        options={{
          headerShown: false,
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />       
      <Tab.Screen 
        name="Wishlist" 
        component={BookStack} 
        options={{
          headerShown:false,
          title: "Bookmark",
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20,          
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bookmark" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen 
        name="Setting" 
        component={PracticeStack}
        options={{
          headerShown:false,
          title: "Practice",
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="pencil" color={color} size={26} />
          ),
        }}
      />
      
    </Tab.Navigator>
  );
}

const HomeStack = ({navigation}) => {
  const [mark, setmark] = useState(true);
  const markFunction = () => {
      setmark(!mark);
  };
  return (
    <Stack.Navigator
       screenOptions={{
         
         headerShown: false,
         headerShadowVisible:false,
       }}
    >
      <Stack.Screen
        name="s"
        component={BallScreen}
        options= {{
          title:'',
          headerShown:true,
          backgroundColor:colorMode=="dark"?"#303030":"#fff",
          headerLeft: () => (
            <Pressable>
            <MaterialCommunityIcons
            name={'menu'}
            size={20}
            component={MyDrawer}
            onPress={()=> navigation.openDrawer()}
            style={{marginRight: 20}}          
            />
           </Pressable>
          ),
            headerRight: ({ color }) => (
              <MaterialCommunityIcons
              name={'magnify'}
              size={25}
              component={MyDrawer}
              style={{marginRight: 3}}
              color={color}
              />
         ),
        }}
      />
       
      
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={({ navigation}) => ({
          title:'',
          headerShown:true,
          headerShadowVisible:false,
          headerRight:() => (
            <TouchableOpacity onPress={() => markFunction()}>
            <Text>{mark ? <MaterialCommunityIcons name={'bookmark-outline'} color={'black'} size={25} />:
                            <MaterialCommunityIcons name={'bookmark'} color={'#6200EE'} size={25} />}
            </Text>
        </TouchableOpacity>
          ),
        })}
      />
 
    
    </Stack.Navigator>
  );
}
const AccountStack = ({navigation}) => {
  const [mark, setmark] = useState(true);
  const markFunction = () => {
      setmark(!mark);
  };
  return (
    <Stack.Navigator
       screenOptions={{
         
         headerShown: false,
         headerShadowVisible:false,
       }}
    >
      <Stack.Screen
        name="s"
        component={DisplaySettingScreen}
        options= {{
          title:'',
          headerShown:true,
          bg:"#E4F7FF",
          headerLeft: () => (
            <Pressable>
            <MaterialCommunityIcons
            name={'menu'}
            size={20}
            component={MyDrawer}
            onPress={()=> navigation.openDrawer()}
            style={{marginRight: 20}}          
            />
           </Pressable>
          ),
            headerRight: ({ color }) => (
              <MaterialCommunityIcons
              name={'magnify'}
              size={25}
              component={MyDrawer}
              style={{marginRight: 3}}
              color={color}
              />
         ),
        }}
      />
       
      
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={({ navigation}) => ({
          title:'',
          headerShown:true,
          headerShadowVisible:false,
          headerRight:() => (
            <TouchableOpacity onPress={() => markFunction()}>
            <Text>{mark ? <MaterialCommunityIcons name={'bookmark-outline'} color={'black'} size={25} />:
                            <MaterialCommunityIcons name={'bookmark'} color={'#6200EE'} size={25} />}
            </Text>
        </TouchableOpacity>
          ),
        })}
      />
 
    
    </Stack.Navigator>
  );
}

 const BookStack = ({navigation}) => {
  return  (
    <Stack.Navigator
       screenOptions={{
         headerShown: false,
         headerShadowVisible:false,
       }}
    >
      <Stack.Screen
        name="s"
        component={BookmarkScreen}
        options= {{
          title:'',
          headerShown:true,
          headerLeft: () => (
            <Pressable>
            <MaterialCommunityIcons
            name={'menu'}
            size={20}
            component={MyDrawer}
            onPress={()=> navigation.openDrawer()}
            style={{marginRight: 20}}          
            />
           </Pressable>
          ),
            headerRight: ({ color }) => (
              <MaterialCommunityIcons
              name={'magnify'}
              size={25}
              component={MyDrawer}
              style={{marginRight: 3}}
              color={color}
              />
         ),
        }}
      />
    </Stack.Navigator>
  );
}

const PracticeStack = ({navigation}) => {
  const [mark, setmark] = useState(true);
  const markFunction = () => {
      setmark(!mark);
  };
  return  (
    <Stack.Navigator
       screenOptions={{
         headerShown: false,
         headerShadowVisible:false,
       }}
    >
      <Stack.Screen
        name="s"
        component={PracticeScreen}
        options= {{
          title:'',
          headerShown:true,
          headerLeft: () => (
            <Pressable>
            <MaterialCommunityIcons
            name={'menu'}
            size={20}
            component={MyDrawer}
            onPress={()=> navigation.openDrawer()}
            style={{marginRight: 20}}          
            />
           </Pressable>
          ),
            headerRight: ({ color }) => (
              <MaterialCommunityIcons
              name={'magnify'}
              size={25}
              component={MyDrawer}
              style={{marginRight: 3}}
              color={color}
              />
         ),
        }}
      />
    </Stack.Navigator>
  );
}
      

const SettingsStack = ({navigation}) => { 
  return (
     <Stack.Navigator >      
       <Stack.Screen
          name="Settings"
          component={SettingsScreen}
      options={{
            title: "",
            title:'',
            headerShown:true,
            bg:"#E4F7FF",
            headerLeft: () => (
              <Pressable>
              <MaterialCommunityIcons
              name={'menu'}
              size={20}
              component={MyDrawer}
              onPress={()=> navigation.openDrawer()}
              style={{marginRight: 20}}          
              />
             </Pressable>
            ),
              headerRight: ({ color }) => (
                <MaterialCommunityIcons
                name={'magnify'}
                size={25}
                component={MyDrawer}
                style={{marginRight: 3}}
                color={color}
                />
           ),
          }}
        />
  
     <Stack.Screen
        name="DisplaySetting"
        component={DisplaySettingScreen}
        options={{
              title: "Display",
              headerTitleStyle: {
              fontWeight: '400',
              fontSize: 20
         },
         }}
      />
  </Stack.Navigator>
  );
  }
export default Navigation;
const styles = StyleSheet.create({
  drawerHeader: { 
      
      borderBottomWidth: 1,
      borderColor: '#EDEDEF',   
      
  },
  avatarBox: {
      width: 350,
      height: 200,
      
  },
  avatar: {
      width: 280,
      height: 290,
      
  },
  avatar2: {
    width: 75,
    height: 86,
    marginLeft:105,
    marginTop:-75,
},
  username: {
      color: '#131313',
      fontSize: 24,
      fontWeight: 'bold',
      marginLeft:117,
      lineHeight: 28,
      letterSpacing: 0.3,
      marginTop: -120,
      marginBottom:170,
  },
});