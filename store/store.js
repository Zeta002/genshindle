import { configureStore } from '@reduxjs/toolkit';
import charactersReducer from '../reducers/characterReducer';
import scoresReducer from "../reducers/scoresReducer";
import gameReducer from "../reducers/gameReducer";

const store = configureStore({
  reducer: {
    char: charactersReducer,
    tries: scoresReducer,
    game: gameReducer,
  },

});

export default store;