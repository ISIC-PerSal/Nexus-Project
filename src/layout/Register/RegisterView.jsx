import React, { useState } from 'react'

function RegisterView({email, setEmail, password, setPassword, nombre, setNombre, apellido, setApellido, fechaNac, setFechaNac, handleRegister}) {

    return (
        <>
            <div className="py-5 my-5 w-100 d-flex justify-content-center align-items-center bg-img">
                <main className="border bg-white w-50 h-50 p-5 rounded">
                    <form>
                        <h1>Registro</h1>
                        <div className="mb-3">
                            <label htmlFor="nombreRegistro" className="form-label">Nombre</label>
                            <input
                            minLength={1}
                                type="text" className="form-control" id="nombreRegistro" 
                                value={nombre}
                                onChange={(event) => setNombre(event.target.value)}
                                required={true}
                            ></input>

                        </div>
                        <div className="mb-3">
                            <label htmlFor="apellidoRegistro" className="form-label">Apellido</label>
                            <input
                            minLength={1}
                                type="text" className="form-control" id="apellidoRegistro" 
                                value={apellido}
                                onChange={(event) => setApellido(event.target.value)}
                                required={true}
                            ></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="fechaNacRegistro" className="form-label">Fecha de nacimiento</label>
                            <input
                                type="date" className="form-control" id="fechaNacRegistro" 
                                value={fechaNac}
                                onChange={(event) => setFechaNac(event.target.value)}
                                required={true}
                            ></input>

                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Usuario</label>
                            <input
                                type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            ></input>

                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            ></input>
                        </div>
                        <button onClick={(event)=>handleRegister(event)}
                            type="submit" className="btn btn-primary">
                            Regístrate
                        </button>

                    </form>
                    <a href="/login">
                    Ir a inicio de sesión
                    </a>
                </main>
            </div>
        </>
    );
}

export default RegisterView