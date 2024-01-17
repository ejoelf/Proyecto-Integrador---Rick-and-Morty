import { Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar.jsx";
import "./nav.css";

export default function Nav({ onSearch }) {
  return (
    <nav>
      <Link to="/home">
        <button>Home</button>
      </Link>
      <Link to="/About">
        <button>About</button>
      </Link>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
}
