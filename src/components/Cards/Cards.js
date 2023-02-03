import React from "react";
import styles from "./Card.module.scss";
import { Link } from "react-router-dom";

const Cards = ({ results, page }) => {
  let display;
  console.log(results);

  if (results) {
    display = results.map((char) => {
      let { id, name, image, location, status } = char;
      return (
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to={`${page}${id}`}
          key={id}
          className="col-lg-4 col-md-6 col12  mb-4 position-relative text-subtle"
        >
          <div
            className={`${styles.cards} d-flex flex-column justify-content-center`}
          >
            <img src={image} alt="" className={` ${styles.img} img-fluid`} />
            <div style={{ padding: "10px" }} className="content">
              <div className="fs-4 fw-bold mb-4">{name}</div>
              <div className="">
                <div className="fs-6">Última ubicación</div>
                <div className="fs-5">{location.name}</div>
              </div>
            </div>
          </div>

          {(() => {
            //si el estado del persona esta muerto entonces vamos a devolver algo aqui
            if (status === "Dead") {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-danger`}
                >
                  {status}
                </div>
              );
            } else if (status === "Alive") {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-success`}
                >
                  {status}
                </div>
              );
            } else {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-secondary`}
                >
                  {status}
                </div>
              );
            }
          })()}
        </Link>
      );
    });
  } else {
    display = " No Characters Found :/";
  }

  return <>{display}</>;
};

export default Cards;
