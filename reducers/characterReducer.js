const initialState = { characters: [] };

const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_CHARACTERS':
      return { ...state, characters: action.payload };
    default:
      return state;
  }
}

export default charactersReducer;