import React from "react";
import { Link } from "react-router-dom";
function LoginView({ email, setEmail, password, setPassword, handleLogin }) {
<<<<<<< HEAD
    return (
        <>
            <div className="w-100 h-100 my-5 py-5 d-flex justify-content-center align-items-center">
                <main className="border bg-white w-50 h-50 p-5 rounded bg-danger-subtle">
                    <form>
                        <h1>Inicia sesión</h1>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Usuario</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}>
                            </input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}>
                            </input>
                        </div>
=======
  const irHome = () => {};
>>>>>>> 0bc403436f8d6eb448ebe6605fa848e56f26fa8c

  return (
    <>
      <div className="bg-info vw-100 vh-100 d-flex justify-content-center align-items-center">
        <main className="border bg-white w-50 h-50 p-5 rounded shadow p-3 mb-5 bg-body-tertiary">
          <form>
            <h1>Inicio de sesión</h1>
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
              onClick={(e) => handleLogin(e)}
              type="submit"
              className="btn btn-primary"
            >
              Iniciar sesión
            </button>
          </form>
          <a href="/register">Ir a registro de usuario</a>
        </main>
      </div>
    </>
  );
}

export default LoginView;
