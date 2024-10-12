import React from "react";
import PaisesProyecto from "../location/PaisesProyecto";

export default function getFlag(item) {
  const pais = PaisesProyecto.find(
    (pais) => pais.label.props.children[1] === item
  );

  const imgSrc = pais.label.props.children[0].props.src;
  return imgSrc;
}
