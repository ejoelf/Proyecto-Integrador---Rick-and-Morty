import axios from "axios";
import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actionTypes";

export const addFav = async (character) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav";
  try {
    const { data } = await axios.post(endpoint, character);
    return {
      type: "ADD_FAV",
      payload: data,
    };
  } catch (error) {}
};

export const removeFav = async (id) => {
  const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
  try {
    const { data } = await axios.delete(endpoint);
    return {
      type: "REMOVE_FAV",
      payload: data,
    };
  } catch (error) {}
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
