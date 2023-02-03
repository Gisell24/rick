// import React from "react";
// import { useState } from "react";
// // import Nav from "./components/Nav";
// import "./Form.css";
// import Nav from "./Nav";

// const Form = () => {
//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//   });

//   // const [errors, setErrors] = useState({
//   //   email: "",
//   //   password: "",
//   // });

//   // const validate = () => {
//   //   if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
//   //     setErrors({
//   //       ...errors,
//   //       email: "hay un error",
//   //     });
//   //   }
//   //   if (form.password.includes("1")) {
//   //     setErrors({
//   //       ...errors,
//   //       password: "no puede tener el 1",
//   //     });
//   //   }
//   // };

//   // useEffect(() => {
//   //     validate()
//   // }, [form])

//   // const handleFormChange = (event) => {
//   // const name = event.target.name;
//   // const value = event.target.value;
//   // setForm({
//   //     ...form,
//   //     [name]: value
//   // })

//   //   setForm({
//   //     ...form,
//   //     [event.target.name]: event.target.value,
//   //   });
//   //   validate();
//   // };

//   // const handleSubmit = (event) => {
//   //   event.preventDefault();
//   //   alert("Info enviada correctamente");
//   //   setForm({
//   //     email: "",
//   //     password: "",
//   //   });
//   // };
//   // const [usuario, setUsuario] = useState("");
//   // const [password, setPassword] = useState("");

//   // function iniciarSesion(event) {
//   //   event.preventDefault();
//   //   var textousuario = document.getElementById("textousuario").value;
//   //   var textopass = document.getElementById("textopass").value;
//   //   if (textousuario.length === 0 || textopass.length === 0) {
//   //     alert("Complete los datos Faltantes");
//   //   } else {
//   //     if (usuario === "admin" && password === "123") {
//   //       setForm("true");
//   //       document.getElementById("form_login").style.display = "none";
//   //     } else {
//   //       setForm("false");
//   //       alert("Error de Usuario y/o Contraseña");
//   //       document.getElementById("textousuario").value = "";
//   //       document.getElementById("textopass").value = "";
//   //       document.getElementById("textousuario").focus();
//   //     }
//   //   }
//   // }

//   return (
//     <body>
//       <div className="login-container">
//         <div className="login-contenido">
//           <form id="form_login">
//             <h1>BIENVENIDO</h1>
//             <h2>A LA APP DE RICK AND MORTY</h2>
//             <br />

//             <label htmlFor="email" className="title-label">
//               Email:
//             </label>

//             <div className="input-container">
//               <input
//                 className="regular-style"
//                 id="textousuario"
//                 type="email"
//                 name="email"
//                 placeholder="Ingrese su email"
//                 value={form.email}
//                 autoComplete="off"

//                 // onChange={(event) => setUsuario(event.target.value)}
//               />
//             </div>
//             <br />

//             <label htmlFor="password" className="title-label">
//               Password:
//             </label>
//             <input
//               className="regular-style"
//               id="textopass"
//               type="password"
//               name="password"
//               placeholder="Ingrese su contraseña"
//               value={form.password}
//               onChange={(e) => setUsuario(e.target.value)}
//               // onChange={(event) => setPassword(event.target.value)}
//             />
//             <button type="submit" onClick={iniciarSesion}>
//               ENVIAR
//             </button>
//           </form>

//           {form === "true" && <Nav />}
//         </div>
//       </div>
//     </body>
//   );
// };

// export default Form;
