import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Cards from "./components/cards/Cards.jsx";
import Nav from "./components/nav/Nav.jsx";
import About from "./components/about/About.jsx";
import Detail from "./components/detail/Detail.jsx";
import Error from "./components/error/Error.jsx";
import Form from "./components/form/Form.jsx";
import Favourites from "./components/favourites/Favourites.jsx";
import Logout from "./components/logout/Logout.jsx";

function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const URLserver = `http://localhost:3001/rickandmorty/character/`;
  const EMAIL = "joel@mail.com";
  const PASSWORD = "pass123";

  const onSearch = async (id) => {
    try {
      if (!id) return alert("Ingresa un ID");

      if (characters.find((char) => char.id == id)) {
        return alert(`Ya existe el personaje con el id ${id}`);
      }

      const { data } = await axios.get(`${URLserver}${id}`);

      if (data.name) {
        setCharacters([data, ...characters]);
      } else {
        alert("No hay personajes con este ID");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  async function login(userData) {
    try {
      const { email, password } = userData;
      const URL = "http://localhost:3001/rickandmorty/login/";
      const { data } = await axios(
        URL + `?email=${email}&password=${password}`
      );
      const { access } = data;
      setAccess(data);
      access && navigate("/home");
    } catch (error) {
      if (!access) return alert("Credenciales Incorrectas");
    }
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  return (
    <div className="App">
      {pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/Home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/About" element={<About />} />
        <Route path="/Detail/:id" element={<Detail />} />
        <Route path="/Favourites" element={<Favourites />} />
        <Route
          path="/Logout"
          element={<Logout onLogout={() => setAccess(false)} />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
