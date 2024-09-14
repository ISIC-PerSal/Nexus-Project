import React from "react";
import CarruselFade from "../CarruselFade/CarruselFade";

function CardNewsView({ item, getStatusIcon }) {
  const dateSplit = item.created_at.split(" ")[0];
  const dateArray = dateSplit.split("-");
  const date = dateArray[2] + "/" + dateArray[1] + "/" + dateArray[0];
  const time = item.created_at.split(" ")[1];
  return (
    <div className="card w-100">
      {item.files.length > 0 ? <CarruselFade images={item.files} /> : ""}
      <div className="card-body">
        {
          item.type == "Noticia" ?
            (<span className="badge text-bg-success">{item.type}</span>) :
            (<span className="badge text-bg-warning">{item.type}</span>)
        }
        {getStatusIcon(item.status)}
        <div className="d-flex align-items-center">
          <span class="badge text-bg-secondary ms-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar4-week me-1" viewBox="0 0 16 16">
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
            <path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-2 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z" />
          </svg>
            <span className="ms.1">{date}</span>
          </span>
          <div />
          <div className="d-flex align-items-center"></div>
          <span class="badge text-bg-secondary ms-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock-fill me-1" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
            </svg>
            <span className="ms-1">{time}</span>
          </span>
        </div>
        <di
          className="card-text truncated-text"
          dangerouslySetInnerHTML={{
            __html: item.activity_content || "No content available",
          }}
        />
        <a href="#" className="btn bg-oficial text-white">
          Ver mas
        </a>
      </div>
    </div>
  );
}

export default CardNewsView;
