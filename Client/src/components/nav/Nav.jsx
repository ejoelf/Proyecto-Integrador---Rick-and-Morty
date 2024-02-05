import { Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar.jsx";
import "./nav.css";

export default function Nav({ onSearch }) {
  return (
    <nav>
      <Link to="https://rickandmortyapi.com/" target="_blank">
        <img
          src="../../src/assets/icon/navbar.jpeg"
          alt="icono-Rick-and-Morty"
        />
      </Link>
      <Link to="/Home">
        <button>Home</button>
      </Link>
      <Link to="/Favourites">
        <button>Favourites</button>
      </Link>
      <Link to="/About">
        <button>About</button>
      </Link>
      <SearchBar onSearch={onSearch} />
      <Link to="/Logout">
        <button className="logout">Logout</button>
      </Link>
    </nav>
  );
}
