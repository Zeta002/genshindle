import { SET_TRIES, DECREMENT_TRIES } from '../actions/triesActions';

const initialState = {
  maxTries: 5,
  tries: 5,
};

const triesReducer = (state = initialState, action) => {
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
    default:
      return state;
  }
};

export default triesReducer;