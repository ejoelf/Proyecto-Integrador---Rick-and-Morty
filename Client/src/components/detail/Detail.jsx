import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./detail.css";

function Detail() {
  //montaje
  const { id } = useParams();
  const [character, setCharacters] = useState({});
  const URLserver = `http://localhost:3001/rickandmorty/character/${id}`;
  const URL = "https://rym2.up.railway.app/api/character/";
  const API_KEY = "henrystaff";

  useEffect(() => {
    axios
      // .get(`${URL}${id}?key=${API_KEY}`)
      .get(`${URLserver}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacters(data);
        } else {
          alert("No hay personajes con ese ID");
        }
      })
      .catch((error) => {
        console.error("Error al cargar detalles:", error.message);
      });
  }, [id]);

  return (
    <section className="detail">
      <div className="detail-container">
        <div className="detail-header">
          <h2>{character.name}</h2>
        </div>
        <img
          className="detail-image"
          src={character.image}
          alt={character.name}
        />
        <div className="detail-info">
          <h3>
            Status: <span>{character.status}</span>
          </h3>
          <h3>
            Specie: <span>{character.species}</span>
          </h3>
          <h3>
            Gender: <span>{character.gender}</span>
          </h3>
          <h3>
            Origin: <span>{character.origin?.name}</span>
          </h3>
        </div>
      </div>
    </section>
  );
}

export default Detail;
