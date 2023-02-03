// import { useEffect, useState } from "react";
// import Cards from "./Cards";

// const Principal = () => {
//   const [carga, setCarga] = useState(true);
//   const [personajes, setPersonajes] = useState([]);

//   useEffect(() => {
//     const fetchPersonajes = async () => {
//       const res = await fetch("https://rickandmortyapi.com/api/character");
//       const data = await res.json();
//       setPersonajes(data.results); //lo voy a tener guardado en la variable personaje
//       setCarga(false);
//     };
//     fetchPersonajes();
//   }, []);

//   return (
//     <div>
//       carga ? <div>Cargando...</div> : <Cards />
//     </div>
//   );
// };

// export default Principal;
