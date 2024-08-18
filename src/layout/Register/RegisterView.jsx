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

    return (
        <>
            <div className="py-5 my-5 w-100 d-flex justify-content-center align-items-center bg-gral">
                <main className="border bg-white w-50 h-50 p-5 rounded">
                    <form>
                        <h1>Registro</h1>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Usuario</label>
                            <input
                                type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            ></input>

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
