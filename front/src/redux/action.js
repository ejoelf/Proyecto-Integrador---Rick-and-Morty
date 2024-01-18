import { ADD_FAV, REMOVE_FAV } from "./actionTypes";

export const addFav = (payload) => ({ type: ADD_FAV, payload });

export const removeFav = (id) => {
  return {
    type: REMOVE_FAV,
    payload: id,
  };
};
