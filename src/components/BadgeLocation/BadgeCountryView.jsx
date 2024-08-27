import React from "react";
import paises from "../../util/paises";
import PaisesProyecto from "../../util/location/PaisesProyecto";

function BadgeCountryView({ data }) {
  const bandera = (item) => {
    const pais = PaisesProyecto.find((pais) => pais.label.props.children[1] === item);

    const imgSrc = pais.label.props.children[0].props.src;
    console.log(imgSrc);
    return imgSrc;
  };

  return (
    <>
      <span className="badge text-bg-info ">
        <div className="d-flex align-items-center">
          {" "}
          <img
            srcSet={bandera(data.country)}
            alt=""
            style={{ width: "30px" }}
            className="me-1"
          />
          {data.country}
        </div>
      </span>
    </>
  );
}

export default BadgeCountryView;
