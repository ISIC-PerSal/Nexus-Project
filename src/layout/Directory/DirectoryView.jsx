import React from "react";
import Select from "react-select";
import Tooltip from "@mui/material/Tooltip";
import odsData from "../../util/odsData";

function DirectoryView() {
  const paises = [
    {
      value: "1",
      label: (
        <div className="d-flex align-items-center">
          <img
            src="https://flagpedia.net/data/flags/h80/cl.webp"
            alt="Chile"
            style={{ width: "30px", height: "20px", marginRight: "8px" }}
          />
          Chile
        </div>
      ),
    },
    {
      value: "2",
      label: (
        <div className="d-flex align-items-center">
          <img
            src="https://flagpedia.net/data/flags/h80/co.webp"
            alt="Colombia"
            style={{ width: "30px", height: "20px", marginRight: "8px" }}
          />
          Colombia
        </div>
      ),
    },
    {
      value: "3",
      label: (
        <div className="d-flex align-items-center">
          <img
            src="https://flagpedia.net/data/flags/h80/gt.webp"
            alt="México"
            style={{ width: "30px", height: "20px", marginRight: "8px" }}
          />
          Guatemala
        </div>
      ),
    },
    {
      value: "4",
      label: (
        <div className="d-flex align-items-center">
          <img
            src="https://flagpedia.net/data/flags/h80/hn.webp"
            alt="Honduras"
            style={{ width: "30px", height: "20px", marginRight: "8px" }}
          />
          Honduras
        </div>
      ),
    },
    {
      value: "5",
      label: (
        <div className="d-flex align-items-center">
          <img
            src="https://flagpedia.net/data/flags/h80/mx.webp"
            alt="México"
            style={{ width: "30px", height: "20px", marginRight: "8px" }}
          />
          México
        </div>
      ),
    },
    {
      value: "6",
      label: (
        <div className="d-flex align-items-center">
          <img
            src="https://flagpedia.net/data/flags/h80/pe.webp"
            alt="Perú"
            style={{ width: "30px", height: "20px", marginRight: "8px" }}
          />
          Perú
        </div>
      ),
    },
    {
      value: "6",
      label: (
        <div className="d-flex align-items-center">
          <img
            src="https://flagpedia.net/data/flags/h80/ve.webp"
            alt="Venezuela"
            style={{ width: "30px", height: "20px", marginRight: "8px" }}
          />
          Venezuela
        </div>
      ),
    },
  ];
  return (
    <>
      <main className="bg-img">
        <div className="container w-50 my-3 p-3 border rounded border-secondary-subtle bg-gral">
          <div className="mb-3">
            <label htmlFor="seccion-lider" className="form-label fw-bold fs-2">
              Directorio
            </label>
          </div>
          <div className="container-cita p-3">
            <div className="quote-box">
              <div class="quote edu-au-vic-wa-nt-hand">
                <svg
                  className="mt-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  class="bi bi-quote"
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
          {/*Divisor para seleccionar país al cual ajustar directorio*/}
          <div className="p-4">
            <div>
              <label>Seleccione un país</label>
              <Select placeholder="--" options={paises} />
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
              <div className="d-flex justify-content mb-3">
                <div class="p-2">A</div>
                <div class="p-2">C</div>
                <div class="p-2">I</div>
                <div class="p-2">O</div>
                <div class="p-2">P</div>
                <div class="p-2">S</div>
              </div>
            </div>
            <div>
              <label
                className="w-100 p-1 fw-bold"
                style={{ backgroundColor: "#173567", color: "white" }}
              >
                Filtrar por ODS
              </label>
              <div className="d-flex just mb-3 mt-2">
                {odsData.map((item, index) => (
                  <Tooltip key={index} title={item.title}>
                    <button
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
                    type="button"
                    className=" icono-ods fw-bold"
                    style={{ backgroundColor: "#C13B6C" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-globe-americas"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484q-.121.12-.242.234c-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z" />
                    </svg>
                  </button>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default DirectoryView;
