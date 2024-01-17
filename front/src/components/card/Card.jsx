import React from "react";
import { Link } from "react-router-dom";

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
      <button onClick={() => onClose(id)}>X</button>
      <h2>{id}</h2>
      <Link to={`/detail/${id}`}>
        <h2>{name}</h2>
      </Link>
      <h2>{species}</h2>
      <h2>{status}</h2>
      <h2>{gender}</h2>
      <h2>{origin}</h2>
      <img src={image} alt={name} />
    </div>
  );
}
