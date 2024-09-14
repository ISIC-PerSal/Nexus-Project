import React from "react";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";

function CarruselManualView({ images }) {
  return (
    <>
      {images.length > 0 ? (
        <CCarousel
          className="carousel-custom"
          controls
          indicators={true}
          transition="crossfade"
        >
          {images.map((item, index) => (
            <CCarouselItem
              key={index}
              className="carousel-item"
            >
              <CImage
                className="d-block w-100"
                src={item.url}
                alt={`slide ${index + 1}`}
              />
            </CCarouselItem>
          ))}
        </CCarousel>
      ) : ""}
    </>
  );
}

export default CarruselManualView;
