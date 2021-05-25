import React, { useState } from "react";
import "./pagination.css";
function Pagination({ numberOfPagination, getPageNumber, activePage }) {
  if (numberOfPagination <= 1) {
    return null;
  }

  function handlePagination(e) {
    getPageNumber(e.target.value);
  }
  let pagination = [];
  for (let i = 1; i <= numberOfPagination; i++) {
    pagination.push(
      <li
        value={i}
        key={i}
        onClick={handlePagination}
        className={activePage === i ? "is-active" : undefined}
      >
        {i}
      </li>
    );
  }

  return (
    <div className="pagination">
      <ul>{pagination}</ul>
    </div>
  );
}

export default Pagination;
