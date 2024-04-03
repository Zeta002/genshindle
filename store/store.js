import {createSlice, configureStore} from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'try',
    initialState: {nbTry: 5},
    reducers: {
        increment(state) {
            state.nbTry++;
        },
        decrement(state) {
            state.nbTry--;
        }
    }
})

export const {increment, decrement} = counterSlice.actions;

const store = configureStore({
    reducer: counterSlice
})

export default store;