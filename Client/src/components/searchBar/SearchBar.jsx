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

  const search = (event) => {
    event.preventDefault();
    props.onSearch(id);
    setId("");
  };

  return (
    <div className="search-bar">
      <input
        type="search"
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        placeholder="🔎 Enter ID"
        value={id}
      />
      <button onClick={search} disabled={!id.trim()}>
        Add
      </button>
    </div>
  );
}
