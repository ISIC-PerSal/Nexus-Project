import React from 'react'
import { Link } from "react-router-dom";

function LoginView({ email, setEmail, password, setPassword, handleLogin }) {
    return (
        <>
            <div className="py-5 my-5 w-100 h-100 d-flex justify-content-center align-items-center bg-img">
                <main className="border bg-white w-50 h-50 p-5 rounded bg-danger-subtle">
                    <form>
                        <h1>Inicia sesión</h1>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Correo</label>
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

                        <button onClick={handleLogin} type="submit" className="btn btn-primary">Iniciar sesión</button>

                    </form>
                    <a href='/register'>
                        Regístrate
                    </a>
                </main>
            </div>
        </>
    );
}
export default LoginView;