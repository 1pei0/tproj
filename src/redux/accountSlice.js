import { createSlice } from '@reduxjs/toolkit';


// Part1: Define Slice (including reducers and actions)
const initialState = { counterValue: 0 };

const saveSlice = createSlice({
  name: 'save',
  initialState,
  reducers: {
    setCounter: (state, action) => {
      state.saveValue = action.payload;
    },
  },
});

// export state to global
export const selectSave = (state) => state.save.saveValue;

// export actions to global
export const { setSave } = saveSlice.actions;

// export reducer to global
export default saveSlice.reducer;