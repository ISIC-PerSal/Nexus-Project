import React from "react";
import odsData from "../../util/odsData";

function BadgeODSView({ item={}, idShow=false}) {
  return (
    <>
        <span
          style={{ backgroundColor: odsData[item.id_ods - 1].color }}
          className="badge m-1"
        >
          {idShow == true ? item.id_ods + ". " : ""}
          {item.ods}
        </span>
    </>
  );
}

export default BadgeODSView;
