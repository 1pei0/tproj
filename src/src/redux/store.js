
import { configureStore } from '@reduxjs/toolkit';
import saveReducer from '../redux/accountSlice';

// Part2: Combine Reducers and Create a Store
const store = configureStore({
   reducer: {
     counter: saveReducer
   },
   devTools: process.env.NODE_ENV !== 'production',
 });

//  export store to global
export default store;