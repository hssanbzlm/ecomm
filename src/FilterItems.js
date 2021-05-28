import React, { useState } from "react";
import "./filteritems.css";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";

const FilterItems = React.memo(function FilterItems({
  handlePriceFilter,
  initMinMaxPrice,
  value,
  marques,
}) {
  function handleChange(e, newValue) {
    handlePriceFilter(newValue);
  }
  console.log(marques);
  return (
    <div className="filter-container">
      <Typography id="range-slider">Price</Typography>
      <Slider
        value={value}
        min={initMinMaxPrice[0]}
        max={initMinMaxPrice[1]}
        step={50}
        onChange={handleChange}
        valueLabelDisplay="on"
        aria-labelledby="range-slider"
        style={{ width: "80%", color: "gray" }}
        marks={true}
      />
      <Typography id="range-slider">Marques</Typography>
      {Object.keys(marques).map((key) => (
        <div key={key}>
          {key} {marques[key]}{" "}
        </div>
      ))}
    </div>
  );
});

export default FilterItems;
