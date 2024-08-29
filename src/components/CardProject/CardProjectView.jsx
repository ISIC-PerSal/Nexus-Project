import React from "react";
import odsData from "../../util/odsData";
import BadgeODSView from "../BadgeODS/BadgeODSView";
import BadgeCountryView from "../BadgeLocation/BadgeCountryView";

function CardProjectView({ data, ods }) {
  return (
    <>
      <div className="card w-100 mb-3">
        <img src={data.image} className="card-img-top"></img>
        <div className="card-body">
          <h5 className="card-title">{data.project}</h5>
          <p className="card-text">{data.description}</p>
          <div className="d-flex flex-wrap">
          {ods.map((item, index) => (
            <BadgeODSView key={index} item={item} idShow={true}/>
          ))}
          </div>
          <BadgeCountryView data={data}/>
          <a href={data.url} className="btn btn-primary">
            Ir a la página oficial
          </a>
        </div>
      </div>
    </>
  );
}

export default CardProjectView;
