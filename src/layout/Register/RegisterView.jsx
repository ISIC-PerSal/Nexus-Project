import React from "react";

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
}) {
  return (
    <div className="py-5 my-5 w-100 d-flex justify-content-center align-items-center bg-img">
      <main className="border bg-white w-50 h-50 p-5 rounded">
        <form onSubmit={handleRegister}>
          <h1>Registro</h1>

          <div className="mb-3">
            <label htmlFor="nombreRegistro" className="form-label">
              nombre
            </label>
            <input
              minLength={1}
              type="text"
              className="form-control"
              id="nombreRegistro"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="apellidoRegistro" className="form-label">
              apellido
            </label>
            <input
              minLength={1}
              type="text"
              className="form-control"
              id="apellidoRegistro"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
            ></input>
          </div>

          <div className="mb-3">
            <label htmlFor="fechaRegistro" className="form-label">
              Fecha de nacimiento
            </label>
            <input
              type="date"
              className="form-control"
              id="fechaRegistro"
              value={fechaNac}
              onChange={(e) => setFechaNac(e.target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Correo
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
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
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Regístrate
          </button>
        </form>
        <a href="/login">Ir a inicio de sesión</a>
      </main>
    </div>
  );
}

export default RegisterView;
