import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import Pagination from "./Pagination";
import "./paginator.css";

function Paginator({ data, pageSize }) {
  const [currentPage, setCurrentPage] = useState(1);
  const NumberOfPagination = Math.ceil(data.length / pageSize);
  useEffect(() => {
    console.log("rerender");
  }, [currentPage]);

  useEffect(() => {
    setCurrentPage(1);
    console.log("rerender");
  }, [data]);

  function getCurrentPage(page) {
    setCurrentPage(page);
  }

  return (
    <div className="paginator-container">
      <div className="items-data">
        {data
          .slice((currentPage - 1) * pageSize, pageSize * currentPage)
          .map((v) => (
            <ItemCard item={v} key={v.id} />
          ))}
      </div>
      <Pagination
        numberOfPagination={NumberOfPagination}
        getPageNumber={getCurrentPage}
        activePage={currentPage}
      />
    </div>
  );
}

export default Paginator;
