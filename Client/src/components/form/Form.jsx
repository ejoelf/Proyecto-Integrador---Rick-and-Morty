import "./Form.css";
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
    <div className="login-container">
      <div className="form-container">
        <h1 className="text">Login</h1>
        <form onSubmit={handleSubmit} className="login">
          <label htmlFor="email" className="label">
            E-mail:
            <input
              className="input"
              type="text"
              name="email"
              id="email"
              value={userData.email}
              placeholder="example@email.com"
              autoComplete="off"
              onChange={handleChange}
            />
          </label>
          <p className="error">{errors.email}</p>
          <br />
          <label htmlFor="password" className="label">
            Password:
            <input
              className="input"
              type="password"
              name="password"
              id="password"
              placeholder="password"
              value={userData.password}
              onChange={handleChange}
            />
          </label>
          <p className="error">{errors.password}</p>
          <br />
          <button
            className="boton"
            type="submit"
            disabled={Object.keys(errors).length > 0}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
