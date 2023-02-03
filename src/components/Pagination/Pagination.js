import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";

const Pagination = ({ info, pageNumber, setPageNumber }) => {
  let [width, setWidth] = useState(window.innerWidth);

  let updateDimension = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimension);
    return () => window.removeEventListener("resize", updateDimension);
  }, []);

  return (
    <>
      <style jsx>{`
        @media (max-width: 768px) {
          .next,
          .prev {
            display: none;
          }
          .pagination {
            font-size: 14px;
          }
        }
      `}</style>

      <ReactPaginate
        className="pagination justify-content-center gap-4 my-4  "
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        nextLabel="Next >"
        previousLabel="< Prev "
        containerclassName="pagination"
        pageclassName="page-num "
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={width < 576 ? 1 : 2}
        activeLinkClassName="active"
        onPageChange={(data) => {
          setPageNumber(data.selected + 1);
        }}
        pageCount={info?.pages}
      />
    </>
  );
};

export default Pagination;

// let next = () => {
//   setPageNumber((pag) => pag + 1);
// };

// let prev = () => {
//   if (pageNumber === 1) return;
//   setPageNumber((pag) => pag - 1);
// };

//  <div className="container d-flex justify-content-center gap-5 my-5">
//    <button onClick={prev} className="btn btn-primary">
//      Prev
//    </button>
//    <button onClick={next} className="btn btn-primary">
//      Next
//    </button>
//  </div>;
