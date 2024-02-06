import axios from "axios";
import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, LOGOUT } from "./actionTypes";

export const addFav = (character) => {
  return async (dispatch) => {
    try {
      const endpoint = "http://localhost:3001/rickandmorty/fav";
      const response = await axios.post(endpoint, character);
      const { data } = response;

      dispatch({
        type: ADD_FAV,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const removeFav = (id) => {
  return async (dispatch) => {
    try {
      const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
      const response = await axios.delete(endpoint);
      const { data } = response;

      dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    } catch (error) {
      console.error("Error removing favorite:", error);
    }
  };
};

export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};

export const orderCards = (orden) => {
  return {
    type: ORDER,
    payload: orden,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
