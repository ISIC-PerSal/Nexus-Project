import React from "react";
import CarruselFade from "../CarruselFade/CarruselFade";

function CardNewsView({ item, getStatusIcon}) {
  return (
    <div className="card w-100">
      {item.files.length > 0 ? <CarruselFade images={item.files} /> : ""}
      <div className="card-body">
        {item.type == "Noticia" ? (
          <span className="badge text-bg-success">{item.type}</span>
        ) : (
          <span className="badge text-bg-warning">{item.type}</span>
        )}
        <span className="badge text-bg-primary">{getStatusIcon(item.status)}</span>
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
