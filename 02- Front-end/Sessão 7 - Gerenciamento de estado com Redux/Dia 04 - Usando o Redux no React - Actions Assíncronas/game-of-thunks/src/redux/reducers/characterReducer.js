const INITIAL_STATE = {
  isLoading: false,
  character: '',
}

const characterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SEARCH_BEGIN':
      return {
        ...state,
        isLoading: true,
      }
    case 'SEARCH_SUCCESS':
      return {
        ...state,
        isLoading: true,
        character: action.character[0],
      }
    case 'SEARCH_ERROR':
      return {
        ...state,
        isLoading: true,
        character: action.error,
      }
    default:
      return state
  }
}

export default characterReducer;