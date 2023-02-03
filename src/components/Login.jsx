import React, { useState, useEffect } from "react";
import validation from "./validation";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import "./Form.css";
import Navbar from "./Navbar/Navbar";
import "./Login.css";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    nombre: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const email = "usuario@gmail.com";
  const password = "123asd";

  const login = (form) => {
    if (form.email === email && form.password === password) {
      setAccess(true);
      navigate("/home");
    }
  };

  useEffect(() => {
    //si access es true  acces no se va ajecutar y me va allevar a barra home
    !access && navigate("/");
  }, [access]);

  const handleInputChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validation({
        ...form,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(form);
  };

  return (
    <body>
      <div className="login-container">
        <div className="login-contenido">
          <h1 className="titulo"> RICK AND MORTY</h1>
          <br />

          <form onSubmit={handleSubmit}>
            <label htmlFor="email" className="email">
              Email:
            </label>

            <div className="input-container">
              <input
                className="input-email"
                id="textoemail"
                type="text"
                name="email"
                placeholder="Ingrese su email"
                autoComplete="off"
                value={form.email}
                onChange={handleInputChange}
              />
              {errors.email && <p style={{ color: "white" }}>{errors.email}</p>}
            </div>

            <label htmlFor="password" className="contraseña">
              Password:
            </label>
            <input
              className="input-contraseña"
              id="textopass"
              type="password"
              name="password"
              placeholder="Ingrese su contraseña"
              value={form.password}
              onChange={handleInputChange}
            />
            {errors.password && (
              <p style={{ color: "white" }}>{errors.password}</p>
            )}

            <div>
              <button className="boton" type="submit" value="submit">
                ENVIAR
              </button>

              <input
                className="clave"
                id="texto"
                type="text"
                name="text"
                placeholder="email: usuario@gmail.com contraseña: 123asd"
              />
            </div>
          </form>
        </div>
      </div>
    </body>
  );
};

export default Login;
