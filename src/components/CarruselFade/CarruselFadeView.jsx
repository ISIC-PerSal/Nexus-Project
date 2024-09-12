import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function CarruselFadeView({ images }) {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner ">
        {images.map((item, index) => (
          <div
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            key={index}
            data-bs-interval="10000"
          >
            <img src={item.url} className="d-block w-100" alt="..." />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarruselFadeView;
