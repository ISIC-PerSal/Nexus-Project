import React, { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import Grid from "@mui/material/Grid";
import ods from "../../util/ods";
const longText = `¿Por qué preguntamos esto?: Para tener un seguimiento seguro de donativos financieros en temas legales, solicitamos este tipo de datos a nuestros usuarios. No se comparten con nadie más`;

function NewProjectFormView() {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [representacion, setRepresentacion] = useState("0");
  console.log(representacion);
  return (
    <>
      <main className="py-3">
        <form
          action=""
          className="container w-50 mt-3 p-3 border rounded border-secondary-subtle bg-gral"
        >
          <div className="mb-3">
            <label htmlFor="seccion-lider" className="form-label fw-bold fs-4">
              Datos del líder
            </label>
            <div className="mb-3">
              <label htmlFor="tipo-lider" className="form-label">
                Representante
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                defaultValue={representacion}
                onChange={(e) => setRepresentacion(e.target.value)}
              >
                <option value={"0"}>
                  Seleccione su tipo de representación{" "}
                </option>
                <option value="Individuo">Individuo</option>
                <option value="Institución">Institución</option>
                <option value="Empresa">Empresa</option>
                <option value="Organización">Organización</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="nombre-lider" className="form-label">
                Nombre del líder o representante
              </label>
              <input
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                type="text"
                className="form-control"
                id="nombre-lider"
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="telefono-lider" className="form-label">
                Número telefónico de contacto
              </label>
              <input
                type="tel"
                className="form-control"
                id="telefono-lider"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="correo-lider" className="form-label">
                Dirección email de contacto
              </label>
              <input
                type="email"
                className="form-control"
                id="correo-lider"
                required
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="RFC-lider" className="form-label me-1">
                RFC
              </label>
              <Tooltip title={longText}>
                <HelpCenterIcon />
              </Tooltip>
              <input
                type="text"
                className="form-control"
                id="RFC-lider"
              ></input>
            </div>
          </div>
          <div className="mb-3">
            <label
              htmlFor="seccion-proyecto"
              className="form-label fw-bold fs-4"
            >
              Datos del proyecto
            </label>
            <div className="mb-3">
              <label htmlFor="nombre-proyecto" className="form-label">
                Nombre del proyecto
              </label>
              <input
                type="text"
                className="form-control"
                id="nombre-proyecto"
              ></input>
            </div>
            <div>
              <label htmlFor="nombre-proyecto" className="form-label">
                Número de voluntarios
              </label>
              <input
                type="number"
                className="form-control"
                id="nombre-proyecto"
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="descripcion" className="form-label">
                Descripción
              </label>
              <textarea
                className="form-control"
                id="descripcion"
                rows="3"
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="tipo-proyecto" className="form-label">
                Proyecto
              </label>
              <select
                id="tipo-proyecto"
                className="form-select"
                aria-label="Default select example"
                defaultValue={""}
              >
                <option value={""}>Selecione un tipo de proyecto</option>
                <option value="1">Donación</option>
                <option value="2">Campaña</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="direccion" className="form-label">
                Dirección
              </label>
              <textarea
                className="form-control"
                id="direccion"
                rows="2"
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="cp" className="form-label">
                Código postal
              </label>
              <input
                type="number"
                className="form-control"
                id="cp"
                rows="2"
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="municipio" className="form-label">
                Municipio
              </label>
              <input className="form-control" id="municipio" rows="2"></input>
            </div>
            <div className="mb-3">
              <label htmlFor="estado" className="form-label">
                Estado
              </label>
              <input className="form-control" id="estado" rows="2"></input>
            </div>
            <div className="mb-3">
              <label htmlFor="pais" className="form-label">
                País
              </label>
              <input className="form-control" id="pais" rows="2"></input>
            </div>
            <div className="mb-3">
              <label htmlFor="fecha-arranque" className="form-label">
                Fecha de arranque
              </label>
              <input
                type="date"
                className="form-control"
                id="fecha-arranque"
                rows="2"
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="fecha-inscripcion" className="form-label">
                Fecha límite de inscripción
              </label>
              <input
                type="date"
                className="form-control"
                id="fecha-inscripcion"
                rows="2"
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="ods" className="form-label">
                ODS (s) que abarca
              </label>
              <Grid container spacing={2}>
                {ods.map((item, index) => (
                  <Grid key={index} item xs={3}>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={`ods${item.ods}`}
                      ></input>
                      <label
                        className="form-check-label"
                        htmlFor={`ods${item.ods}`}
                      >
                        <img className="w-100" src={item.url} alt="" />
                      </label>
                    </div>
                  </Grid>
                ))}
              </Grid>
            </div>
          </div>
          <button type="button" className="btn btn-danger w-100">
            Enviar datos
          </button>
        </form>
      </main>
    </>
  );
}

export default NewProjectFormView;
