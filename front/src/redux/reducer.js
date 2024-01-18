import { ADD_FAV, REMOVE_FAV } from "./actionTypes";

const initialState = {
  myFavorites: [],
};

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [payload, ...state.myFavorites],
      };
    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter((char) => char.id !== payload),
      };
    default:
      return state;
  }
}

export default reducer;
