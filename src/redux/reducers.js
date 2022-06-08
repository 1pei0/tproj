import {
    ADD_FAVORITE_SPORT,
    TOGGLE_COLOR_MODE,
    REMOVE_FAVORITE_SPORT,
  } from '../utils/constant';
  
  const initialFavoriteSport = {
    sports: [],
  };
  const initialColorMode = { colorMode: "light" };
  
  export const colorModeReducer = (state = initialColorMode, action) => {
    switch (action.type) {
  
      case TOGGLE_COLOR_MODE:
        const colorMode =
          (state.colorMode == 'light')
            ? 'dark'
            : 'light';
        return { colorMode };
  
      default:
        return state;
    }
  }
  
  
  export const addFavReducer = (state = initialFavoriteSport, action) => {
    switch (action.type) {
  
      case ADD_FAVORITE_SPORT:
        return {
          ...state, //copying original state
          bikes: [ ...state.sports, action.payload ]
        };
      
      case REMOVE_FAVORITE_SPORT:
        return {
          ...state,
          sports: state.sports.filter(sports => sports.ID !== action.payload)
        }
  
      default:
        return state;
    }
  }
  
  