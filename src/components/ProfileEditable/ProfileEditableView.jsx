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
  const TextCLABE = `¿Por qué preguntamos esto?: Para tener un seguimiento seguro de donativos financieros en temas legales, solicitamos este tipo de datos a nuestros usuarios. No se comparten con nadie más`;
  return (
    <>
      <form
        action=""
        className="container w-50 mt-3 p-3 border rounded border-secondary-subtle bg-gral ms-4"
      >
        <div>
          <h2>Editar perfil</h2>
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
            apellidos
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
            correo
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
          <label htmlFor="RFCUser" className="form-label">
            RFC {""}
            <Tooltip title={TextCLABE}>
              <HelpCenterIcon />
            </Tooltip>
          </label>
          <input
            value={rfc}
            onChange={(e) => setRfc(e.target.value)}
            type="text"
            className="form-control"
            id="RFCUser"
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="clabeUser" className="form-label">
            CLABE{""}
            <Tooltip title={TextCLABE}>
              <HelpCenterIcon />
            </Tooltip>
          </label>
          <input
            value={clabe}
            onChange={(e) => setClabe(e.target.value)}
            type="text"
            className="form-control"
            id="clabeUser"
          ></input>
        </div>

        <div className="mb-3">
          <label htmlFor="passwordUser" className="form-label">
            contraseña{" "}
          </label>
          <input
            type="text"
            className="form-control"
            id="passwordUser"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
