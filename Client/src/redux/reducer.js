import { ADD_FAV, FILTER, REMOVE_FAV, ORDER, LOGOUT } from "./actionTypes";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

function reducer(state = initialState, action) {
  const { type, payload } = action;

  const filteredFavorites =
    payload === "All"
      ? state.myFavorites
      : state.myFavorites.filter((char) => char.gender === payload);

  const orderedFavorites = [...state.myFavorites].sort((a, b) => {
    if (payload === "ascendente") return a.id - b.id;
    return b.id - a.id;
  });

  switch (type) {
    case ADD_FAV:
      return { ...state, myFavorites: payload, allCharacters: payload };
    case REMOVE_FAV:
      return { ...state, myFavorites: payload };
    case FILTER:
      return {
        ...state,
        myFavorites: filteredFavorites,
      };
    case ORDER:
      return {
        ...state,
        myFavorites: orderedFavorites,
      };
    case LOGOUT:
      return initialState;

    default:
      return state;
  }
}

export default reducer;
