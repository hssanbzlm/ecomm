import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import Pagination from "./Pagination";
import "./paginator.css";

function Paginator({ data, pageSize, priceFilter, marquesFilter }) {
  const [currentPage, setCurrentPage] = useState(1);

  const NumberOfPagination = Math.ceil(
    data.filter(
      (v) =>
        v.price >= priceFilter[0] &&
        v.price <= priceFilter[1] &&
        marquesFilter[v.marque]
    ).length / pageSize
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [data, priceFilter, marquesFilter]);

  function getCurrentPage(page) {
    setCurrentPage(page);
  }
  console.log(NumberOfPagination);

  return (
    <div className="paginator-container">
      <div className="items-data">
        {data
          .filter(
            (v) =>
              v.price >= priceFilter[0] &&
              v.price <= priceFilter[1] &&
              marquesFilter[v.marque]
          )
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
