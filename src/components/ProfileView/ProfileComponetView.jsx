import React from "react";
import profileIcon from "../../assets/profile.jpg";

function ProfileComponetView({ name, lastName, email, birthday, age, password }) {
  return (
    <>
      <div className="container w-50 mt-3 p-3 border rounded border-secondary-subtle bg-gral me-4">
        <div className="d-flex justify-content-center w-100">
          <img
            className="w-50 border rounded border-secondary-subtle rounded-circle"
            src={profileIcon}
            alt=""
          />
        </div>
        <div className="mb-3">
          <label htmlFor="nameUser" className="form-label">
            Nombre completo
          </label>
          <input
            disabled={true}
            type="text"
            className="form-control"
            id="nameUser"
            value={`${name} ${lastName}`}
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="emailUser" className="form-label">
            correo
          </label>
          <input
            disabled={true}
            type="email"
            className="form-control"
            id="emailUser"
            value={`${email}`}
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
            value={`${birthday}`}
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="ageUser" className="form-label">
            Edad
          </label>
          <input
            disabled={true}
            type="text"
            className="form-control"
            id="ageUser"
            value={`${age}`}
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="passwordUser" className="form-label">
            contraseña
          </label>
          <input
            disabled={true}
            type="text"
            className="form-control"
            id="passwordUser"
            value={`${password}`}
          ></input>
        </div>
      </div>
    </>
  );
}

export default ProfileComponetView;
