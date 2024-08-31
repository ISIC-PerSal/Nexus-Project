import React, { useState } from "react";
import BadgeODSView from "../../components/BadgeODS/BadgeODSView";

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
  const [odsArray, setOdsArray] = useState([]);
  return (
    <>
      <main className="py-3 bg-img">
        <div className="container w-75 mt-3 p-3 border rounded border-secondary-subtle bg-gral">
          <div>
            <img
            //src={imagProject ? imagProject : imgDefault}
            //srcSet={data.image ? data.image : imgDefault}
            //className="w-100 h-50"
            ></img>
          </div>

          <br />

          <div className="d-flex">
            <div className="w-75 p-2">
              <div className="mb-3">
                <label className="form-label fw-bold fs-4">Datos del proyecto</label>
                <div className="mb-3">
                  <label className="form-label">Nombre del proyecto:</label>
                  <span className="form-control">{project}</span>
                </div>
                <div className="mb-3">
                  <label className="form-label">Nombre del líder o representante:</label>
                  <span className="form-control">{name}</span>
                </div>
                <div className="d-flex">
                  <div className="mb-3 w-50">
                    <label className="form-label">Fecha de arranque:</label>
                    <span className="form-control">{startDate}</span>
                  </div>
                  <div className="mb-3 w-50">
                    <label className="form-label">Fecha límite de inscripción:</label>
                    <span className="form-control">{finishDate}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-25 p-2">
              <div className="mb-3">
                <label className="form-label fw-bold fs-4">Información adicional</label>
                <div className="mb-3">
                  <img src="{countryImage}" alt="Imagen del país" className="img-fluid" />
                  <span>
                    {country}
                  </span>
                </div>
                <div className="mb-3">
                  <label className="form-label">Tipo de proyecto:</label>
                  <span className="form-control">{projectType}</span>
                </div>
              </div>
            </div>

          </div>

          <hr />
          <div>
            <div className="mb-3">
              <label className="form-label">Tipo de representante:</label>
              <span className="form-control">{leaderType}</span>
            </div>
            <div className="mb-3">
              <label className="form-label">Numero de voluntarios:</label>
              <span className="form-control">{volunteers}</span>
            </div>
            <div className="mb-3 text-center">
              <label className="form-label">Descripcion del proyecto:</label>
              <span className="form-control">{description}</span>
            </div>
            <div className="d-flex flex-wrap">
              <span className="fw-bold">ODS: </span>
              {odsArray.map((item, index) => (
                <BadgeODSView key={index} item={item} idShow={true} />
              ))}
            </div>
          </div>

          <hr />
          <div className="d-flex">
            <div className="w-50 p-2">
              <div className="mb-3">
                <label className="form-label fw-bold fs-6">Contacto: </label>
                <div className="mb-3">
                  <label className="form-label">Telefono:</label>
                  <span className="form-control">{phone}</span>
                </div>
                <div className="mb-3">
                  <label className="form-label">Correo:</label>
                  <span className="form-control">{email}</span>
                </div>
              </div>
            </div>

            <div className="w-50 p-2">
              <div className="mb-3">
                <label className="form-label fw-bold fs-6">Detalles: </label>
                <div className="mb-3">
                  <img src="{countryImage}" alt="Imagen del país" className="img-fluid" />
                  <span>
                    {country}
                  </span>
                </div>
                <div className="mb-3">
                  <img src="{StateImage}" alt="Imagen del Estado" className="img-fluid" />
                  <span>
                    {state}
                  </span>
                </div>
                <div className="mb-3">
                  <label className="form-label">Municipio:</label>
                  <span className="form-control">{city}</span>
                </div>
                <div className="mb-3">
                  <label className="form-label">Direccion:</label>
                  <span className="form-control">{address}</span>
                </div>
              </div>
            </div>

          </div>
        </div>


      </main >
    </>
  );
}

export default ProjectDetailsView;