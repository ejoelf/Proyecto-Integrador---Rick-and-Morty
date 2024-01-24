import React from "react";
import Card from "../card/Card";
import "./cards.css";

export default function Cards(props) {
  const { characters, onClose } = props;
  return (
    <div className="cards-container">
      {characters.map((char) => (
        <Card
          key={char.id}
          id={char.id}
          name={char.name}
          status={char.status}
          species={char.species}
          gender={char.gender}
          origin={char.origin?.name}
          image={char.image}
          onClose={onClose}
        />
      ))}
    </div>
  );
}
