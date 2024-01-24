import { useState } from "react";
import "./searchBar.css";

export default function SearchBar(props) {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      search();
    }
  };

  const search = () => {
    props.onSearch(id);
    setId("");
  };

  return (
    <div className="search-bar">
      <input
        type="search"
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        placeholder="🔎Ingresa un ID"
        value={id}
      />
      <button onClick={search} disabled={!id.trim()}>
        Agregar
      </button>
    </div>
  );
}
