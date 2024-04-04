const initialState = { characters: [], selectedCharacter: null, propositions: [] };

const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_CHARACTERS':
      return { ...state, characters: action.payload };
    case 'SELECT_RANDOM_CHARACTER':
      return { ...state, selectedCharacter: action.payload };
    case 'ADD_PROPOSITION':
      return { ...state, propositions: [...state.propositions, action.payload] };
    case 'CLEAR_PROPOSITIONS':
      return { ...state, propositions: [] };
    default:
      return state;
  }
}

export default charactersReducer;