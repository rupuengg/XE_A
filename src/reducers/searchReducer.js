import SEARCH from '../actions/search.action';

const initialState = {
  searchText: "",
  lists: [],
  isSearching: false,
};

function searchReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH.SEARCH_TEXT:
      return {
        ...state,
        searchText: action.payload
      };
    case SEARCH.FETCH_MUSIC:
      return {
        ...state,
        lists: action.payload
      };
    case SEARCH.SEARCHING:
      return {
        ...state,
        isSearching: action.payload
      };
    case SEARCH.SEARCHING_STOP:
      return {
        ...state,
        isSearching: action.payload
      };
    default:
      return state;
  }
}

export default searchReducer;