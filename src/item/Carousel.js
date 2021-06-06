import React, { useState } from "react";
import "./carousel.css";
function Carousel({ images }) {
  const [active, setActive] = useState(0);
  return (
    <div className="carousel-container">
      <div className="big-img">
        <img width="100%" height="100%" src={images[active]} alt="item"></img>
      </div>
      <div className="group-img">
        {images.map((v, index) => (
          <img
            key={index}
            src={v}
            alt="item"
            onClick={(e) => setActive(index)}
            className={index === active ? "img-is-active" : undefined}
          ></img>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
