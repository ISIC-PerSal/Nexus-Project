import React from "react";
import CarruselFade from "../CarruselFade/CarruselFade";

function CardNewsView({ item }) {
  return (
    <div className="card w-100">
      {item.files.length > 0 ? <CarruselFade images={item.files} /> : ""}
      <div className="card-body">
        <h5 className="card-title">{item.type || "Card title"}</h5>
        <div
          className="card-text truncated-text"
          dangerouslySetInnerHTML={{
            __html: item.activity_content || "No content available",
          }}
        />
        <p className="card-text">Status: {item.status || "Unknown"}</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

export default CardNewsView;
