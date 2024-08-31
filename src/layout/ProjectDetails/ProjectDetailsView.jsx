import React from "react";

function ProjectDetailsView({
  id,
  leaderType,
  setLeaderType,
  name,
  setName,
  checkName,
  setCheckName,
  phone,
  setPhone,
  email,
  setEmail,
  checkEmail,
  setCheckEmail,
  rfc,
  setRfc,
  checkRfc,
  setCheckRfc,
  clabe,
  setClabe,
  checkClabe,
  setCheckClabe,
  project,
  setProject,
  image,
  setImage,
  urlProject,
  setUrlProject,
  volunteers,
  setVolunteers,
  description,
  setDescription,
  projectType,
  setProjectType,
  donation,
  setDonation,
  country,
  setCountry,
  state,
  setState,
  zip,
  setZip,
  city,
  setCity,
  address,
  setAddress,
  startDate,
  setStartDate,
  finishDate,
  setFinishDate,
}) {
  return (
    <>
      <main className="py-3 bg-img">
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
                Representante: 
              </label>
              <span>{leaderType}</span>
            </div>
            <div className="mb-3">
              <label htmlFor="nombre-lider" className="form-label">
                Nombre del líder o representante
              </label>
              <input
                type="text"
                className="form-control"
                id="nombre-lider"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="telefono-lider" className="form-label">
                Número telefónico de contacto
              </label>
              <input
                type="tel"
                maxLength={10}
                minLength={10}
                className="form-control"
                id="nombre-lider"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="correo-lider" className="form-label" required>
                Dirección email de contacto
              </label>
              <input
                type="email"
                className="form-control"
                id="correo-lider"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={project}
                onChange={(e) => setProject(e.target.value)}
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="url-proyecto" className="form-label">
                URL del proyecto <i>(opcional)</i>
              </label>
              <input
                type="text"
                className="form-control"
                id="url-proyecto"
                value={urlProject}
                onChange={(e) => setUrlProject(e.target.value)}
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
                min={1}
                value={volunteers}
                onChange={(e) => setVolunteers(e.target.value)}
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
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="tipo-proyecto" className="form-label">
                Proyecto
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                defaultValue={projectType}
                onChange={(e) => setProjectType(e.target.value)}
              >
                <option value={0}>Seleccione su tipo de proyecto</option>
                <option value={"Campaña Presencial"}>Campaña Presencial</option>
                <option value={"Iniciativa Virtual"}>Iniciativa Virtual</option>
                <option value={"Proyecto Hibrido"}>Proyecto Hibrido</option>
              </select>
            </div>
            <div className="mb-3">
              <div className="form-check">
                <label
                  className="form-check-label text-body-secondary"
                  htmlFor="checkDonations"
                >
                  Estoy de acuerdo en recibir donativos para mi proyecto
                </label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="checkDonations"
                  value={donation}
                  onChange={(e) => setDonation(e.target.checked)}
                ></input>
              </div>
            </div>
            <div
              className={`mb-3 mx-5 ${donation == true ? "show" : "no-show"}`}
            >
              <label htmlFor="RFC-lider" className="form-label me-1">
                RFC
              </label>
              <input
                type="text"
                className="form-control"
                id="RFC-lider"
                maxLength={13}
                minLength={12}
                value={rfc}
                onChange={(e) => setRfc(e.target.value)}
              ></input>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={checkRfc}
                  onChange={(e) => setCheckRfc(e.target.checked)}
                  id="checkRfc"
                ></input>
                <label
                  className="form-check-label text-body-secondary"
                  htmlFor="checkRfc"
                >
                  Usar mi RFC
                </label>
              </div>
            </div>
            <div
              className={`mb-3 mx-5 ${donation == true ? "show" : "no-show"}`}
            >
              <label htmlFor="CLABE-lider" className="form-label me-1">
                CLABE interbancaria
              </label>
              <input
                type="text"
                className="form-control"
                id="CLABE-lider"
                maxLength={18}
                minLength={18}
                value={clabe}
                onChange={(e) => setClabe(e.target.value)}
              ></input>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={checkClabe}
                  onChange={(e) => setCheckClabe(e.target.checked)}
                  id="checkClabe"
                ></input>
                <label
                  className="form-check-label text-body-secondary"
                  htmlFor="checkClabe"
                >
                  Usar mi CLABE
                </label>
              </div>
            </div>

            <div
              className={`mb-3  ${
                projectType == "Iniciativa Virtual" ? "no-show" : "show"
              }`}
            >
              <label htmlFor="cp" className="form-label">
                Código postal
              </label>
              <input
                type="number"
                className="form-control"
                id="cp"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
              ></input>
            </div>
            <div
              className={`mb-3  ${
                projectType == "Iniciativa Virtual" ? "no-show" : "show"
              }`}
            >
              <label htmlFor="direccion" className="form-label">
                Dirección
              </label>
              <textarea
                className="form-control"
                id="direccion"
                rows="2"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              ></textarea>
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
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
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
                value={finishDate}
                onChange={(e) => setFinishDate(e.target.value)}
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="ods" className="form-label">
                ODS (s) que abarca
              </label>
            </div>
          </div>
        </form>
      </main>
    </>
  );
}

export default ProjectDetailsView;
