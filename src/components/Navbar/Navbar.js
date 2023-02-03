// import SearchBar from "./SearchBar";

import { Link, Outlet } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div>
        <Link to="/home">
          <img src="./logo-rick.png" width="250" />
        </Link>

        <Link to="/" className="link-barra">
          Logout
        </Link>

        <Link to="/home" className="link-barra">
          Home
        </Link>

        <Link to="/about" className="link-barra">
          About
        </Link>

        <Link to="/episodes" className="link-barra">
          Episodes
        </Link>

        <Link to="/location" className="link-barra">
          Location
        </Link>
        <Outlet />
      </div>
    </nav>
  );
};

export default Navbar;

// import React from "react";
// // import rick from "../../components/img/logo-rick.png";

// const Navbar = () => {
//   return (
//     <nav class="navbar navbar-expand-lg bg-body-tertiary">
//       <div class="container">
//         <h1 className="texto">
//           Rick & Morty <span className="text-primary">App</span>
//         </h1>
//         {/* <img className="conten-img" src={rick} alt="logo-rick"></img> */}
//         <button
//           class="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNavAltMarkup"
//           aria-controls="navbarNavAltMarkup"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span class="navbar-toggler-icon"></span>
//         </button>
//         <div
//           class="collapse navbar-collapse justify-content-end"
//           id="navbarNavAltMarkup"
//         >
//           <div class="navbar-nav">
//             <a class="nav-link active" aria-current="page" href="#">
//               Home
//             </a>
//             <a class="nav-link" href="#">
//               Features
//             </a>
//             <a class="nav-link" href="#">
//               Pricing
//             </a>
//             <a class="nav-link disabled">Disabled</a>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

//---------------------------------------------------------------------------------
//  <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
//    <div className="container">
//      <Link to="/" className="navbar-brand fs-3 ubuntu">
//        Rick & Morty <span className="text-primary">App</span>
//      </Link>

//      <button
//        className="navbar-toggler border-0"
//        type="button"
//        data-bs-toggle="collapse"
//        data-bs-target="#navbarNavAltMarkup"
//        aria-controls="navbarNavAltMarkup"
//        aria-expanded="false"
//        aria-label="Toggle navigation"
//      >
//        <span class="fas fa-bars open text-dark"></span>
//        <span class="fas fa-times close text-dark"></span>
//      </button>
//      <div
//        className="collapse navbar-collapse justify-content-end"
//        id="navbarNavAltMarkup"
//      >
//        <div className="navbar-nav fs-5">
//          <NavLink to="/" className="nav-link">
//            Characters
//          </NavLink>
//          <NavLink to="/about" className="nav-link">
//            About
//          </NavLink>
//          <NavLink to="/episodes" className="nav-link">
//            Episode
//          </NavLink>
//          <NavLink activeClassName="active" className="nav-link" to="/location">
//            Location
//          </NavLink>
//        </div>
//      </div>
//    </div>
//  </nav>;
//-------------------------------------
//  <svg
//    id="logo-15"
//    width="49"
//    height="48"
//    viewBox="0 0 49 48"
//    fill="none"
//    xmlns="http://www.w3.org/2000/svg"
//  >
//    {" "}
//    <path
//      d="M24.5 12.75C24.5 18.9632 19.4632 24 13.25 24H2V12.75C2 6.53679 7.03679 1.5 13.25 1.5C19.4632 1.5 24.5 6.53679 24.5 12.75Z"
//      className="ccustom"
//      fill="#9600fa"
//      stop-color="#9600fa"
//    ></path>{" "}
//    <path
//      d="M24.5 35.25C24.5 29.0368 29.5368 24 35.75 24H47V35.25C47 41.4632 41.9632 46.5 35.75 46.5C29.5368 46.5 24.5 41.4632 24.5 35.25Z"
//      className="ccustom"
//      fill="#9600fa"
//      stop-color="#9600fa"
//    ></path>{" "}
//    <path
//      d="M2 35.25C2 41.4632 7.03679 46.5 13.25 46.5H24.5V35.25C24.5 29.0368 19.4632 24 13.25 24C7.03679 24 2 29.0368 2 35.25Z"
//      className="ccustom"
//      fill="#9600fa"
//      stop-color="#9600fa"
//    ></path>{" "}
//    <path
//      d="M47 12.75C47 6.53679 41.9632 1.5 35.75 1.5H24.5V12.75C24.5 18.9632 29.5368 24 35.75 24C41.9632 24 47 18.9632 47 12.75Z"
//      className="ccustom"
//      fill="#9600fa"
//      stop-color="#9600fa"
//    ></path>{" "}
//  </svg>;
