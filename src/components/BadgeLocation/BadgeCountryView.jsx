import React from "react";
import PaisesProyecto from "../../util/location/PaisesProyecto";

function BadgeCountryView({ data }) {
  if (!data) {
    return null;
  }
  const bandera = (item) => {
    const pais = PaisesProyecto.find((pais) => pais.label.props.children[1] === item);

    const imgSrc = pais.label.props.children[0].props.src;
    return imgSrc;
  };

  return (
    <>
      <span className="">
        <div className="d-flex align-items-center">
          {" "}
          <img
            alt=""
            srcSet={bandera(data.country)}
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
