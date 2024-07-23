import React from "react";

function NewProjectFormView() {
  return (
    <>
      <main>
        <form
          action=""
          className="container w-50 bg-gral mt-3 p-3 border border-secondary-subtle rounded"
        >
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
          <div className="mb-3">
            <label htmlFor="numero-voluntarios" className="form-label">
              Número de voluntarios
            </label>
            <input
              type="text"
              className="form-control"
              id="numero-voluntarios"
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="descripcion" className="form-label">
              Descricpción
            </label>
            <textarea
              className="form-control"
              id="descripcion"
              rows="3"
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="tipo-proyecto" className="form-label">
              Tipo de proyecto
            </label>
            <select
              id="tipo-proyecto"
              class="form-select"
              aria-label="Default select example"
            >
              <option selected>Selecione un tipo de proyecto</option>
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
            <label htmlFor="codigo-postal" className="form-label">
              Código postal
            </label>
            <input
              type="number"
              className="form-control"
              id="codigo-postal"
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="municipio" className="form-label">
              Municipio
            </label>
            <input type="text" className="form-control" id="municipio"></input>
          </div>
          <div className="mb-3">
            <label htmlFor="estado" className="form-label">
              Estado
            </label>
            <input type="text" className="form-control" id="estado"></input>
          </div>
          <div className="mb-3">
            <label htmlFor="pais" className="form-label">
              País
            </label>
            <input type="text" className="form-control" id="pais"></input>
          </div>
          <div className="mb-3">
            <label htmlFor="fecha-arranque" className="form-label">
              Fecha de arranque
            </label>
            <input
              type="date"
              className="form-control"
              id="fecha-arranque"
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="fecha-limite" className="form-label">
              Fecha limite para inscribirse
            </label>
            <input
              type="date"
              className="form-control"
              id="fecha-limite"
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="fecha-limite" className="form-label">
              ODS que involucra
            </label>
            <div className="d-flex">
              
            </div>
          </div>
        </form>
      </main>
    </>
  );
}

export default NewProjectFormView;