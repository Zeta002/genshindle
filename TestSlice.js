import {createSlice} from '@reduxjs/toolkit';

export const trySlice = createSlice({
    name: 'nbTry',
    initialState: {
      nbTry: 5
    },
    reducer: {
      //contient les fonctions qui vont modifier ma donnée

      removeTry: (state) => {
        state.nbtry -= 1;
      }
    }
  },
)

export const nbTry = (state) => state.nbTry