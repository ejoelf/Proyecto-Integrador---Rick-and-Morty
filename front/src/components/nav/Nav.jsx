import { Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar.jsx";

export default function Nav({ onSearch }) {
  return (
    <div>
      <Link to="/home">
        <button>Home</button>
      </Link>
      <Link to="/About">
        <button>About</button>
      </Link>
      <SearchBar onSearch={onSearch} />
    </div>
  );
}
