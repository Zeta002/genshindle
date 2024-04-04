export const SET_TRIES = 'SET_TRIES';
export const DECREMENT_TRIES = 'DECREMENT_TRIES';

export const setTries = (tries) => ({
  type: SET_TRIES,
  payload: tries,
});

export const decrementTries = () => ({
  type: DECREMENT_TRIES,
});