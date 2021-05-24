import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import "./paginator.css";

function Paginator({ data, pageSize }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState(data);
  const NumberOfPagination = Math.round(data.length / pageSize);
  useEffect(() => {
    console.log("rerender");
  }, [currentPage]);

  useEffect(() => {
    setCurrentPage(1);
    console.log("rerender");
  }, [data]);

  return (
    <div className="paginator-container">
      {data
        .slice((currentPage - 1) * pageSize, pageSize * currentPage)
        .map((v) => (
          <ItemCard item={v} key={v.id} />
        ))}

      <button
        style={{ width: "10%", height: "10%" }}
        onClick={() => setCurrentPage(2)}
      >
        Click
      </button>
    </div>
  );
}

export default Paginator;
