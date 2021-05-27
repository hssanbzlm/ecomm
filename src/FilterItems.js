import React, { useState } from "react";
import "./filteritems.css";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";

function FilterItems({ handlePriceFilter, initMinMaxPrice, initialValue }) {
  function handleChange(e, newValue) {
    handlePriceFilter(newValue);
  }

  return (
    <div className="filter-container">
      <Typography id="range-slider">Price</Typography>
      <Slider
        value={initialValue}
        min={initMinMaxPrice[0]}
        max={initMinMaxPrice[1]}
        step={50}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        style={{ width: "80%", color: "gray" }}
      />
    </div>
  );
}

export default FilterItems;
