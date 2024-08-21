import React, { useState } from 'react'

function RegisterView({email, setEmail, password, setPassword, nombre, setNombre, apellido, setApellido, fechaNac, setFechaNac, handleRegister}) {

    return (
        <>
            <div className="py-5 my-5 w-100 d-flex justify-content-center align-items-center bg-danger-subtle">
                <main className="border bg-white w-50 h-50 p-5 rounded">
                    <form>
                        <h1>Registro de usuario</h1>
                        <div className="mb-3">
                            <label htmlFor="nombre_registro" className="form-label">Nombre</label>
                            <input
                                minLength={1}
                                required={true}
                                type="text" 
                                className="form-control" 
                                id="nombre_registro" 
                                value={nombre}
                                onChange={(event) => setNombre(event.target.value)}
                            ></input>

                        </div>
                        <div className="mb-3">
                            <label htmlFor="apellidoRegistro" className="form-label">Apellido</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="apellidoRegistro"
                                value={apellido}
                                onChange={(event) => setApellido(event.target.value)}
                            ></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="fechaNacRegistro" className="form-label">Fecha de nacimiento</label>
                            <input 
                           
                                type="date" 
                                className="form-control" 
                                id="fechaNacRegistro"
                                value={fechaNac}
                                onChange={(event) => setFechaNac(event.target.value)}
                            ></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="correoRegistro" className="form-label">Correo</label>
                            <input 
                                minLength={1}
                                required={true}
                                type="email" 
                                className="form-control" 
                                id="correoRegistro"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            ></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="contraseñaRegistro" className="form-label">Contraseña</label>
                            <input 
                                minLength={1}
                                required={true}
                                type="password" 
                                className="form-control" 
                                id="contraseñaRegistro"
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