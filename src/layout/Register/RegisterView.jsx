import React, { useState } from "react";

function RegisterView({
  email,
  setEmail,
  password,
  setPassword,
  nombre,
  setNombre,
  apellido,
  setApellido,
  fechaNac,
  setFechaNac,
  handleRegister,
  handleLanguage,
}) {
  return (
    <>
      <div className="py-5 w-100 h-100 d-flex justify-content-center align-items-center bg-img border">
        <main className="border bg-white w-50 h-50 p-5 rounded bg-danger-subtle">
          <form>
            <h1>{handleLanguage("title")}</h1>
            <div className="mb-3">
              <label htmlFor="nombreRegistro" className="form-label">
                {handleLanguage("name")}
              </label>
              <input
                minLength={1}
                type="text"
                className="form-control"
                id="nombreRegistro"
                value={nombre}
                onChange={(event) => setNombre(event.target.value)}
                required={true}
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="apellidoRegistro" className="form-label">
                {handleLanguage("last_name")}
              </label>
              <input
                minLength={1}
                type="text"
                className="form-control"
                id="apellidoRegistro"
                value={apellido}
                onChange={(event) => setApellido(event.target.value)}
                required={true}
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="fechaNacRegistro" className="form-label">
                {handleLanguage("date")}
              </label>
              <input
                type="date"
                className="form-control"
                id="fechaNacRegistro"
                value={fechaNac}
                onChange={(event) => setFechaNac(event.target.value)}
                required={true}
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                {handleLanguage("email")}
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                {handleLanguage("password")}
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              ></input>
            </div>
            <button
              onClick={(event) => handleRegister(event)}
              type="submit"
              className="btn btn-primary"
            >
              {handleLanguage("register")}
            </button>
          </form>
          <a className="text-dark" href="/login">{handleLanguage("login")}</a>
        </main>
      </div>
    </>
  );
}

export default RegisterView;
