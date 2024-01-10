import SearchBar from "./components/SearchBar.jsx";

export default function Nav() {
  return (
    <div>
      <SearchBar onSearch={onSearch} />;
    </div>
  );
}
