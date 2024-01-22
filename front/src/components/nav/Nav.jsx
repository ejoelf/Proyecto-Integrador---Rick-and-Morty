import { Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar.jsx";
import "./nav.css";

export default function Nav({ onSearch }) {
  return (
    <nav>
      <img src="../../src/assets/icon/navbar.jpeg" alt="icono-Rick-and-Morty" />
      <Link to="/Home">
        <button>Home</button>
      </Link>
      <Link to="/Favourites">
        <button>Favourites</button>
      </Link>
      <Link to="/About">
        <button>About</button>
      </Link>
      <Link to="/Logout">
        <button>Logout</button>
      </Link>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
}
