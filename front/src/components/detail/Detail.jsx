import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./detail.css";

function Detail() {
  //montaje
  const { id } = useParams();
  const [character, setCharacters] = useState({});
  const URL = "https://rym2.up.railway.app/api/character/";
  const API_KEY = "henrystaff";

  useEffect(() => {
    axios.get(`${URL}${id}?key=${API_KEY}`).then(({ data }) => {
      if (data.name) setCharacters(data);
      else alert("No hay personajes con ese ID");
    });
    return setCharacters({}); //desmontaje
  }, [id]); //actualización

  return (
    <div className="detail-container">
      <div className="detail-header">
        <h2>Name: {character.name}</h2>
      </div>
      <img
        className="detail-image"
        src={character.image}
        alt={character.name}
      />
      <div className="detail-info">
        <h4>Status: {character.status}</h4>
        <h4>Specie: {character.species}</h4>
        <h4>Gender: {character.gender}</h4>
        <h4>Origin: {character.origin?.name}</h4>
      </div>
    </div>
  );
}

export default Detail;
