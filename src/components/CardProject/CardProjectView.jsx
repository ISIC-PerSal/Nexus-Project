import React, { useEffect, useState } from "react";
import odsData from "../../util/odsData";
import BadgeODSView from "../BadgeODS/BadgeODSView";
import BadgeCountryView from "../BadgeLocation/BadgeCountryView";
import TruncatedText from "../TruncatedText/TruncatedText";
import { Link } from "react-router-dom";
import imgDefault from "../../assets/Logo.png";
import { useNavigate } from "react-router-dom";

function CardProjectView({ data }) {
  const [odsArray, setOdsArray] = useState([]);
  const navigate = useNavigate();

  const imagProject = data.image;
  const idProject = data.id_project_pk;
  const projectData = data;

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
  }, [idProject]);

  return (
    <>
      <div className="w-100 mb-3 pb-3 d-flex justify-content-between border-bottom  border-2">
        <div className="d-flex justify-content-center w-50 bg-white">
          <img
            src={imagProject ? imagProject : imgDefault}
            srcSet={data.image ? data.image : imgDefault}
            className="w-100 h-auto"
          ></img>
        </div>
        <div className="w-50 ps-2">
          <div className="d-flex justify-content-end">
            <BadgeCountryView data={data} />
          </div>
          <h5 className="card-title">{data.project}</h5>
          <TruncatedText text={data.description} long={160} size="12" />
          <div className="d-flex flex-wrap">
            <span className="fw-bold">ODS: </span>
            {odsArray.map((item, index) => (
              <BadgeODSView key={index} item={item} idShow={true} />
            ))}
          </div>

          <Link
            to={`/explore/${idProject}`}
            state={{ statusProject: data.status }}
            className="btn bg-oficial text-white w-100 p-1"
          >
            Ver mas detalles
          </Link>
        </div>
      </div>
    </>
  );
}

export default CardProjectView;
