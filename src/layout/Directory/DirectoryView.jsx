import React, { useEffect, useState } from "react";
import Select from "react-select";
import Tooltip from "@mui/material/Tooltip";
import odsData from "../../util/odsData";
import paises from "../../util/paises"
import getDirectory from "../../util/directory/getDirectory";

function DirectoryView() {
  const [ods, setOds] = useState("Todos");
  const [pais, setPais] = useState("Todos");
  const [directoryData, setDirectoryData] = useState([]);

  async function handleODS() {
    try {
      const data = await getDirectory(pais, ods);
      setDirectoryData(data);
    } catch (error) {}
  }

  const handleFilter = () => {
    handleODS();
  };

  handleODS();
  return (
    <>
      <main className="bg-img py-3">
        <div className="container w-50 p-3 border rounded border-secondary-subtle bg-gral">
          <div className="mb-3">
            <label htmlFor="seccion-lider" className="form-label fw-bold fs-2">
              Directorio
            </label>
          </div>
          <div className="container-cita p-3">
            <div className="quote-box">
              <div className="quote edu-au-vic-wa-nt-hand">
                <svg
                  className="mt-2 bi bi-quote"
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
                </svg>
                <blockquote>
                  Nunca subestimes el poder de un grupo de personas
                  comprometidas para cambiar el mundo. De hecho, es lo único que
                  lo ha logrado.
                </blockquote>
              </div>
              <div className="name">
                <b>Margaret Mead</b>, antropóloga cultural estadounidense.
              </div>
            </div>
          </div>
          <div>
            <p className="text-align-justify px-3">
              Nexus Project se fundamenta en los{" "}
              <b style={{ color: "#A63F52" }}>nexos</b> entre los miembros de
              una comunidad para lograr objetivos por el bienestar común. En la
              sección <b>Directorio</b> hemos reunido enlaces de contacto a
              aliados poderosos con los que nuestros usuarios podrían amplificar
              el impacto de sus ideas si estos las conocieran.
            </p>
          </div>
          <div className="p-4">
            <div>
              <label>Seleccione un país</label>
              <Select
                placeholder="--"
                options={paises}
                defaultValue={pais}
                onChange={(e) => {
                  setPais(e.label.props.children[1]);
                  handleFilter;
                }}
              />
            </div>
          </div>
          <div>
            <div>
              <label
                className="w-100 p-1 fw-bold"
                style={{ backgroundColor: "#C13B6C", color: "white" }}
              >
                Filtrar por letra inicial
              </label>
              <div className="d-flex flex-row mb-3">
                <div className="p-2">A</div>
                <div className="p-2">C</div>
                <div className="p-2">I</div>
                <div className="p-2">O</div>
                <div className="p-2">P</div>
                <div className="p-2">S</div>
              </div>
            </div>
            <div>
              <label
                className="w-100 p-1 fw-bold"
                style={{ backgroundColor: "#173567", color: "white" }}
              >
                Filtrar por ODS
              </label>
              <div className="d-flex justify-content-between mb-3 mt-2">
                {odsData.map((item, index) => (
                  <Tooltip key={index} title={item.title}>
                    <button
                      onClick={(e) => {
                        setOds(item.ods);
                        handleFilter;
                      }}
                      type="button"
                      className=" icono-ods fw-bold"
                      style={{ backgroundColor: item.color }}
                    >
                      {item.ods}
                    </button>
                  </Tooltip>
                ))}
                <Tooltip title={"Todos los ODS"}>
                  <button
                    onClick={(e) => setOds("Todos")}
                    type="button"
                    className=" icono-ods fw-bold"
                    style={{ backgroundColor: "#C13B6C" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-globe-americas"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484q-.121.12-.242.234c-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z" />
                    </svg>
                  </button>
                </Tooltip>
              </div>
            </div>
          </div>
          <div className="d-flex">
            <div className="me-3">
              <h5>
                País: <span className="ms-1 badge bg-oficial">{pais}</span>
              </h5>
            </div>
            <div className="me-3">
              <h5>
                ODS: <span className="ms-1 badge bg-oficial">{ods}</span>
              </h5>
            </div>
          </div>
          <div>
            {directoryData.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                className="text-dark"
              >
                <div className="d-flex justify-content-center my-1">
                  <img
                    src={item.imagen}
                    className="img-fluid w-50 h-auto"
                    alt="..."
                  ></img>
                  <div className="w-50 ps-2">
                    <h5 className="fs-5">{item.nombre}</h5>
                    <p className=" text-truncate">{item.descripcion}</p>
                    <span
                      style={{
                        backgroundColor: odsData[item.id_ods - 1].color,
                      }}
                      className="badge"
                    >
                      {item.ods}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default DirectoryView;
