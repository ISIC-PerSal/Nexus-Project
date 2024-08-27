import React, { useEffect, useState } from "react";
import CardProjectView from "./CardProjectView";
import odsData from "../../util/odsData";

function CardProject({ data }) {
  const [odsArray, setOdsArray] = useState([]);

  const renderODS = () => {
    const activeODS = [];

    for (let i = 1; i <= 17; i++) {
      const odsKey = `ods${i}`;
      if (data[odsKey] === "1") {
        const odsItem = {
          id_ods: i,
          ods: odsData[i - 1].title,
        };
        activeODS.push(odsItem);
      }
    }

    setOdsArray(activeODS);
  };

  useEffect(() => {
    renderODS();
  }, [data]); 

  return (
    <>
      <CardProjectView data={data} ods={odsArray} />
    </>
  );
}

export default CardProject;
