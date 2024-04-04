const initialState = {
  gameWon: false,
  isModalVisible: false,
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'WIN_GAME':
      return {
        ...state,
        gameWon: true,
      };
    case 'LOSE_GAME':
      return {
        ...state,
        gameWon: false,
      };
    case 'OPEN_MODAL':
      return {
        ...state,
        isModalVisible: true,
      };
    case 'CLOSE_MODAL':
      return {
        ...state,
        isModalVisible: false,
      };
    default:
      return state;
  }
};

export default gameReducer;