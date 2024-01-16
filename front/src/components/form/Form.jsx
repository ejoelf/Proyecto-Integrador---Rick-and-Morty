import { useState } from "react";
import validation from "./validation";

function Form({ login }) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setErrors(
      validation({ ...userData, [event.target.name]: event.target.value })
    );
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email:
          <input
            type="text"
            name="email"
            id="email"
            value={userData.email}
            placeholder="Ingrese un E-mail"
            onChange={handleChange}
          />
        </label>
        <p>{errors.email}</p>
        <br />
        <label htmlFor="password">
          Contraseña:
          <input
            type="password"
            name="password"
            id="password"
            value={userData.password}
            onChange={handleChange}
          />
        </label>
        <p>{errors.password}</p>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
