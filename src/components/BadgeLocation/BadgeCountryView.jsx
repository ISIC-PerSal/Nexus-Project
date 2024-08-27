import React from "react";
import paises from "../../util/paises";

function BadgeCountryView({ data }) {
  const bandera = (item) => {
    const pais = paises.find((pais) => pais.label.props.children[1] === item);

    const imgSrc = pais.label.props.children[0].props.src;
    console.log(imgSrc);
    return imgSrc;
  };

  return (
    <>
      <span class="badge text-bg-info ">
        <div className="d-flex align-items-center">
          {" "}
          <img
            src={bandera(data.country)}
            alt=""
            srcset=""
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
