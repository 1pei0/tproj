import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//Favorite Bike Stack Components
import FavoriteBikeScreen from '../../screen/FavoriteBikesScreen';

const Stack = createStackNavigator();

const FavoriteStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="我的收藏" component={FavoriteBikeScreen} />
    </Stack.Navigator>
);

export default FavoriteStack;