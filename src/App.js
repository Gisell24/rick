//import "./components/App.css";
//import Cards from "./components/Cards/Cards";

import About from "./components/About";
//import Detail from "./components/Detail";

import { Routes, Route, Link, useLocation } from "react-router-dom";

import Login from "./components/Login";
//import Favorites from "./components/Favorites/Favorites";
import React from "react";
//import Filters from "./components/Filters/Filters";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
// import Pagination from "./components/Pagination/Pagination";
//import Search from "./components/Search/Search";
import Navbar from "./components/Navbar/Navbar";
import Location from "./components/Pages/Location";
import Episodes from "./components/Pages/Episodes";
import Home from "./components/Home";
import CardDetails from "./components/Cards/CardDetails";
import { Outlet } from "react-router";
import Footer from "./components/Footer";

//import "./components/Form.css";

function App() {
  const location = useLocation();

  return (
    <>
      <div>{location.pathname === "/" ? <Login /> : <Navbar />}</div>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/home/:id" element={<CardDetails />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/about/:id" element={<CardDetails />}></Route>
        <Route path="/episodes" element={<Episodes />}></Route>
        <Route path="/episodes/:id" element={<CardDetails />}></Route>
        <Route path="/location" element={<Location />}></Route>
        <Route path="/location/:id" element={<CardDetails />}></Route>
        <Route path="*" element={<default />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;

//{<Cards onClose={onClose} characters={characters}

//esto va despues del cierre del nav )}
//<Routes>
//   <Route
//     path="home"
//     element={<Cards onClose={onClose} characters={characters} />}
//   />
//   <Route path="/about" element={<About />} />
//   <Route path="detail/:detailId" element={<Detail />} />
//   <Route path="/favorites" element={<Favorites />} />
// </Routes>
// <h1> Rick & Morty</h1>

//  const onSearch = (character) => {
//    fetch(`https://rickandmortyapi.com/api/character/${character}`)
//      .then((response) => response.json())
//      .then((data) => {
//        if (data.name) {
//          setCharacters((oldChars) => [...oldChars, data]);
//        } else {
//          window.alert("No hay personajes con ese ID");
//        }
//      });
//  };

//  const onClose = (id) => {
//    setCharacters(characters.filter((character) => character.id !== id));
//  };

// {/* <Router>
//   <div className="App">
//     <Navbar />
//   </div>
//   <Routes>
//     <Route path="/" element={<Login />} />
//     <Route path="/episodes" element={<Episodes />} />

//     <Route path="/location" element={<Location />} />
//   </Routes>
// </Router>; */}

//--------------------
// {
//   location.pathname === "/" ? <Login /> : <Home />;
// }
