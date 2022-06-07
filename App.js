import { SafeAreaProvider} from 'react-native-safe-area-context';
import { NativeBaseProvider } from 'native-base';
import Navigation from './src/navigation';
import React, { useEffect, getState } from "react";
import {Provider } from "react-redux";
import { store } from './src/redux/store';

const App=() =>{
  return (
    <SafeAreaProvider>
     <Provider  store={store}>
      <NativeBaseProvider>
      <Navigation />  
      </NativeBaseProvider>
      </Provider>
  </SafeAreaProvider>
  );
}


export default App;
