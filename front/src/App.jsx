import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav.jsx";
import About from "./components/About.jsx";

function App() {
  const [characters, setCharacters] = useState([]);
  const URL = "https://rym2.up.railway.app/api/character/";
  const API_KEY = "henrystaff";

  const onSearch = (id) => {
    if (!id) return alert("Ingresa un ID");
    if (characters.find((char) => char.id == id))
      return alert(`Ya existe el personaje con el id ${id}`);
    axios
      .get(`${URL}${id}?key=${API_KEY}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacters([data, ...characters]);
        } else {
          alert("No hay personajes con este ID");
        }
      })
      .catch((err) => alert(err.message));
  };

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/About" element={<About />} />
        <Route path="/Detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
