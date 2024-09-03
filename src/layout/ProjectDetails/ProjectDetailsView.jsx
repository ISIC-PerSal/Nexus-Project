import React, { useState } from "react";
import BadgeODSView from "../../components/BadgeODS/BadgeODSView";
import imgDefault from "../../assets/Logo.png"
import Timer from "../../components/Timer/Timer";
import BadgeCountryView from "../../components/BadgeLocation/BadgeCountryView";

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
  data
}) {

  const [odsArray, setOdsArray] = useState([]);
  return (
    <>
      <main className="py-3 bg-img">
        <div className="container w-75 mt-3 p-3 border rounded border-secondary-subtle bg-gral">
          <div className="w-100 d-flex">
            <div className="w-50 h-auto"><img
              src={image ? image : imgDefault}
              srcSet={image ? image : imgDefault}
              className="w-100 h-auto rounded-circle"
            ></img></div>
            <div className="w-50 ms-3">
              <div className="mb-3">
                <label className="form-label">Nombre del proyecto:</label>
                <p className="fs-1 fw-bold">{project}</p>
              </div>
              <div className="mb-3">
                <label className="form-label">Nombre del líder o representante:</label>
                <span className="form-control">{name}</span>
              </div>
              <div className="mb-3">
                <label className="form-label">Tipo de representante:</label>
                <span className="form-control">{leaderType}</span>
              </div>
              <div className="mb-3">
                <label className="form-label">Tipo de proyecto:</label>
                <span className="form-control">{projectType}</span>
              </div>
            </div>
          </div>

          <div className="w-10 d-flex">
            <div className="w-50">
              <div className="mb-3 w-50">
                <label className="form-label">Fecha de arranque:</label>
                <span className="form-control">{startDate}</span>
              </div>
              <Timer date={startDate} />
            </div>
            <div className="w-50">
              <div className="mb-3 w-50">
                <label className="form-label">Fecha límite de inscripción:</label>
                <span className="form-control">{finishDate}</span>
              </div>
              <Timer date={finishDate} />
            </div>
          </div>

          <div>

          </div>

          <br />

          <div className="d-flex">
            <div className="w-75 p-2">
              <div className="h4 pb-2 mb-4 text-danger border-bottom border-danger">
                <label className="form-label fw-bold fs-4">Datos del proyecto</label>


                <div className="d-flex">


                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="d-flex flex-wrap">
              <span className="fw-bold">ODS: </span>
            </div>
            <div className="mb-3 text-center">
              <label className="form-label">Descripcion del proyecto:</label>
              <span className="form-control">{description}</span>
            </div>
            <div className="mb-3">
              <label className="form-label">Numero de voluntarios:</label>
              <span className="form-control">{volunteers}</span>
            </div>
          </div>

          <hr />
          <div className="d-flex bg-body-secondary">

            <div className="w-50 p-4">
              <label className="form-label fw-bold fs-5 border-bottom border-dark">Detalles: </label>
              <div className="mb-2 fw-bold">
                <img src="{countryImage}" alt="Imagen del país" className="img-fluid" />
                <span>
                  {country}
                </span>
              </div>
              <div className="mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-geo-alt-fill me-2" viewBox="0 0 16 16">
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                </svg>
                <label className="form-label fw-bold ">Estado:</label>
                <span className="form-control bg-body-secondary border border-light">{state}</span>
              </div>
              <div className=" mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-geo-alt me-2" viewBox="0 0 16 16">
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                </svg>
                <label className="form-label fw-bold ">Municipio:</label>
                <span className="form-control bg-body-secondary border border-light">{city}</span>
              </div>
              <div className="mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-signpost-fill" viewBox="0 0 16 16">
                  <path d="M7.293.707A1 1 0 0 0 7 1.414V4H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5v6h2v-6h3.532a1 1 0 0 0 .768-.36l1.933-2.32a.5.5 0 0 0 0-.64L13.3 4.36a1 1 0 0 0-.768-.36H9V1.414A1 1 0 0 0 7.293.707" />
                </svg>
                <label className="form-label fw-bold ">Direccion:</label>
                <span className="form-control bg-body-secondary border border-light">{address}</span>
              </div>
            </div>

            <div className="w-50 p-4 ">
              <label className="form-label fw-bold fs-5 border-bottom border-dark">Contacto: </label>
              <div className="mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-telephone-fill me-2" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                </svg>
                <label className="form-label fw-bold ">Telefono:</label>
                <span className="form-control bg-body-secondary border border-light">{phone}</span>
              </div>
              <div className="mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-envelope-at-fill me-2" viewBox="0 0 16 16">
                  <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671" />
                  <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791" />
                </svg>
                <label className="form-label fw-bold ">Correo:</label>
                <span className="form-control bg-body-secondary border border-light">{email}</span>
              </div>
            </div>

          </div>
        </div>
      </main >
    </>
  );
}

export default ProjectDetailsView;