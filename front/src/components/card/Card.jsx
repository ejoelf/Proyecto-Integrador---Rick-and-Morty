import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

export default function Card({
  id,
  name,
  species,
  status,
  gender,
  origin,
  image,
  onClose,
}) {
  return (
    <div className="card-container">
      <button className="card-close" onClick={() => onClose(id)}>
        X
      </button>
      <div className="card-header">
        <h2 className="card-title">{id}</h2>
        <Link to={`/detail/${id}`} className="card-title">
          <h2>{name}</h2>
        </Link>
      </div>
      <h2>{species}</h2>
      <h2>{status}</h2>
      <h2>{gender}</h2>
      <h2>{origin}</h2>
      <img className="card-image" src={image} alt={name} />
    </div>
  );
}
