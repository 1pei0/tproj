import {
    ADD_FAVORITE_SPORT,
    TOGGLE_COLOR_MODE,
    REMOVE_FAVORITE_SPORT
} from '../utils/constant'

export const addFavoriteSport = (sportInfo) => (dispatch) => {
    const item = {
        title:sportInfo.title,
        title2:sportInfo.title2,
        artist:sportInfo.tartist,
        price:sportInfo.price,
        url:sportInfo.url,
        image2:sportInfo.image2,
        description:sportInfo.description,
    }
    dispatch({
        type: ADD_FAVORITE_SPORT,
        payload: item,
    });
};

export const removeFavoriteSport = (sporttitle) => (dispatch) => {
    dispatch({
        type: REMOVE_FAVORITE_SPORT,
        payload: sporttitle,
    })
}


export const toggleColorMode = () => (dispatch) => {
    dispatch({
        type: TOGGLE_COLOR_MODE,
    });
};
