import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav.jsx";

function App() {
  const [characters, setCharacters] = useState([]);
  const URL = "https://rym2.up.railway.app/api/character/10?key=";
  const API_KEY = "henrystaff";

  const example = {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    gender: "Male",
    origin: {
      name: "Earth (C-137)",
      url: "https://rickandmortyapi.com/api/location/1",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  };
  const onSearch = (id) => {
    setCharacters([...characters, example]);
  };

  return (
    <div className="App">
      <Nav />
      <Cards characters={characters} />
    </div>
  );
}

export default App;
