import {createSlice} from '@reduxjs/toolkit';

const favoritesSlice =  createSlice({
    name: 'favorites',
    initialState:{
        ids: []
    },

    reducers: {
        addFavorite: (state, action) => {
                state.ids.push(action.payload.id);
        },//Every methode gets the latest state as input,
        removeFavorite: (state) => {
              state.ids.splice(state.ids.indexOf(action.payload.id), 1)
        }
    }//Functions that use to change our states
})//With redux-toolkit we can miutate the state

export const addFavorite =  favoritesSlice.actions.addFavorite;
export const removeFavorite = favoritesSlice.actions.removeFavorite;
export default favoritesSlice.reducer;