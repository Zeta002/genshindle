import { configureStore } from '@reduxjs/toolkit';
import charactersReducer from '../reducers/characterReducer';
import triesReducer from "../reducers/triesReducer";

const store = configureStore({
  reducer: {
    char: charactersReducer,
    tries: triesReducer,
  },

});

export default store;