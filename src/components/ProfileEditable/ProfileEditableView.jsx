import React from "react";
import Tooltip from "@mui/material/Tooltip";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";

function ProfileEditableView({
  name,
  setName,
  lastName,
  setLastName,
  email,
  setEmail,
  birthday,
  setBirthday,
  password,
  setPassword,
  rfc,
  setRfc,
  clabe,
  setClabe,
  updateUser,
}) {
  const textCLABE = `¿Por qué preguntamos esto?: Para tener un seguimiento seguro de donativos financieros en temas legales, solicitamos este tipo de datos a nuestros usuarios. No se comparten con nadie más`;
  return (
    <>
      <form
        action=""
        className="container w-50 mt-3 p-3 border rounded border-secondary-subtle bg-gral ms-4"
      >
        <div>
          <h2>
            Editar perfil{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              className="bi bi-pencil-square"
              viewBox="0 0 16 16"
            >
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
              <path
                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
              />
            </svg>
          </h2>
        </div>
        <div className="mb-3">
          <label htmlFor="nameUser" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="nameUser"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="lastNameUser" className="form-label">
            Apellidos
          </label>
          <input
            type="text"
            className="form-control"
            id="lastNameUser"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="emailUser" className="form-label">
            Correo
          </label>
          <input
            type="email"
            className="form-control"
            id="emailUser"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="birthdayUser" className="form-label">
            Fecha de nacimiento
          </label>
          <input
            disabled={true}
            type="date"
            className="form-control"
            id="birthdayUser"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="passwordUser" className="form-label">
            Contraseña
          </label>
          <input
            type="text"
            className="form-control"
            id="passwordUser"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="rfcUser" className="form-label">
            RFC{" "}
            <Tooltip title={textCLABE}>
              <HelpCenterIcon />
            </Tooltip>
          </label>
          <input
            value={rfc}
            onChange={(e) => setRfc(e.target.value)}
            type="text"
            className="form-control text-uppercase"
            id="rfcUser"
            maxLength={13}
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="clabeUser" className="form-label">
            CLABE{" "}
            <Tooltip title={textCLABE}>
              <HelpCenterIcon />
            </Tooltip>
          </label>
          <input
            value={clabe}
            onChange={(e) => setClabe(e.target.value)}
            type="text"
            className="form-control text-uppercase"
            id="clabeUser"
            maxLength={18}
          ></input>
        </div>
        <input
          onClick={updateUser}
          className="btn btn-primary w-100"
          type="submit"
          value="Guardar datos"
        ></input>
      </form>
    </>
  );
}

export default ProfileEditableView;
