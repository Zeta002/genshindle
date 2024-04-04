export const SET_TRIES = 'SET_TRIES';
export const DECREMENT_TRIES = 'DECREMENT_TRIES';
export const SET_WIN_STREAK = 'SET_WIN_STREAK';
export const INCREMENT_WIN_STREAK = 'INCREMENT_WIN_STREAK';
export const SET_BEST_WIN_STREAK = 'SET_BEST_WIN_STREAK';

export const setTries = (tries) => ({
  type: SET_TRIES,
  payload: tries,
});

export const decrementTries = () => ({
  type: DECREMENT_TRIES,
});

export const setWinStreak = (winStreak) => ({
  type: SET_WIN_STREAK,
  payload: winStreak,
});

export const incrementWinStreak = () => ({
  type: INCREMENT_WIN_STREAK,
});

export const setBestWinStreak = (bestWinStreak) => ({
  type: SET_BEST_WIN_STREAK,
  payload: bestWinStreak,
});


