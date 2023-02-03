import React from "react";
import Gender from "../Category/Gender";
import Species from "../Category/Species";
import Status from "../Category/Status";

const Filters = ({ setStatus, setPageNumber, setGender, setSpecies }) => {
  let clear = () => {
    setStatus(" ");
    setPageNumber("1");
    setGender(" ");
    setSpecies(" ");
    window.location.reload(false);
  };
  return (
    <div className="col-lg-3 col-12 mb-5">
      <div style={{ color: "cyan" }} className="text-center fw-bold fs-4 mb-2">
        Filters
      </div>
      <div
        style={{ cursor: "pointer", color: "white" }}
        onClick={clear}
        className="text-center text-decoration-underline mb-4"
      >
        Clear Filters
      </div>

      <div className="accordion" id="accordionExample"></div>
      <Status setPageNumber={setPageNumber} setStatus={setStatus} />
      <Species setPageNumber={setPageNumber} setSpecies={setSpecies} />
      <Gender setGender={setGender} setPageNumber={setPageNumber} />
    </div>
  );
};

export default Filters;
