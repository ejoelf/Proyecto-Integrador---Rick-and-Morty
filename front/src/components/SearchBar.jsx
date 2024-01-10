import { useState } from "react";

export default function SearchBar(props) {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  return (
    <div>
      <input
        type="search"
        onChange={handleChange}
        placeholder="Ingresa un ID"
        value={id}
      />
      <button onClick={() => props.onSearch("ID del personaje")}>
        Agregar
      </button>
    </div>
  );
}
