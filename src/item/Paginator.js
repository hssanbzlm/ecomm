import React, { useCallback, useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import Pagination from "./Pagination";
import "./paginator.css";

const Paginator = React.memo(function Paginator({
  data,
  pageSize,
  priceFilter,
  marquesFilter,
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const dataLength = data.filter(
    (v) =>
      v.price >= priceFilter[0] &&
      v.price <= priceFilter[1] &&
      marquesFilter[v.marque]
  ).length;
  const NumberOfPagination = Math.ceil(dataLength / pageSize);

  useEffect(() => {
    setCurrentPage(1);
  }, [data, priceFilter, marquesFilter]);

  const getCurrentPage = useCallback(
    (page) => {
      setCurrentPage(page);
    },
    [setCurrentPage]
  );

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
            <ItemCard item={v} key={v._id} />
          ))}
        {dataLength === 0 && <h5>Try another filter</h5>}
      </div>
      <Pagination
        numberOfPagination={NumberOfPagination}
        getPageNumber={getCurrentPage}
        activePage={currentPage}
      />
    </div>
  );
});

export default Paginator;
