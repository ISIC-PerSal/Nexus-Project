import React from "react";
import Tooltip from "@mui/material/Tooltip";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import Grid from "@mui/material/Grid";
import SelectCountry from "../../components/SelectCountry/SelectCountry";
import SelectState from "../../components/SelectState/SelectState";
import SelectCity from "../../components/SelectCity/SelectCity";
import ods_es from "../../util/ods_es";

function EditProjectView({
  data,
  project,
  setProject,
  image,
  setImage,
  leader_type,
  setLeader_type,
  name,
  setName,
  checkName,
  setCheckName,
  email,
  setEmail,
  checkEmail,
  setCheckEmail,
  checkRfc,
  setCheckRfc,
  clabe,
  setClabe,
  checkClabe,
  setCheckClabe,
  description,
  setDescription,
  donation,
  setDonation,
  country,
  setCountry,
  city,
  setCity,
  address,
  setAddress,
  ods1,
  setOds1,
  ods2,
  setOds2,
  ods3,
  setOds3,
  ods4,
  setOds4,
  ods5,
  setOds5,
  ods6,
  setOds6,
  ods7,
  setOds7,
  ods8,
  setOds8,
  ods9,
  setOds9,
  ods10,
  setOds10,
  ods11,
  setOds11,
  ods12,
  setOds12,
  ods13,
  setOds13,
  ods14,
  setOds14,
  ods15,
  setOds15,
  ods16,
  setOds16,
  ods17,
  setOds17,
  phone,
  setPhone,
  projectType,
  setProjectType,
  rfc,
  setRfc,
  startDate,
  setStartDate,
  finishDate,
  setFinishDate,
  state,
  setState,
  status,
  setStatus,
  url,
  setUrl,
  volunteers,
  setVolunteers,
  zip,
  setZip,
  checkedOds,
  handleCheckboxChange,
}) {
  const longText = `¿Por qué preguntamos esto?: Para tener un seguimiento seguro de donativos financieros en temas legales, solicitamos este tipo de datos a nuestros usuarios. No se comparten con nadie más.`;
  const donacion = `Al autorizar la recepción de donativos, permites al voluntariado contactarte para contribuir en especie o financieramente a tu causa. Datos como tu CLABE serán visibles para ellos.`;
  return (
    <>
      <main className="py-3 container w-50 mt-3 p-3 border rounded border-secondary-subtle bg-gral">
        <h1>Editar Proyecto</h1>
        <hr />
        <form action="">
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
                value={leader_type}
                onChange={(e) => setLeader_type(e.target.value)}
              >
                <option value={0}>Seleccione su tipo de representación </option>
                <option value={"Individuo"}>Individuo</option>
                <option value={"Institución"}>Institución</option>
                <option value={"Empresa"}>Empresa</option>
                <option value={"Organización"}>Organización</option>
              </select>
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
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={checkName}
                  onChange={(e) => setCheckName(e.target.checked)}
                  id="flexCheckDefault"
                ></input>
                <label
                  className="form-check-label text-body-secondary"
                  htmlFor="flexCheckDefault"
                >
                  Usar mi nombre completo
                </label>
              </div>
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
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={checkEmail}
                  onChange={(e) => setCheckEmail(e.target.checked)}
                  id="checkEmail"
                ></input>
                <label
                  className="form-check-label text-body-secondary"
                  htmlFor="checkEmail"
                >
                  Usar mi correo electrónico
                </label>
              </div>
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
            {/* <div className="mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-file-earmark-image"
                viewBox="0 0 16 16"
              >
                <path d="M6.502 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                <path d="M14 14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zM4 1a1 1 0 0 0-1 1v10l2.224-2.224a.5.5 0 0 1 .61-.075L8 11l2.157-3.02a.5.5 0 0 1 .76-.063L13 10V4.5h-2A1.5 1.5 0 0 1 9.5 3V1z" />
              </svg>
              <label htmlFor="img-proyecto" className="form-label">
                Imagen descriptiva del proyecto (JPG) <i>(opcional)</i>
              </label>
              <input
                type="file"
                className="form-control"
                id="img-proyecto"
                onChange={(e) => handleImageUpload(e, setSelectedFile)}
                ref={fileInputRef}
              ></input>
            </div> */}
            {/* <div className="mb-3">
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
            </div> */}
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
                <Tooltip title={donacion}>
                  <HelpCenterIcon />
                </Tooltip>
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
              <Tooltip title={longText}>
                <HelpCenterIcon />
              </Tooltip>
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
              <Tooltip title={longText}>
                <HelpCenterIcon />
              </Tooltip>
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
            <SelectCountry country={country} setCountry={setCountry} />
            <SelectState state={state} setState={setState} country={country} />
            <SelectCity
              city={city}
              setCity={setCity}
              country={country}
              state={state}
            />
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
              <Grid container spacing={2}>
                {ods_es.map((item, index) => (
                  <Grid key={index} item xs={3}>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={`ods${item.ods}`}
                        checked={checkedOds[`ods${item.ods}`] || false}
                        onChange={handleCheckboxChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`ods${item.ods}`}
                      >
                        <img src={item.url} className="w-100" alt="" />
                      </label>
                    </div>
                  </Grid>
                ))}
              </Grid>
            </div>
          </div>
          <div className="w-100 d-flex">
            <div className="w-50 pe-2">
              <button type="button" className="btn btn-danger w-100">
                Publicar proyecto
              </button>
            </div>
            <div className="w-50 ps-2">
              <button
                type="button"
                className="btn bg-secondary w-100 text-white"
              >
                Guardar borrador
              </button>
            </div>
          </div>
        </form>
      </main>
    </>
  );
}

export default EditProjectView;
