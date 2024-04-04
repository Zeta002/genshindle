import {SET_TRIES, DECREMENT_TRIES, SET_WIN_STREAK, INCREMENT_WIN_STREAK, SET_BEST_WIN_STREAK} from '../actions/scoresActions';

const initialState = {
  maxTries: 5,
  tries: 5,
  winStreak: 0,
  bestWinStreak: 0,
};

const scoresReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TRIES:
      return {
        ...state,
        tries: action.payload,
      };
    case DECREMENT_TRIES:
      return {
        ...state,
        tries: state.tries - 1,
      };
    case SET_WIN_STREAK:
      return {
        ...state,
        winStreak: action.payload,
      };
    case INCREMENT_WIN_STREAK:
      return {
        ...state,
        winStreak: state.winStreak + 1,
        bestWinStreak: Math.max(state.winStreak + 1, state.bestWinStreak),
      };
    case SET_BEST_WIN_STREAK:
      return {
        ...state,
        bestWinStreak: action.payload,
      };
    default:
      return state;
  }
};

export default scoresReducer;