import { configureStore } from '@reduxjs/toolkit';
import charactersReducer from '../reducers/characterReducer';

const store = configureStore({
  reducer: charactersReducer,
});

export default store;