import React, { useEffect, useState } from "react";
import BadgeODSView from "../../components/BadgeODS/BadgeODSView";
import imgDefault from "../../assets/Logo.png";
import Timer from "../../components/Timer/Timer";
import odsData from "../../util/odsData";
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
  // const idProject = data.id_project_pk;
  // const renderODS = () => {
  //   const activeODS = [];

  //   for (let i = 1; i <= 17; i++) {
  //     const odsKey = `ods${i}`;
  //     if (data[odsKey] === "1") {
  //       const odsItem = {
  //         id_ods: i,
  //         ods: odsData[i - 1].title,
  //       };
  //       activeODS.push(odsItem);
  //     }
  //   }
  //   setOdsArray(activeODS);
  // };
  // useEffect(() => {
  //   renderODS();
  // }, [idProject]);
  return (
    <>
      <main className="py-3 bg-img">
        <div className="container w-75 mt-3 p-3 border rounded border-secondary-subtle bg-gral">
          <div className="w-100 d-flex">
            <div className="w-50 h-auto">
              <img
                src={image ? image : imgDefault}
                srcSet={image ? image : imgDefault}
                className="w-100 h-auto rounded-circle"
              ></img>
            </div>
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
          <div className="w-100 d-flex">
            <div className="w-50">
              <div className="mb-3 w-50">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-calendar2-month me-2" viewBox="0 0 16 16">
                  <path d="m2.56 12.332.54-1.602h1.984l.54 1.602h.718L4.444 7h-.696L1.85 12.332zm1.544-4.527L4.9 10.18H3.284l.8-2.375zm5.746.422h-.676v2.543c0 .652-.414 1.023-1.004 1.023-.539 0-.98-.246-.98-1.012V8.227h-.676v2.746c0 .941.606 1.425 1.453 1.425.656 0 1.043-.28 1.188-.605h.027v.539h.668zm2.258 5.046c-.563 0-.91-.304-.985-.636h-.687c.094.683.625 1.199 1.668 1.199.93 0 1.746-.527 1.746-1.578V8.227h-.649v.578h-.019c-.191-.348-.637-.64-1.195-.64-.965 0-1.64.679-1.64 1.886v.34c0 1.23.683 1.902 1.64 1.902.558 0 1.008-.293 1.172-.648h.02v.605c0 .645-.423 1.023-1.071 1.023m.008-4.53c.648 0 1.062.527 1.062 1.359v.253c0 .848-.39 1.364-1.062 1.364-.692 0-1.098-.512-1.098-1.364v-.253c0-.868.406-1.36 1.098-1.36z" />
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z" />
                  <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5z" />
                </svg>
                <label className="form-label">Fecha de arranque:</label>
                <span className="form-control">{startDate}</span>
              </div>
              <Timer date={startDate} />
            </div>
            <div className="w-50">
              {/* <div className="mb-3 w-50">
                <label className="form-label">Fecha límite de inscripción:</label>
                <span className="form-control">{finishDate}</span>
              </div>
             <Timer date={finishDate} /> */}
            </div>
          </div>

          <br />
          <div className="d-flex">
            <div className="w-75 p-2">
              <div className="mb-3">
                <label className="form-label fw-bold fs-4">Datos del proyecto</label>
                <div className="d-flex">
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

              </div>
            </div>

          </div>

          <hr />
          <div>

            <div className="mb-3">
              <label className="form-label">Numero de voluntarios:</label>
              <span className="form-control">{volunteers}</span>
            </div>
            <div className="mb-3 text-center">
              <label className="form-label">Descripcion del proyecto:</label>
              <span className="form-control">{description}</span>
            </div>
            <div className="d-flex">
              <span className="fw-bold">ODS: </span>  
              {odsArray.map((item, index) => (
                <BadgeODSView key={index} item={item} />
              ))}
            </div>
          </div>

          <hr />
          <div className="d-flex">
            <div className="w-50">
              <div className="mb-3">
                <label className="form-label fw-bold fs-6">Contacto: </label>
                <div className="mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor" className="bi bi-telephone-fill me-2" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                  </svg>
                  <label className="form-label p-2">Teléfono</label>
                  <span className="form-control">{phone}</span>
                </div>
                <div className="mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor" className="bi bi-envelope-at-fill me-2" viewBox="0 0 16 16">
                    <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671" />
                    <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791" />
                  </svg>
                  <label className="form-label p-2">Correo</label>
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
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                  </svg>
                  <label className="form-label">Municipio:</label>
                  <span className="form-control">{city}</span>
                </div>
                <div className="mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor" className="bi bi-geo-fill" viewBox="0 0 16 16">
                    <path fillru="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.3 1.3 0 0 0-.37.265.3.3 0 0 0-.057.09V14l.002.008.016.033a.6.6 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.6.6 0 0 0 .146-.15l.015-.033L12 14v-.004a.3.3 0 0 0-.057-.09 1.3 1.3 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465s-2.462-.172-3.34-.465c-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411" />
                  </svg>
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