import React, { useState } from "react";
import "./filteritems.css";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";

const FilterItems = React.memo(function FilterItems({
  handlePriceFilter,
  initMinMaxPrice,
  value,
  marques,
  handleMarquesFilter,
}) {
  console.log("from filter items");
  const [checked, setChecked] = useState(() => {
    const initChecks = {};
    for (const [key, value] of Object.entries(marques)) {
      initChecks[key] = true;
    }
    return initChecks;
  });
  function handlePriceChange(e, newValue) {
    handlePriceFilter(newValue);
  }
  function handleMarquesChange(e) {
    const checks = Object.assign({}, checked);
    if (e.target.checked) {
      checks[e.target.value] = true;
      handleMarquesFilter({ checked: true, value: e.target.value });
    } else {
      checks[e.target.value] = false;
      handleMarquesFilter({ checked: false, value: e.target.value });
    }
    setChecked(checks);
  }

  return (
    <div className="filter-container">
      <Typography id="range-slider">Price</Typography>
      <Slider
        value={value}
        min={initMinMaxPrice[0]}
        max={initMinMaxPrice[1]}
        step={50}
        onChange={handlePriceChange}
        valueLabelDisplay="on"
        aria-labelledby="range-slider"
        style={{ width: "80%", color: "gray" }}
        marks={true}
      />
      <Typography id="range-slider">Marques</Typography>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "70%",
        }}
      >
        {Object.keys(marques).map((marque, i) => (
          <label
            key={i}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {" "}
            {`${marque} (${marques[marque]})`}
            <input
              value={marque}
              type="checkbox"
              key={i}
              onChange={handleMarquesChange}
              checked={checked[marque]}
            />
          </label>
        ))}
      </form>
    </div>
  );
});

export default FilterItems;
