import React from "react";

function RegisterView({
  email,
  setEmail,
  password,
  setPassword,
  handleRegister,
}) {
  return (
    <>
      <div className="bg-info vw-100 vh-100 d-flex justify-content-center align-items-center">
        <main className="border bg-white w-50 h-50 p-5 rounded shadow p-3 mb-5 bg-body-tertiary">
          <form>
            <h1>Registrar usuario</h1>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Correo
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <button
              onClick={(e) => handleRegister(e)}
              type="submit"
              className="btn btn-primary"
            >
              Registrar
            </button>
          </form>
          <a href="/login">Ir a inicio de sesión</a>
        </main>
      </div>
    </>
  );
}

export default RegisterView;
